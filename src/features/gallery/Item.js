import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectStorage } from './gallerySlice';
import useCustomFetch from '../../functions/useCustomFetch';
import Preloader from '../../components/Preloader';
import Alert from '../../components/Alert';

export default function Item() {
  const storage = useSelector(selectStorage);
  const params = useParams();
  const navigate = useNavigate();
  const { getAsset } = useCustomFetch();
  const [assetData, setAssetData] = useState({});
  const [assetExtraData, setAssetExtraData] = useState({});
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    const assetId = parseInt(params.id, 10);
    const obj = storage.find((obj) => obj.id === assetId);

    if (
      obj &&
      obj.token_id &&
      obj.asset_contract &&
      obj.asset_contract.address
    ) {
      setAssetExtraData(obj);
      getAsset(obj.asset_contract.address, obj.token_id)
        .then((data) => setAssetData(data))
        .catch((error) => setLoadingError(error));
    } else {
      setLoadingError('Ошибка: Запрашиваемый NFT не найден!');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleButtonClick() {
    navigate('/');
  }

  const assetBody = (
    <section className="p-4">
      <h3>Информация о выбранном NFT:</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Параметр</th>
            <th scope="col">Значение</th>
          </tr>
        </thead>
        <tbody>
          {assetData &&
            Object.entries({ ...assetData, ...assetExtraData }).map(
              (row, index) => {
                const valueType = typeof row[1];
                if (valueType === 'number' || valueType === 'string') {
                  return (
                    <tr key={index}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                    </tr>
                  );
                } else {
                  return null;
                }
              },
            )}
        </tbody>
      </table>
      <button
        className="btn btn-outline-primary btn-lg"
        onClick={handleButtonClick}
      >
        Вернуться назад
      </button>
    </section>
  );

  const error = loadingError && <Alert type="danger" text={loadingError} />;

  return getAsset.loading ? <Preloader /> : error || assetBody;
}

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store, selectStorage } from './gallerySlice';
import useCustomFetch from '../../functions/useCustomFetch';
import Preloader from '../../components/Preloader';
import Alert from '../../components/Alert';
import CardTile from '../../features/gallery/CardTile';

export default function Gallery() {
  const storage = useSelector(selectStorage);
  const dispatch = useDispatch();
  const { getAssets } = useCustomFetch();
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    setLoadingError(null);

    getAssets()
      .then((data) => {
        dispatch(store(data));
      })
      .catch((error) => setLoadingError(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const error = loadingError && <Alert type="danger" text={loadingError} />;

  return (
    <div>
      <div className="row d-flex justify-content-center mt-5 mb-5">
        {getAssets.loading ? (
          <Preloader />
        ) : (
          error || <CardTile items={storage} />
        )}
      </div>
    </div>
  );
}

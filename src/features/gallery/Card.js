import { Link } from 'react-router-dom';

export default function Card(props) {
  const { id, image, title } = props;

  return (
    <div className="card mt-3 shadow p-3">
      <img src={image} className="card-img-top img-fluid" alt={title} />
      <div className="card-body">
        <p className="card-text">{title}</p>
        <Link to={`/nft/${id}`} className="btn btn-outline-primary">
          Подробнее
        </Link>
      </div>
    </div>
  );
}

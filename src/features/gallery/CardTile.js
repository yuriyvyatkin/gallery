import Card from './Card';

export default function CardTile({ items }) {
  return (
    <div className="row">
      {items &&
        items.map(({ id, name, image_url }) => {
          return (
            <div key={id} className="col-4">
              <Card id={id} image={image_url} title={name} />
            </div>
          );
        })}
    </div>
  );
}

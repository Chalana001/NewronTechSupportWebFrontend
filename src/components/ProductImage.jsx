export default function ProductImage({ imgUrl, name }) {
  return (
    <div className="detail-media">
      <img src={imgUrl} alt={name} />
    </div>
  );
}

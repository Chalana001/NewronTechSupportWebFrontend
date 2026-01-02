import WhatsAppButton from "./WhatsAppButton";

export default function ProductInfo({ item }) {
  return (
    <div className="detail-info">
      <h1>{item.name}</h1>

      <p className="muted">
        {item.category} • {item.brand}
      </p>

      <div className="price-large">
        Rs.{item.price}
      </div>

      <p className="description">
        {item.description}
      </p>

      <div className="action-area">
        <WhatsAppButton
          message={`I'm interested in ${item.name} (code ${item.itemCode}). Price: Rs. ${item.price}`}
        />
      </div>
    </div>
  );
}

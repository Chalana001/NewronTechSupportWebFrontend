import { useNavigate } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton'

export default function ProductCard({ item }) {
  const navigate = useNavigate()
  return (
    <article className="card" onClick={() => navigate(`/shop/${item.itemCode}`)}>
      <div className="card-media">
        <img src={item.imgUrl} alt={item.name} onError={(e)=>e.target.style.opacity=0.7} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-meta">{item.category} • {item.brand}</p>
        <div className="card-bottom">
          <div className="price">Rs.{item.price}</div>
          <WhatsAppButton message={`I'm interested in ${item.name} (code ${item.itemCode})`} small />
        </div>
      </div>
    </article>
  )
}

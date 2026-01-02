import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../services/api'
import ProductImage from '../components/ProductImage'
import ProductInfo from '../components/ProductInfo'
import '../styles/productdetails.css'
import WhatsAppButton from '../components/WhatsAppButton'

export default function ProductDetails() {
  const { itemCode } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let mounted = true
    if (!itemCode) return
    fetch(`${API_URL}/${itemCode}`)
      .then((r) => r.json())
      .then((data) => mounted && setItem(data))
      .catch(() => {})
    return () => (mounted = false)
  }, [itemCode])

  if (!item) return <main className="page container"><p className="muted">Loading...</p></main>

  return (
    <main className="page container detail-page">
      <div className="detail-grid">
        <ProductImage imgUrl={item.imgUrl} name={item.name} />
        <ProductInfo item={item} />
      </div>
    </main>


    // <main className="page container detail-page">
    //   <div className="detail-grid">
    //     <div className="detail-media">
    //       <img src={item.imgUrl} alt={item.name} />
    //     </div>
    //     <div className="detail-info">
    //       <h1>{item.name}</h1>
    //       <p className="muted">{item.category} • {item.brand}</p>
    //       <div className="price-large">Rs.{item.price}</div>
    //       <p className="description">{item.description}</p>
    //       <div style={{marginTop:50}}>
    //         <WhatsAppButton message={`I'm interested in ${item.name} (code ${item.itemCode}). Price: Rs. ${item.price}`} />
    //       </div>
    //     </div>
    //   </div>
    // </main>
  )
}

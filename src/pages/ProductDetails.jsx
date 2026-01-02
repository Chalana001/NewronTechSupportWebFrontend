import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../services/api'
import ProductImage from '../components/ProductImage'
import ProductInfo from '../components/ProductInfo'
import '../styles/productdetails.css'

import ProductCard from '../components/ProductCard'



export default function ProductDetails() {
  const { itemCode } = useParams()
  const [item, setItem] = useState(null)

  const [items, setItems] = useState([])

  useEffect(() => {
    let mounted = true
    if (!itemCode) return
    fetch(`${API_URL}/${itemCode}`)
      .then((r) => r.json())
      .then((data) => mounted && setItem(data))
      .catch(() => { })
    return () => (mounted = false)
  }, [itemCode])

  // fetch all items (for related section)
  useEffect(() => {
    fetch(`${API_URL}/getallitems`)
      .then((r) => r.json())
      .then((data) => setItems(data))
      .catch(() => { })
  }, [])

  if (!item) return <main className="page container"><p className="muted">Loading...</p></main>

  const relatedItems = items.filter(
    (i) =>
      i.category === item.category &&
      i.itemCode !== item.itemCode
  )

  console.log('Related Items:', relatedItems)
  return (
    <main className="page container detail-page">
      <div className="detail-grid">
        <ProductImage imgUrl={item.imgUrl} name={item.name} />
        <ProductInfo item={item} />
      </div>

{/* RELATED ITEMS */}
{Array.isArray(relatedItems) && relatedItems.length > 0 && (
  <section className="related-section">

    <div className="related-divider">
      <span>More in {item.category}</span>
    </div>

    <div className="related-grid">
      {relatedItems.map(item => (
                  <ProductCard key={item.itemCode} item={item} />
                ))}
    </div>

  </section>
)}


    </main>
  )
}

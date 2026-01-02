import { useEffect, useState, useMemo } from 'react'
import { API_URL } from '../services/api'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'

export default function Shop() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    let mounted = true
    fetch(`${API_URL}/getallitems`)
      .then((r) => r.json())
      .then((data) => mounted && setItems(Array.isArray(data) ? data : []))
      .catch(() => {})
    return () => (mounted = false)
  }, [])

  const categories = useMemo(() => {
    const s = new Set();
    items.forEach(i => i.category && s.add(i.category))
    return Array.from(s)
  }, [items])

  const filtered = items.filter(i => {
    const matchesQuery = !query || i.name.toLowerCase().includes(query.toLowerCase()) || (i.description || '').toLowerCase().includes(query.toLowerCase())
    const matchesCat = !category || i.category === category
    return matchesQuery && matchesCat
  })

  return (
    <main className="page shop-page">
      <div className="container">
        <header className="shop-header">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryFilter categories={categories} value={category} onChange={setCategory} />
        </header>

        <section className="grid">
          {filtered.map(item => (
            <ProductCard key={item.itemCode} item={item} />
          ))}
        </section>
        {filtered.length === 0 && <p className="muted">No products found.</p>}
      </div>
    </main>
  )
}

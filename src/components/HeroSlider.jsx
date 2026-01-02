import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeroSlider({ items = [] }) {
  const [idx, setIdx] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % Math.max(1, items.length)), 6000)
    return () => clearInterval(t)
  }, [items.length])

  if (!items || items.length === 0) {
    return (
      <section className="hero">
        <div className="hero-inner">
          <h1>Welcome to Newron Tech Support</h1>
          <p>Quality PC parts and accessories.</p>
        </div>
      </section>
    )
  }

  const active = items[idx]

  return (
    <section className="hero">
      <div className="hero-slide" style={{ backgroundImage: `url(${active.imgUrl})` }}>
        <div className="hero-overlay">
          <div className="hero-copy">
            <h2>{active.name}</h2>
            <p className="muted">{active.category} • {active.brand}</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/shop')}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        {items.map((_, i) => (
          <button key={i} className={`dot ${i === idx ? 'active' : ''}`} onClick={() => setIdx(i)} />
        ))}
      </div>
    </section>
  )
}

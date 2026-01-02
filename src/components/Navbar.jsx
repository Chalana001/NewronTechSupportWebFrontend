import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <img src="/logo.png" alt="Newron Tech Support" className="logo" />
          <span className="brand-name">Newron Tech Support</span>
        </Link>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="menu">
          <span className="hamburger" />
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </div>
    </nav>
  )
}

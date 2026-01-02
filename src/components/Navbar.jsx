import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/navbar.css'

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleHamburgerClick = () => setMenuActive(!menuActive)
  const closeMenu = () => setMenuActive(false)

  const goToHash = (hash) => (e) => {
    if (e && e.preventDefault) e.preventDefault()
    closeMenu()
    if (location.pathname === '/') {
      // already on home — smooth scroll if element exists
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // update the URL hash without jumping
        history.replaceState(null, '', hash)
      } else {
        // fallback: set location.hash
        window.location.hash = hash
      }
    } else {
      // navigate to home with hash
      navigate(`/${hash}`)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Newron Tech Support" className="site-logo"/>
        </div>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={goToHash('#home')}>Home</a>
          </li>
          <li className="nav-item">
            <a href="/shop" className="nav-link" onClick={closeMenu}>Shop</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={goToHash('#services')}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={goToHash('#about')}>About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={goToHash('#contact')}>Contact</a>
          </li>
        </ul>
        <div className={`hamburger ${menuActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

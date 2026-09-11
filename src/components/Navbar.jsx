import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    setCartCount(cart.length)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">🛍️ ShopVerse</Link>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart <span className="cart-badge">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ id, name, price, image, rating }) {
  const addToCart = (e) => {
    e.preventDefault()
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const existing = cart.find(item => item.id === id)
    
    if (existing) {
      existing.quantity += 1
    } else {
      cart.push({ id, name, price, image, quantity: 1 })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`${name} added to cart!`)
  }

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image || 'https://via.placeholder.com/200'} alt={name} className="product-image" />
        <h3>{name}</h3>
        <p className="price">${price.toFixed(2)}</p>
        <div className="rating">⭐ {rating.toFixed(1)}/5</div>
      </Link>
      <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
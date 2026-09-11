import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const allProducts = [
  { id: 1, name: "Wireless Headphones", price: 79.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", rating: 4.5, description: "Premium wireless headphones with noise cancellation and 30-hour battery life." },
  { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", rating: 4.8, description: "Fitness tracker with heart rate monitor, GPS, and 7-day battery life." },
  { id: 3, name: "Laptop Backpack", price: 49.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", rating: 4.2, description: "Water-resistant backpack with laptop compartment and USB charging port." },
  { id: 4, name: "USB-C Hub", price: 29.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400", rating: 4.0, description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and more." },
  { id: 5, name: "Bluetooth Speaker", price: 89.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400", rating: 4.6, description: "Portable waterproof speaker with 360° sound and 20-hour battery." },
  { id: 6, name: "Phone Stand", price: 19.99, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400", rating: 4.3, description: "Adjustable phone stand with wireless charging capability." },
]

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const found = allProducts.find(p => p.id === parseInt(id))
    setProduct(found)
  }, [id])

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const existing = cart.find(item => item.id === product.id)
    
    if (existing) {
      existing.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    alert('Added to cart!')
  }

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '4rem' }}>Product not found</div>
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div>
        <h1>{product.name}</h1>
        <div className="rating">⭐ {product.rating.toFixed(1)}/5</div>
        <p className="price">${product.price.toFixed(2)}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart" onClick={addToCart} style={{ width: '200px' }}>
          Add to Cart
        </button>
        <br />
        <Link to="/shop" style={{ display: 'inline-block', marginTop: '1rem', color: '#007bff' }}>
          ← Back to Shop
        </Link>
      </div>
    </div>
  )
}

export default ProductDetail
import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const products = [
  { id: 1, name: "Wireless Headphones", price: 79.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200", rating: 4.5 },
  { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200", rating: 4.8 },
  { id: 3, name: "Laptop Backpack", price: 49.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200", rating: 4.2 },
  { id: 4, name: "USB-C Hub", price: 29.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200", rating: 4.0 },
]

function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Welcome to ShopVerse</h1>
        <p>Discover amazing products at great prices</p>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default Home
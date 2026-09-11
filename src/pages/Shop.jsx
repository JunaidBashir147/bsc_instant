import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const allProducts = [
  { id: 1, name: "Wireless Headphones", price: 79.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200", rating: 4.5 },
  { id: 2, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200", rating: 4.8 },
  { id: 3, name: "Laptop Backpack", price: 49.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200", rating: 4.2 },
  { id: 4, name: "USB-C Hub", price: 29.99, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200", rating: 4.0 },
  { id: 5, name: "Bluetooth Speaker", price: 89.99, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200", rating: 4.6 },
  { id: 6, name: "Phone Stand", price: 19.99, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200", rating: 4.3 },
]

function Shop() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>Shop All Products</h1>
      
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.8rem',
          margin: '1rem 0 2rem',
          border: '1px solid #ddd',
          borderRadius: '5px',
          fontSize: '1rem'
        }}
      />
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>No products found</p>
      )}
    </div>
  )
}

export default Shop
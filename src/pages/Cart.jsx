import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(savedCart)
  }, [])

  const updateCart = (newCart) => {
    setCartItems(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const removeFromCart = (id) => {
    const newCart = cartItems.filter(item => item.id !== id)
    updateCart(newCart)
  }

  const updateQuantity = (id, change) => {
    const newCart = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change
        if (newQuantity <= 0) return null
        return { ...item, quantity: newQuantity }
      }
      return item
    }).filter(item => item !== null)
    updateCart(newCart)
  }

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>🛒 Your cart is empty</h2>
        <p>Start shopping to add items to your cart!</p>
        <Link to="/shop" className="continue-shopping">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="cart-total">
        <h2>Total: ${getTotal().toFixed(2)}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart
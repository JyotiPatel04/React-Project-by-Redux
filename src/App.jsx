import React from 'react'
import Counter from './components/counter'
import ProductsList from './components/ProductList'
import Cart from './components/Cart'
export default function App() {
  return (
    <div className="appContainer">
      <div className="section">
        <Counter/>
      </div>
      <div className="section">
        <ProductsList/>
      </div>
      <div className="section">
        <Cart/>
      </div>
    </div>
  )
}






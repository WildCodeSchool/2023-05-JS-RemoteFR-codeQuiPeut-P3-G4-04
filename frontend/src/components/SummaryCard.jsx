import React from "react"

function CartSummary({ cart }) {
  return (
    <div className="cart-summary">
      <h2>Résumé du panier</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CartSummary

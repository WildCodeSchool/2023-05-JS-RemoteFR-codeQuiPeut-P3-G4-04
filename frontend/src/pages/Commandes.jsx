/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import "./Commandes.css"

function Commandes() {
  return (
    <div>
      <h1>Commandes</h1>
      <CartSummary cart={cart} />
    </div>
  )
}

export default Commandes

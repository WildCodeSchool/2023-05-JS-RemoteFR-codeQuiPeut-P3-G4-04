// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import axios from "axios"
import Produits from "../pages/Produits"
// import "./CardList.css"

export default function CardList() {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([])

  const AuClick = (product) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(product)
  }
  useEffect(() => {
    axios
      .get("http://localhost:4242/product")
      // eslint-disable-next-line no-restricted-syntax
      .then((res) => console.log("Response de l'API", res.data))
  }).catch(() => {
    // eslint-disable-next-line no-undef
    console.error("Error lors de la récupération des des Produits", error)
  })

  return (
    <section>
      {Produits.map((product) => (
        <Produits key={product.id} product={product} AuClick={AuClick} />
      ))}
    </section>
  )
}

import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Home.css"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/product")
      .then((res) => setProducts(res.data))
  }, [])

  return (
    <header className="App-header">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
    </header>
  )
}

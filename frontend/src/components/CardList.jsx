import { useState, useEffect } from "react"
import axios from "axios"

export default function CardList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/product")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error))
  }, [])

  return (
    <header className="App-header">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <p key={product.id}>{product.name}</p>
        </div>
      ))}
    </header>
  )
}

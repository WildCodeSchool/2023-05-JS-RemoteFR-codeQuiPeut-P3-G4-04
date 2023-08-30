import { useState, useEffect } from "react"
import axios from "axios"
import "./CardList.css"

export default function CardList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/product")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error))
  }, [])

  return (
    <div className="card-list-container">
      <div className="card-group">
        {products.map((product, index) => (
          <div className="card" key={product.id}>
            <img
              className="card-image"
              src={product.image}
              alt={product.name}
            />
            <p className="card-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

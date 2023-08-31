import { useState, useEffect } from "react"
import axios from "axios"
import "./CardList.css" // Assurez-vous d'importer votre fichier CSS

export default function CardList() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/product")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error))
  }, [])

  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId)
    setCart((prevCart) => [...prevCart, productToAdd])
  }

  const handleDelete = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    )
  }

  return (
    <div className="card-list-container">
      <div className="card-group">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              className="card-image"
              src={product.image}
              alt={product.name}
            />
            <p className="card-name">{product.name}</p>
            <div className="buttons">
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product.id)}
              >
                Ajouter panier
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(product.id)}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Résumé du panier</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// eslint-disable-next-line no-lone-blocks
{
  /*
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
*/
}

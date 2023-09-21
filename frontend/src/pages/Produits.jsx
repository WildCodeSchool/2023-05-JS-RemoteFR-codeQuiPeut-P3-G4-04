// Produits.jsx
import React from "react"

function Produits({ product, AuClick }) {
  // Assurez-vous que `product` est défini avant de déstructurer ses propriétés
  if (!product) {
    return (
      <div>
        <h1>Produit non trouvé</h1>
        <Produits
          product={{
            name: "Nom du produit 1",
            description: "Description du produit 1",
            price: 19.99,
            image: "URL_de_l_image_du_produit_1.jpg",
          }}
          AuClick={(product) => {
            // eslint-disable-next-line no-restricted-syntax
            console.log("Produit 1 ajouté au panier :", product)
          }}
        />

        <Produits
          product={{
            name: "Nom du produit 2",
            description: "Description du produit 2",
            price: 29.99,
            image: "URL_de_l_image_du_produit_2.jpg",
          }}
          AuClick={(product) => {
            // eslint-disable-next-line no-restricted-syntax
            console.log("Produit 2 ajouté au panier :", product)
          }}
        />
      </div>
    )
  }

  const { name, description, price, image } = product

  return (
    <div>
      <h1>Produits</h1>
      <div className="card-image">
        <img src={image} alt={name} />
        <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>Price - {price}$</p>
          <button onClick={() => AuClick(product)}>Ajouter au Panier</button>
        </div>
      </div>
    </div>
  )
}

export default Produits

// eslint-disable-next-line no-lone-blocks
{
  /* // Produits.jsx
import React from "react"

function Produits({ product, AuClick }) {
  // Assurez-vous que `product` est défini avant de déstructurer ses propriétés
  if (!product) {
    return null // Ou renvoyez un message d'erreur, par exemple : "Produit non trouvé"
  }

  const { name, description, price, image } = product

  return (
    <div>
      <h1>Produits</h1>
      <div className="card-image">
        <img src={image} alt={name} />
        <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>Price - {price}$</p>
          <button onClick={() => AuClick(product)}>Ajouter au Panier</button>
        </div>
      </div>
    </div>
  )
}

export default Produits
*/
}
// eslint-disable-next-line no-lone-blocks
{
  /* import React from "react"
import CardList from "../components/CardList"
import "./Produits.css"
import CartSummary from "../components/SummaryCard"
function Produits({ product, AuClick }) {
  const { name, description, price, image } = product
  return (
    <div>
      <h1>Produits</h1>
      <div className="card-image">
        <img src={image} alt="" />
        <div>
          <p>{name}</p>
          <p>{description}</p>
          <p>Price - {price}$</p>
          <button onClick={() => AuClick(product)}>Ajouter au Panier</button>
        </div>
      </div>
      <>
        <CardList />
        <CartSummary />
      </>
    </div>
  )
}

export default Produits
*/
}

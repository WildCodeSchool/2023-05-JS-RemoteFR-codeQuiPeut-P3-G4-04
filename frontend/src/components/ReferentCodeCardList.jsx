/* eslint-disable react/jsx-no-comment-textnodes */
// Nous disons à l'ordinateur d'apporter des outils spéciaux de magasinage et de faire des choses spéciales quand le programme fonctionne. Ces outils sont appelés "useState" et "useEffect".
// eslint-disable-next-line no-lone-blocks
{
  /* 
import { useState, useEffect } from "react"

// Nous demandons également à l'ordinateur d'apporter un camion spécial appelé "axios" qui peut aller chercher des informations sur Internet pour nous.
import axios from "axios"

// Nous disons à l'ordinateur d'aller chercher un fichier de décoration qui dit comment tout doit être joli.
import "./CardList.css" // Assurez-vous d'importer votre fichier CSS

// Nous disons à l'ordinateur que nous allons créer quelque chose de spécial appelé "CardList" que d'autres pourront utiliser.
export default function CardList() {
  // Nous disons à l'ordinateur de préparer un endroit spécial pour mettre une liste de choses que nous allons acheter, et nous appelons cet endroit "products". Le "[]" signifie que nous commençons sans rien dans la liste.
  const [products, setProducts] = useState([])
  // Nous disons à l'ordinateur de préparer un autre endroit spécial pour mettre les choses que nous avons déjà achetées, et nous l'appelons "cart". Encore une fois, nous commençons sans rien dans le panier.
  const [cart, setCart] = useState([])

  // Nous disons à l'ordinateur qu'à chaque fois que notre programme commence, il doit faire quelque chose. Dans ce cas, il doit aller chercher une liste spéciale de choses sur Internet et les mettre dans notre liste "products".
  useEffect(() => {
    // Nous disons à l'ordinateur d'aller sur Internet à l'adresse spéciale "http://localhost:4242/product" pour trouver une liste de choses.
    axios
      .get("http://localhost:4242/product")

      // Une fois que l'ordinateur revient d'Internet avec la liste de choses, il doit les mettre dans notre liste "products" pour que nous puissions les voir.
      .then((res) => setProducts(res.data))

      // Si quelque chose ne va pas quand l'ordinateur va sur Internet, nous disons à l'ordinateur de nous le dire en affichant un message d'erreur.
      .catch((error) => console.error("Error fetching products:", error))
  }, [])

  // Nous disons à l'ordinateur que quand nous cliquons sur le bouton "Ajouter au panier" d'une chose, il doit mettre cette chose spéciale dans notre panier.
  const handleAddToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId)
    setCart((prevCart) => [...prevCart, productToAdd])
  }

  // const handleBuy = (productId) => { ... } : Nous disons à l'ordinateur que quand nous cliquons sur le bouton "Acheter cet article" d'une chose, il doit la retirer de notre panier comme si nous l'achetions.
  const handleBuy = (productId) => {
    // eslint-disable-next-line no-unused-vars
    const productToRemove = cart.find((product) => product.id === productId)
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    )

    // Ajoutez ici la logique pour effectuer l'achat, par exemple, envoyer une requête au serveur
    // pour confirmer l'achat du produit.
  }

  return (
    <div className="card-list-container">
      <div className="card-group">
        // Nous disons à l'ordinateur d'afficher toutes les choses que nous
        pouvons acheter. Pour chaque chose, nous faisons quelque chose (c'est le
        "map").
        {products.map((product) => (
          // Nous demandons à l'ordinateur de créer une carte spéciale pour chaque chose que nous pouvons acheter.
          <div className="card" key={product.id}>
            // Nous disons à l'ordinateur de montrer une image de la chose, avec
            le nom de la chose à côté.
            <img
              className="card-image"
              src={product.image}
              alt={product.name}
            />
            <p className="card-name">{product.name}</p>
            <div className="buttons">
              // Nous disons à l'ordinateur de faire un bouton spécial que nous
              pouvons cliquer pour mettre la chose dans notre panier quand nous
              le voulons.
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product.id)}
              >
                Ajouter au panier
              </button>
              //Nous disons à l'ordinateur de faire un autre bouton spécial que
              nous pouvons cliquer pour acheter la chose et la retirer de notre
              panier.
              <button
                className="buy-button" // Bouton "Acheter cet article"
                onClick={() => handleBuy(product.id)} // Utilise la fonction handleBuy
              >
                Acheter cet article
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Résumé du panier</h2>
        <ul>
          // Nous disons à l'ordinateur de montrer toutes les choses que nous
          avons dans notre panier.
          {cart.map((product) => (
            // Nous demandons à l'ordinateur de montrer chaque chose dans notre panier sous forme de liste.
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
} // Nous disons à l'ordinateur que nous avons fini de dire tout ce que nous voulions qu'il fasse.
*/
}
// eslint-disable-next-line no-lone-blocks
{
  /*  

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

  const handleBuy = (productId) => {
    // eslint-disable-next-line no-unused-vars
    const productToRemove = cart.find((product) => product.id === productId)
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    )

    // Ajoutez ici la logique pour effectuer l'achat, par exemple, envoyer une requête au serveur
    // pour confirmer l'achat du produit.
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
                Ajouter au panier
              </button>
              <button
                className="buy-button" // Bouton "Acheter cet article"
                onClick={() => handleBuy(product.id)} // Utilise la fonction handleBuy
              >
                Acheter cet article
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

*/
}

// eslint-disable-next-line no-lone-blocks
{
  /*

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

  const handleBuy = (productId) => {
    // eslint-disable-next-line no-unused-vars
    const productToRemove = cart.find((product) => product.id === productId)
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    )

    // Ajoutez ici la logique pour effectuer l'achat, par exemple, envoyer une requête au serveur
    // pour confirmer l'achat du produit.
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
                Ajouter au panier
              </button>
              <button
                className="buy-button" // Bouton "Acheter cet article"
                onClick={() => handleBuy(product.id)} // Utilise la fonction handleBuy
              >
                Acheter cet article
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
*/
}

// eslint-disable-next-line no-lone-blocks
{
  /* 

export default function CardList() {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);

  const AuClick = (product) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(product);
    //faire un axios qui va envoier les data dans la table panier
  };
  useEffect(() => {
    //axxios qui va recup les products et ensuite tu remplie la state products
  }, []);
  return (
    <section>
      {products.map((product) => (
        <Produits key={product.id} product={product} AuClick={AuClick} />
      ))}
    </section>
  );
}


import React from "react";
import CardList from "../components/CardList";
import "./Produits.css";
function Produits({ product, AuClick }) {
  const { id, name, description, price, image } = product;
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
      </>
    </div>
  );
}
*/
}

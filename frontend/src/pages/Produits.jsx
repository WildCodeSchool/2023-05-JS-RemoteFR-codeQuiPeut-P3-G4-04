import React from "react"
import CardList from "../components/CardList"
import "./Produits.css"
import Form from "../components/Form"

function Produits() {
  return (
    <div>
      <h1>Produits</h1>
      <>
        <CardList />
        <Form />
      </>
    </div>
  )
}

export default Produits

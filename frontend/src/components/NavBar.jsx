import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navGlobal">
      <ul className="liste">
        <li className="items">
          <Link className="nav-Link" to="/">
            Home
          </Link>
        </li>
        <li className="items">
          <Link className="nav-Link" to="/produits">
            Produits
          </Link>
        </li>
        <li className="items">
          <Link className="nav-Link" to="/commandes">
            Commandes
          </Link>
        </li>
        <li className="items">
          <Link className="nav-Link" to="/panier">
            Panier
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

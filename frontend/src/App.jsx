import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import Produits from "./pages/Produits"
import Commandes from "./pages/Commandes"
import Panier from "./pages/Panier"

import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/commandes" element={<Commandes />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </div>
  )
}

export default App

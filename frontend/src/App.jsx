/* eslint-disable react/jsx-no-undef */
import React from "react"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import { Route, Routes } from "react-router-dom"
import Produits from "./pages/Produits"
import Commandes from "./pages/Commandes"
import Panier from "./pages/Panier"
// import Card from "./Card" // Assurez-vous de spécifier le chemin correct vers le composant Card
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* <Card title="Titre de la carte" imageUrl="URL_de_l_image.jpg" /> */}
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

// eslint-disable-next-line no-lone-blocks
{
  /*
import React from 'react';
import Card from './Card'; // Assurez-vous de spécifier le chemin correct vers le composant Card
import './App.css'; // Importez votre fichier CSS ici

const App = () => {
  return (
    <div>
      <Card title="Titre de la carte" imageUrl="URL_de_l_image.jpg" />
    </div>
  );
};

export default App;
*/
}

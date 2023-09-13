import React from "react"
import ImageCarousel from "../components/ImageCarousel"
import AccueilCard from "../components/AccueilCard"

import gameboy2 from "../assets/images/gameboy2.jpg"
import gameboy3 from "../assets/images/gameboy3.jpg"
import gameboy4 from "../assets/images/gameboy4.jpg"
import gameboy6 from "../assets/images/gameboy6.jpg"
import gameboy7 from "../assets/images/gameboy7.jpg"
import gameboy5 from "../assets/images/gameboy5.jpg"
import console1 from "../assets/images/console.jpg"
import psp1 from "../assets/images/psp1.jpg"
// import "./Home.css"

const Home = () => {
  const carouselImages = [
    gameboy2,
    gameboy3,
    gameboy4,
    gameboy6,
    psp1, // Utilisez psp1 ici, pas psp1.jpg
  ]

  return (
    <div>
      <h1>Welcome to our Website</h1>
      <ImageCarousel images={carouselImages} />
      <p>More content...</p>
      <div className="card-list-container">
        {/* Ajoutez la classe "card-list-container" */}
        <AccueilCard title="Game Boy Advance" imageUrl={gameboy4} />
        <AccueilCard title="Psp" imageUrl={psp1} />
        <AccueilCard title="Titre de la carte 1" imageUrl={gameboy2} />
        <AccueilCard title="Titre de la carte 4" imageUrl={gameboy4} />
        <AccueilCard title="Titre de la carte 6" imageUrl={gameboy6} />
        <AccueilCard title="Titre de la carte 3" imageUrl={gameboy3} />
        <AccueilCard title="Titre de la carte 7" imageUrl={gameboy7} />
        <AccueilCard title="Titre de la carte 5" imageUrl={gameboy5} />
        <AccueilCard title="Console1" imageUrl={console1} />

        {/* Ajoutez autant de cartes AccueilCard que nécessaire */}
      </div>
    </div>
  )
}

export default Home

// eslint-disable-next-line no-lone-blocks
{
  /* import React from "react"
import ImageCarousel from "../components/ImageCarousel"
import gameboy2 from "../assets/images/gameboy2.jpg"
import gameboy3 from "../assets/images/gameboy3.jpg"
import gameboy4 from "../assets/images/gameboy4.jpg"
import gameboy6 from "../assets/images/gameboy6.jpg"
import psp1 from "../assets/images/psp1.jpg"
import AccueilCard from "../components/AccueilCard"

const Home = () => {
  const carouselImages = [
    gameboy2, // Ajoutez un / au début du chemin
    gameboy3,
    gameboy4,
    gameboy6,
    psp1.jpg,
    // Ajoutez plus d'URL d'images ici
  ]

  return (
    <div>
      <h1>Welcome to our Website</h1>
      Insérez le composant ImageCarousel ici
      <ImageCarousel images={carouselImages} />
      <p>More content...</p>
      <AccueilCard
        title="Titre de la carte"
        imageUrl="../assets/images/gameboy2.jpg"
      />
      <AccueilCard
        title="Titre de la carte"
        imageUrl="https://example.com/chemin/vers/votre/image.jpg"
      />
    </div>
  )
}

export default Home
*/
}
// eslint-disable-next-line no-lone-blocks
{
  /*
  import React from "react"
import ImageCarousel from "../components/ImageCarousel"
import gameboy2 from "../assets/images/gameboy2.jpg"
import gameboy3 from "../assets/images/gameboy3.jpg"
import gameboy4 from "../assets/images/gameboy4.jpg"
import gameboy6 from "../assets/images/gameboy6.jpg"
import psp1 from "../assets/images/psp1.jpg"
import AccueilCard from "../components/AccueilCard"

const Home = () => {
  const carouselImages = [
    gameboy2, // Ajoutez un / au début du chemin
    gameboy3,
    gameboy4,
    gameboy6,
    psp1.jpg,
    // Ajoutez plus d'URL d'images ici
  ]

  return (
    <div>
      <h1>Welcome to our Website</h1>
      Insérez le composant ImageCarousel ici 
      <ImageCarousel images={carouselImages} />
      <p>More content...</p>
      <AccueilCard
        title="Titre de la carte"
        imageUrl="../assets/images/gameboy2.jpg"
      />

      <AccueilCard
        title="Titre de la carte"
        imageUrl="https://example.com/chemin/vers/votre/image.jpg"
      />
    </div>
  )
}

export default Home
*/
}

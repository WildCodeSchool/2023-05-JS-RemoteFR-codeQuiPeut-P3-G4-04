import React, { useState, useEffect } from "react"
import axios from "axios"
import "./AccueilCard.css"

const AccueilCard = ({ title, imageUrl }) => {
  const [externalImageUrl, setExternalImageUrl] = useState(null)

  useEffect(() => {
    // Fonction pour charger l'image à partir de l'URL externe
    const loadImageFromExternalUrl = async () => {
      try {
        const response = await axios.get(imageUrl, {
          responseType: "arraybuffer", // Indiquez le type de réponse attendu
        })

        // Convertissez les données binaires en base64 pour l'affichage de l'image
        const base64Image = Buffer.from(response.data, "binary").toString(
          "base64"
        )
        const dataUri = `data:image/jpeg;base64,${base64Image}`

        setExternalImageUrl(dataUri)
      } catch (error) {
        console.error("Erreur lors du chargement de l'image externe :", error)
      }
    }

    // Chargez l'image lorsque le composant est monté
    loadImageFromExternalUrl()
  }, [imageUrl])

  return (
    <div className="card">
      {/* Utilisez l'URL externe si elle est chargée, sinon utilisez l'URL locale */}
      <img
        src={externalImageUrl || imageUrl}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  )
}

export default AccueilCard

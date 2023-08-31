import React, { useState } from "react"
import axios from "axios"
import "./Form.css"

export default function UserForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post("/api/users", {
        firstName,
        lastName,
        address,
        password,
      })

      // eslint-disable-next-line no-restricted-syntax
      console.log("Réponse du serveur :", response.data)
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error)
    }
  }

  return (
    <div className="form-container">
      <h2>Formulaire d'inscription</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Prénom:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label>
          Nom de famille:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label>
          Adresse:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          S'inscrire
        </button>
      </form>
    </div>
  )
}

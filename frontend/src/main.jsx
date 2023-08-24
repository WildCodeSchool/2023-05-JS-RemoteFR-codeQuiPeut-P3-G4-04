import React from "react"
import ReactDOM from "react-dom/client"
// eslint-disable-next-line no-unused-vars
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

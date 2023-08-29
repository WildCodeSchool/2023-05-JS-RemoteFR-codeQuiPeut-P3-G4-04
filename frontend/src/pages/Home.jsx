import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Home.css"

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4242/user").then((res) => setUsers(res.data))
  }, [])

  return (
    <header className="App-header">
      {users.map((user) => (
        <div key={user.id}>
          <div>
            {user.last_name} {user.first_name}
          </div>
          <p>{user.name}</p>
        </div>
      ))}
    </header>
  )
}

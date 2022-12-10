import './App.css'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import { CheckSession } from './services/AuthServices'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <NavBar
          authenticated={authenticated}
          user={user}
          handleLogOut={handleLogOut}
        />
      </header>
    </div>
  )
}

export default App

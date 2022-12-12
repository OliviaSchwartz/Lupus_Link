import './App.css'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { CheckSession } from './services/AuthServices'
import Login from './pages/Login'
import Register from './pages/Register'
import Trackers from './pages/Trackers'
import TrackerDetails from './pages/TrackerDetails'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [tracker, setTracker] = useState([])
  const [trackerExists, setTrackerExists] = useState(false)

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
          id={user.id}
          handleLogOut={handleLogOut}
        />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/tracker/:userId"
            element={
              <Trackers
                user={user}
                authenticated={authenticated}
                tracker={tracker}
                setTracker={setTracker}
                trackerExists={trackerExists}
                setTrackerExists={setTrackerExists}
              />
            }
          />
          <Route
            path="/tracker/:userId/:trackerId"
            element={
              <TrackerDetails
                user={user}
                authenticated={authenticated}
                tracker={tracker}
                setTracker={setTracker}
                trackerExists={trackerExists}
                setTrackerExists={setTrackerExists}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App

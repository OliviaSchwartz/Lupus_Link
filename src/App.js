import './App.css'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { CheckSession } from './services/AuthServices'
import Login from './pages/Login'
import Register from './pages/Register'
import Trackers from './pages/Trackers'
import SymptomTrackerCard from './components/SymptomTrackerCard'
import CommunityBoard from './pages/CommunityBoard'
import TopicDetails from './pages/TopicDetails'
import Education from './pages/Education'
import ClinicalStudies from './pages/ClinicalStudies'
import About from './pages/About'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [tracker, setTracker] = useState([])
  const [trackerExists, setTrackerExists] = useState(false)
  const [topic, setTopic] = useState([])
  const [topicExists, setTopicExists] = useState(false)
  const [comment, setComment] = useState([])
  const [commentExists, setCommentExists] = useState(false)

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
            path="/tracker"
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
            path="/tracker/:trackerId"
            element={
              <SymptomTrackerCard
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
            path="/topics"
            element={
              <CommunityBoard
                user={user}
                authenticated={authenticated}
                topic={topic}
                setTopic={setTopic}
                topicExists={topicExists}
                setTopicExists={setTopicExists}
              />
            }
          />
          <Route
            path="topics/:id"
            element={
              <TopicDetails
                user={user}
                authenticated={authenticated}
                topic={topic}
                setTopic={setTopic}
                topicExists={topicExists}
                setTopicExists={setTopicExists}
                setComment={setComment}
                comment={comment}
                setCommentExists={setCommentExists}
                commentExists={commentExists}
              />
            }
          />
          <Route path="/education" element={<Education />} />
          <Route path="/clinicaltrials" element={<ClinicalStudies />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

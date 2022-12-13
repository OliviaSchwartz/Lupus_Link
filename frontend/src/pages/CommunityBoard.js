import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GetTopics,
  CreateTopic,
  GetOneTopic
} from '../services/CommunityBoardServices'
import TopicCard from '../components/TopicCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Topics = ({
  user,
  authenticated,
  setTracker,
  tracker,
  setTrackerExists,
  userId
}) => {
  const initialState = {
    date: '',
    topic: ''
  }

  let navigate = useNavigate()
  let { id } = useParams()

  const [formState, setFormState] = useState(initialState)
  const [toggle, setToggle] = useState(false)
  const [latestTopic, setLatestTopic] = useState({})

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e, id) => {
    e.preventDefault()
    console.log(id)
    const response = await axios.post(
      `http://localhost:3001/tracker/${id}`,
      formState
    )
    setLatestTracker(response)
    setFormState(initialState)
    setTrackerExists(true)
  }

  useEffect(() => {
    const handleTracker = async (userId) => {
      const data = await GetTrackersById(userId)
      setTracker(data)
    }
    if (user) handleTracker(user.id)
  }, [latestTracker, toggle])

  // const viewTrackers = (id) => {
  //   console.log(id)
  //   navigate(`${id}`)
  // }

  return user && authenticated ? (
    <div>
      <div className="tracker-form">
        <form className="form" onSubmit={handleSubmit}>
          <label className="label dateField" htmlFor="date">
            Date{' '}
          </label>
          <input
            className="input"
            type="text"
            id="date"
            placeholder="MM/DD/YY (Required)"
            cols="30"
            onChange={handleChange}
            value={formState.date}
            required
          />
          <label className="label dateField" htmlFor="overallFeeling">
            How are you feeling overall?{' '}
          </label>
          <input
            className="input"
            type="text"
            id="overallFeeling"
            placeholder="1-5(Required)"
            cols="30"
            onChange={handleChange}
            value={formState.overallFeeling}
            required
          />
          <label className="label dateField" htmlFor="hoursOfSleep">
            How Many Hours of sleep did you get last night?{' '}
          </label>
          <input
            className="input"
            type="text"
            id="hoursOfSleep"
            placeholder="1-10 (Required)"
            cols="30"
            onChange={handleChange}
            value={formState.hoursOfSleep}
            required
          />
          <label className="label dateField" htmlFor="painLevel">
            How is your pain level today?{' '}
          </label>
          <input
            className="input"
            type="text"
            id="painLevel"
            placeholder="1-4 (Required)"
            cols="30"
            onChange={handleChange}
            value={formState.painLevel}
            required
          />
          <label className="label dateField" htmlFor="flare">
            Are you having a flare?{' '}
          </label>
          <input
            className="input"
            type="text"
            id="flare"
            placeholder="True or false?"
            cols="30"
            onChange={handleChange}
            value={formState.flare}
            required
          />
          <label className="label dateField" htmlFor="notes">
            Use this space to write down any notes you may have{' '}
          </label>
          <input
            className="input"
            type="text"
            id="notes"
            placeholder="Notes here"
            cols="30"
            onChange={handleChange}
            value={formState.notes}
            required
          />
          <button className="create-tracker-button" type="submit">
            Create Tracker
          </button>
        </form>
      </div>
      <div className="grid col-4">
        <div className="grid col-4">
          {tracker?.map((tracker) => (
            <SymptomTrackerCard
              key={tracker.id}
              date={tracker.date}
              overallFeeling={tracker.overallFeeling}
              hoursOfSleep={tracker.hoursOfSleep}
              painLevel={tracker.painLevel}
              flare={tracker.flare}
              notes={tracker.notes}
              trackerId={tracker.id}
              setToggle={setToggle}
              toggle={toggle}
              setLatestTracker={setLatestTracker}
              latestTracker={latestTracker}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button
        className="delete-schedule-button"
        onClick={() => navigate('/login')}
      >
        Sign In
      </button>
    </div>
  )
}

export default Trackers

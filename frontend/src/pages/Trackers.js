import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GetOneTracker,
  GetTrackersById,
  CreateTrackers
} from '../services/TrackerServices'
import SymptomTrackerCard from '../components/SymptomTrackerCard'

const Trackers = ({
  user,
  authenticated,
  setTracker,
  tracker,
  setTrackerExists
}) => {
  const initialState = {
    date: '',
    overallFeeling: '',
    hoursOfSleep: '',
    painLevel: '',
    flare: '',
    notes: ''
  }
  let navigate = useNavigate()
  const [formState, setFormState] = useState(initialState)
  const [toggle, setToggle] = useState(false)
  const [latestTracker, setLatestTracker] = useState({})

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await CreateTrackers({ ...formState, userId: user.id })
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
          <button className="create-tracker-button" type="submit">
            Create Tracker
          </button>
        </form>
      </div>
      <div className="grid col-4">
        <div className="grid col-4">
          {tracker.map((tracker) => (
            <SymptomTrackerCard
              key={tracker.id}
              date={tracker.date}
              exhibit_list={schedule.exhibit_list}
              schedule_Id={schedule.id}
              setToggle={setToggle}
              toggle={toggle}
              setLatestSchedule={setLatestSchedule}
              latestSchedule={latestSchedule}
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
        onClick={() => navigate('/signin')}
      >
        Sign In
      </button>
    </div>
  )
}

export default Trackers

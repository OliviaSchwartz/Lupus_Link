import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetTrackersById } from '../services/TrackerServices'
import SymptomTrackerCard from '../components/SymptomTrackerCard'
import axios from 'axios'
import { BASE_URL } from '../services/api'

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
    let userId = user.id
    const response = await axios.post(
      `${BASE_URL}/tracker/${userId}`,
      formState,
      userId
    )
    setLatestTracker(response)
    setFormState(initialState)
    setTrackerExists(true)
  }

  useEffect(() => {
    const handleTracker = async (id) => {
      const data = await GetTrackersById(id)
      setTracker(data)
    }
    if (user) handleTracker(user.id)
  }, [latestTracker, toggle])

  return user && authenticated ? (
    <div>
      <h1 className="page-name">Symptom Tracking Log</h1>
      <div className="tracker-form">
        <form className="form" onSubmit={handleSubmit}>
          <label className="label dateField" htmlFor="date">
            Today's Date{' '}
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
          <select
            onChange={handleChange}
            value={formState.overallFeeling}
            id="overallFeeling"
          >
            <option value="" disabled>
              {' '}
              - Select How You're Feeling -{' '}
            </option>
            <option value="1">1 (Poorly)</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 (Great!)</option>
          </select>
          <label className="label dateField" htmlFor="hoursOfSleep">
            How many hours of sleep did you get last night?{' '}
          </label>
          <select
            onChange={handleChange}
            value={formState.hoursOfSleep}
            id="hoursOfSleep"
          >
            <option value="" disabled>
              {' '}
              - Select Hours Of Sleep -{' '}
            </option>
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
            <option value="3">3 hours</option>
            <option value="4">4 hours</option>
            <option value="5">5 hours</option>
            <option value="6">6 hours</option>
            <option value="7">7 hours</option>
            <option value="8">8 hours</option>
            <option value="9">9 hours</option>
            <option value="10">10+ hours</option>
          </select>
          <label className="label dateField" htmlFor="painLevel">
            How is your pain today?{' '}
          </label>
          <select
            onChange={handleChange}
            value={formState.painLevel}
            id="painLevel"
          >
            <option value="" disabled>
              {' '}
              - Select Pain Level -{' '}
            </option>
            <option value="1">1 (No pain)</option>
            <option value="2">2 </option>
            <option value="3">3 </option>
            <option value="4">4 </option>
            <option value="5">5 (Severe pain)</option>
          </select>
          <label className="label datefield" htmlFor="flare">
            Are you having any flare symptoms?{' '}
          </label>
          <select onChange={handleChange} value={formState.flare} id="flare">
            <option value="" disabled>
              {' '}
              - Select Yes or No -{' '}
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No </option>
          </select>
          <label className="label dateField" htmlFor="notes">
            Use this space to write down any notes you may have. If you're
            feeling any flare symptoms make sure to document them here.{' '}
          </label>
          <textarea
            className="input"
            type="text"
            id="notes"
            placeholder="Notes here"
            cols="50"
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
        <div className="tracker-container">
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
              userId={tracker.userId}
              setToggle={setToggle}
              toggle={toggle}
              setLatestTracker={setLatestTracker}
              latestTracker={latestTracker}
              setTrackerExists={setTrackerExists}
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

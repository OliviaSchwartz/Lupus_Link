import { useEffect, useState } from 'react'

const Trackers = ({
  user,
  authenticated,
  setTracker,
  tracker,
  setTrackerExists
}) => {
  const initialState = {
    date: ''
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
    const response = await CreateSchedules({ ...formState, userId: user.id })
    setLatestTracker(response)
    setFormState(initialState)
    setTrackerExists(true)
  }

  useEffect(() => {
    const handleTracker = async (id) => {
      const data = await GetSchedulesById(id)
      setTracker(data)
    }
    if (user) handleTracker(user.id)
  }, [latestTracker, toggle])

  return user && authenticated ? (
    <div>
      <div className="schedule-form">
        <h2>
          Use this scheduling tool to plan your visit to Of Birds and Beasts
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label dateField" htmlFor="date">
            Date of visit:{' '}
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
          <button className="create-schedule-button" type="submit">
            Create Schedule
          </button>
        </form>
        <div className="exhibit-list">
          <h2>These are our Exhibits:</h2>
          <h2> Aquarium, Aviary, Forest, Desert, Reptiles and Frozen Tundra</h2>
        </div>
      </div>
      <div className="grid col-4">
        <div className="grid col-4">
          {schedule.map((schedule) => (
            <ScheduleCard
              key={schedule.id}
              date={schedule.date}
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

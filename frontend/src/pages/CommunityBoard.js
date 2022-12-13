import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GetTopics,
  CreateTopic,
  GetOneTopic
} from '../services/CommunityBoardServices'
import TopicCard from '../components/TopicCard'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const CommunityBoard = ({
  user,
  authenticated,
  setTopic,
  topic,
  setTopicExists
}) => {
  const initialState = {
    date: '',
    topic: ''
  }

  let navigate = useNavigate()

  const [formState, setFormState] = useState(initialState)
  const [toggle, setToggle] = useState(false)
  const [latestTopic, setLatestTopic] = useState({})

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let userId = user.id
    console.log(userId)
    const response = await axios.post(
      `${BASE_URL}/tracker/${userId}`,
      formState,
      userId
    )
    setLatestTopic(response)
    setFormState(initialState)
    setTopicExists(true)
  }

  useEffect(() => {
    const handleTopic = async () => {
      const data = await GetTopics()
      setTopic(data)
    }
    handleTopic()
  }, [])

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
          <label className="label dateField" htmlFor="topic">
            Topic:{' '}
          </label>
          <input
            className="input"
            type="text-area"
            id="topic"
            placeholder="1-5(Required)"
            cols="30"
            onChange={handleChange}
            value={formState.topic}
            required
          />
          <button className="create-tracker-button" type="submit">
            Post Topic to Community Board
          </button>
        </form>
      </div>
      <div className="grid col-4">
        <div className="grid col-4">
          {topic?.map((topic) => (
            <TopicCard
              key={topic.id}
              date={topic.date}
              topic={topic.topic}
              topicId={topic.id}
              user={topic.userId}
              setToggle={setToggle}
              toggle={toggle}
              setLatestTopic={setLatestTopic}
              latestTopic={latestTopic}
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
export default CommunityBoard

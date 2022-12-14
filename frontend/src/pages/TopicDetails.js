import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { DeleteTopic } from '../services/CommunityBoardServices'

const TopicDetails = ({ user, authenticated }) => {
  let { id } = useParams()
  const [topic, setTopic] = useState({})
  let navigate = useNavigate()

  useEffect(() => {
    const topicId = async () => {
      let response = await axios.get(`${BASE_URL}/topics/${id}`)
      console.log(response.data)
      setTopic(response.data)
    }
    topicId()
  }, [])

  const deleteTopic = async (e) => {
    e.preventDefault()
    await DeleteTopic(id)
    console.log(id)
    navigate(`/topics`)
  }

  return user && authenticated ? (
    <div>
      <h1>
        This is the details {topic.date} {topic.topic}
      </h1>
      <section>
        <button onClick={deleteTopic}>Delete Topic</button>
      </section>
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

export default TopicDetails

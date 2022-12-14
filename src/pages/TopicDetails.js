import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { DeleteTopic } from '../services/CommunityBoardServices'
import CommentCard from '../components/CommentCard'
import { GetComments } from '../services/CommentServices'

const TopicDetails = ({
  user,
  authenticated,
  comment,
  setCommentExists,
  setComment,
  commentExists
}) => {
  let { id } = useParams()
  const [topic, setTopic] = useState({})
  let navigate = useNavigate()
  const initialState = {
    name: '',
    date: '',
    comment: ''
  }

  const [formState, setFormState] = useState(initialState)
  const [toggle, setToggle] = useState(false)
  const [latestComment, setLatestComment] = useState({})

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  useEffect(() => {
    const handleComment = async () => {
      const response = await GetComments(id)
      setComment(response)
    }
    handleComment()
  }, [latestComment, toggle])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let topicId = topic.id
    const response = await axios.post(
      `${BASE_URL}/comments/${id}/${id}`,
      formState,
      topicId
    )
    setLatestComment(response)
    setFormState(initialState)
    setCommentExists(true)
  }

  useEffect(() => {
    const getTopic = async () => {
      let response = await axios.get(`${BASE_URL}/topics/${id}`)
      setTopic(response.data)
    }
    getTopic()
  }, [])

  const deleteTopic = async (e) => {
    e.preventDefault()
    await DeleteTopic(id)
    navigate(`/topics`)
  }

  return user && authenticated ? (
    <div>
      <div className="topic-detail-display">
        <h2 className="topic-date">Date Posted: {topic.date}</h2>
        <h3 className="topic-display">{topic.topic}</h3>
        <section>
          <button className="delete-button" onClick={deleteTopic}>
            Delete Topic
          </button>
        </section>
      </div>
      <div className="grid col-4">
        <h3 className="topic-display">Comments:</h3>
        <div className="grid col-4">
          {comment?.map((comment) => (
            <CommentCard
              key={comment.id}
              date={comment.date}
              comment={comment.comment}
              commentId={comment.id}
              userId={comment.userId}
              name={comment.name}
              setToggle={setToggle}
              toggle={toggle}
              setLatestComment={setLatestComment}
              latestComment={latestComment}
            />
          ))}
        </div>
      </div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <label className="form-label dateField" htmlFor="name">
          Your name:{' '}
        </label>
        <input
          className="input"
          type="text"
          id="name"
          placeholder="Name (required)"
          cols="30"
          onChange={handleChange}
          value={formState.name}
          required
        />
        <label className="form-label dateField" htmlFor="date">
          Date{' '}
        </label>
        <input
          className="input"
          type="text"
          id="date"
          placeholder="MM/DD/YY (required)"
          cols="30"
          onChange={handleChange}
          value={formState.date}
          required
        />
        <label className="form-label dateField" htmlFor="comment">
          Comment:{' '}
        </label>
        <textarea
          className="input"
          type="text"
          id="comment"
          placeholder="comment"
          cols="50"
          onChange={handleChange}
          value={formState.comment}
          required
        />
        <button className="create-tracker-button" type="submit">
          Add Comment
        </button>
      </form>
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

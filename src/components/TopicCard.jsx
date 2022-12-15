import { useNavigate } from "react-router-dom"

const TopicCard = (props) => {
let navigate=useNavigate()

const viewTopic = () => {
navigate(`/topics/${props.topicId}`)
  }
    return (
        <div className="topic-card">
        <div className="topic-date">
        <div>Posted Date: {props.date}</div>
         </div>
        <div>{props.topic} </div>
        <section className="topic-details">
        <div className="user-details">
        <div>Posted by: {props.name}</div>
        <div className="userid"><em>User Id: {props.userId}</em></div>
        </div>
        <div className="button-container">
        <button className="create-tracker-button"  onClick={(viewTopic)}>View Comments</button>
        </div>
        </section>
        </div>
    )
}

export default TopicCard

import { useNavigate } from "react-router-dom"

const TopicCard = (props) => {
let navigate=useNavigate()

const viewTopic = () => {
console.log(props.topicId)
navigate(`${props.topicId}`)
  }
    return (
        <div>
        <div>Posted Date: {props.date}</div>
        <div>Topic:{props.topic} </div>
        <div>Posted by: {props.name}</div>
        <div>User Id: {props.userId}</div>
        <button onClick={(viewTopic)}>View Comments</button>
        </div>
    )
}

export default TopicCard

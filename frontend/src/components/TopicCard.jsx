

const TopicCard = (props) => {
    return (
        <div>
        <div>Posted Date: {props.date}</div>
        <div>Topic:{props.topic} </div>
        <div>Posted by: {props.name}</div>
        <div>User Id: {props.userId}</div>
        </div>
    )
}

export default TopicCard

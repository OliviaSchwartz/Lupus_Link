const CommentCard = (props) => {
    return (
        <div>
            <h1> {props.date}</h1>
            <h1> {props.comment}</h1>
        </div>
    )
}

export default CommentCard

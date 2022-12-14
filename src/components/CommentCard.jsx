import { DeleteComment } from "../services/CommentServices"

const CommentCard = (props) => {

    const deleteComment= async (e) => {
        console.log(props.commentId)
        e.preventDefault()
        await DeleteComment(props.commentId)
        props.setToggle(!props.toggle)
      }

    return (
        <div className="comment-card">
            <h1 className="comment"> {props.comment}</h1>
            <h2 className="user-name"> User's name: {props.name}</h2>
            <div className="smallDetails">
            <h3><em>User Id: {props.userId}</em></h3>
            <h3><em>Comment Date: {props.date}</em></h3>
            </div>
            <button onClick={(deleteComment)}>Delete Comment</button>
        </div>
    )
}

export default CommentCard

import { DeleteComment } from "../services/CommentServices"

const CommentCard = (props) => {

    const deleteComment= async (e) => {
        console.log(props.commentId)
        e.preventDefault()
        await DeleteComment(props.commentId)
        props.setToggle(!props.toggle)
      }

    return (
        <div>
            <h1> {props.date}</h1>
            <h1> {props.comment}</h1>
            <h1> {props.name}</h1>
            <button onClick={(deleteComment)}>Delete Comment</button>
        </div>
    )
}

export default CommentCard

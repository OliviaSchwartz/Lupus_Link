import { DeleteComment } from "../services/CommentServices"

const CommentCard = (props) => {

    const deleteComment= async (e) => {

        e.preventDefault()
        await DeleteComment(props.commentId)
        props.setToggle(!props.toggle)
      }

    return (
        <div className="comment-card">
            <h3 className="comment"> {props.comment}</h3>
            <section className="topic-details">
            <div className="user-details">
            <h4 className="user-name"> User's name: {props.name}</h4>
            <div className="smallDetails">
            <h4><em>User Id: {props.userId}</em></h4>
            <h4><em>Comment Date: {props.date}</em></h4>
            </div>
            </div>
            <div className="button-container">
            <button className="create-tracker-button" onClick={(deleteComment)}>Delete Comment</button>
            </div>
            </section>
        </div>
    )
}

export default CommentCard

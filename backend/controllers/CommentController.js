const { Comments, Users } = require('../models')
const { GetUsersTrackers } = require('./SymptomTrackerController')

const getComments = async (req, res) => {
  try {
    let topicId = parseInt(req.params.topicId)
    const comment = await Comments.findAll({
      where: { topicId: topicId }
    })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const addComment = async (req, res) => {
  try {
    let topicId = parseInt(req.params.topicId)
    let userId = parseInt(req.params.userId)
    let commentContent = {
      topicId,
      userId,
      ...req.body
    }
    let comment = await Comments.create(commentContent)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const deleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.commentId)
    await Comments.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted review with ID of ${commentId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getComments,
  addComment,
  deleteComment
}

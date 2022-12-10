const { Users, TopicBoard } = require('../models')

const getAllTopics = async (req, res) => {
  try {
    const topics = await TopicBoard.findAll({
      include: {
        model: Users,
        attributes: ['name']
      }
    })
    res.send(topics)
  } catch (error) {
    throw error
  }
}

const GetOneTopic = async (req, res) => {
  try {
    let topicId = parseInt(req.params.topicId)
    let onetopic = await TopicBoard.findByPk(topicId)
    console.log(`This is one topic`, onetopic)
    res.send(onetopic)
  } catch (error) {
    throw error
  }
}

const CreateTopic = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let topicContent = {
      userId,
      ...req.body
    }
    let topic = await TopicBoard.create(topicContent)
    res.send(topic)
  } catch (error) {
    throw error
  }
}

const DeleteTopic = async (req, res) => {
  try {
    const deletedTopic = parseInt(req.params.topicId)
    await TopicBoard.destroy({ where: { id: deletedTopic } })
    res.send({ message: `Deleted schedule with an id of ${deletedTopic}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllTopics,
  CreateTopic,
  GetOneTopic,
  DeleteTopic
}

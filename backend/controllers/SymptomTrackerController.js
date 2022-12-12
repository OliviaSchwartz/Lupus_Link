const { SymptomTracker } = require('../models')
// const middleware = require('../middleware')
// const { Model } = require('sequelize')

const GetOneTracker = async (req, res) => {
  try {
    let trackerId = parseInt(req.params.trackerId)
    let userId = parseInt(req.params.userId)
    let onetracker = await SymptomTracker.findByPk(trackerId)
    console.log(`This is one schedule`, onetracker)
    res.send(onetracker)
  } catch (error) {
    throw error
  }
}

const GetUsersTrackers = async (req, res) => {
  try {
    const trackers = await SymptomTracker.findAll({
      where: {
        userId: req.params.userId
      }
    })
    console.log(trackers)
    res.send(trackers)
  } catch (error) {
    throw error
  }
}

const CreateTracker = async (req, res) => {
  try {
    let userId = parseInt(req.params.userId)
    let trackerContent = {
      userId,
      ...req.body
    }
    let tracker = await SymptomTracker.create(trackerContent)
    res.send(tracker)
  } catch (error) {
    throw error
  }
}

const UpdateTracker = async (req, res) => {
  try {
    let trackerId = parseInt(req.params.trackerId)
    let newtracker = await SymptomTracker.update(req.body, {
      where: { id: trackerId }
    })
    res.send(newtracker)
  } catch (error) {
    throw error
  }
}

const DeleteTracker = async (req, res) => {
  try {
    const deletedTracker = parseInt(req.params.trackerId)
    await SymptomTracker.destroy({ where: { id: deletedTracker } })
    res.send({ message: `Deleted schedule with an id of ${deletedTracker}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetOneTracker,
  GetUsersTrackers,
  CreateTracker,
  UpdateTracker,
  DeleteTracker
}

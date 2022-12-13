const router = require('express').Router()
const controller = require('../controllers/TopicBoardController')
const middleware = require('../middleware')

router.get('/', controller.getAllTopics)
router.get('/:topicId', controller.GetOneTopic)
router.delete(
  '/:topicId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteTopic
)
router.post('/:userId', controller.CreateTopic)

module.exports = router

const router = require('express').Router()
const controller = require('../controllers/TopicBoardController')
const middleware = require('../middleware')

router.get('/', controller.getAllTopics)
router.get('/:topicId', controller.GetOneTopic)
router.delete('/:topicId', controller.DeleteTopic)
router.post(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateTopic
)

module.exports = router

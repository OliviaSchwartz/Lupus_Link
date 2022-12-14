const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/:topicId', controller.getComments)
router.post('/:topicId/:userId', controller.addComment)
router.delete(
  '/:topicId/:commentId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteComment
)

module.exports = router

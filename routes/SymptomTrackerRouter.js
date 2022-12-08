const router = require('express').Router()
const controller = require('../controllers/SymptomTrackerController')
const middleware = require('../middleware')

router.get('/:userId', controller.GetUsersTrackers)
router.get('/:userId/:trackerId', controller.GetOneTracker)
router.delete('/:userId/:trackerId', controller.DeleteTracker)

router.post(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateTracker
)

router.put(
  '/:userId/:trackerId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateTracker
)

module.exports = router

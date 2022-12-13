const router = require('express').Router()
const controller = require('../controllers/SymptomTrackerController')
const middleware = require('../middleware')

router.get(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUsersTrackers
)
router.get(
  '/:userId/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetOneTracker
)
router.delete(
  '/:trackerId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteTracker
)

router.post('/:userId', controller.CreateTracker)

router.put(
  '/:trackerId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateTracker
)

module.exports = router

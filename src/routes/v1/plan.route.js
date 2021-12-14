const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const planValidation = require('../../validations/user.validation');
const planController = require('../../controllers/plan.controller');
const router = express.Router();

router.route('/').post(auth(), validate(planValidation.createPlan), planController.createPlan);
router.route('/:accountId').get(auth(), validate(planValidation.getPlans), planController.getPlans);

module.exports = router;

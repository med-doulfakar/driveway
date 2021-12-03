const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');

const sessionController = require('../../controllers/session.controller');
const sessionValidation = require('../../validations/session.validation');

const router = express.Router();

router.route('/').post(auth(), validate(sessionValidation.createSession), sessionController.createSession);

router.route('/:userId').get(
  () => {
    return true;
  },
  validate(sessionValidation.getByUser),
  sessionController.getSessionsByUserId
);

module.exports = router;

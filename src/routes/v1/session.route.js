const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');

const sessionController = require('../../controllers/session.controller');
const sessionValidation = require('../../validations/session.validation');

const router = express.Router();

router.route('/').post(auth(), validate(sessionValidation.createSession), sessionController.createSession);

router.route('/:userId').get(auth(), validate(sessionValidation.getByUser), sessionController.getSessionsByUserId);

router
  .route('/byAccount/:accountId')
  .get(auth(), validate(sessionValidation.getByAccount), sessionController.getSessionsByAccountId);

router
  .route('/removeUser')
  .post(auth('manageSessions'), validate(sessionValidation.removeUser), sessionController.removeUserFromSession);

router.route('/cancel/:sessionId').get(auth(), validate(), sessionController.cancelSession);
module.exports = router;

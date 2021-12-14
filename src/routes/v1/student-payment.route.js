const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { studentPaymentValidation } = require('../../validations');
const { studentPaymentController } = require('../../controllers');
const router = express.Router();

router
  .route('/')
  .post(auth(), validate(studentPaymentValidation.createStudentPayment), studentPaymentController.createStudentPayment);
router
  .route('/:studentId')
  .get(
    auth(),
    validate(studentPaymentValidation.getStudentPaymentsByStudent),
    studentPaymentController.getStudentPaymentsByStudent
  );

module.exports = router;

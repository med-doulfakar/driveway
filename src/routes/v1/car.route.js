const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const carValidation = require('../../validations/car.validation');
const carController = require('../../controllers/car.controller');

const router = express.Router();

router.route('/:accountId').get(auth(), validate(carValidation.getCars), carController.getCars);

router.route('/').post(auth(), validate(carValidation.createCar), carController.createCar);

router
  .route('/:carId')
  .patch(auth(), validate(carValidation.updateCar), carController.updateCar)
  .delete(auth(), validate(carValidation.deleteCar), carController.deleteCar);

module.exports = router;

const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { carService } = require('../services');

const createCar = catchAsync(async (req, res) => {
  const car = await carService.createCar(req.body);
  res.status(httpStatus.CREATED).send(car);
});

const getCars = catchAsync(async (req, res) => {
  const result = await carService.getCars(req.params.accountId);
  res.send(result);
});

const updateCar = catchAsync(async (req, res) => {
  const car = await carService.updateCar(req.params.carId, req.body);
  res.send(car);
});

const deleteCar = catchAsync(async (req, res) => {
  await carService.deleteCar(req.params.carId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCar,
  getCars,
  updateCar,
  deleteCar,
};

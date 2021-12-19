const httpStatus = require('http-status');

const { Car } = require('../models');
const ApiError = require('../utils/ApiError');

const createCar = async (carBody) => {
  return Car.create(carBody);
};

const getCars = async (accountId) => {
  return Car.find({ account: accountId });
};

const updateCar = async (carId, updateBody) => {
  const car = await Car.findOneAndUpdate({_id : carId} , updateBody);

  return car;
};

const deleteCar = async (carId) => {
  const car = Car.findById(carId);
  if (!car) {
    throw new ApiError(httpStatus.NOT_FOUND, 'car not found');
  }
  await car.remove();
  return car;
};

module.exports = {
  createCar,
  getCars,
  updateCar,
  deleteCar,
};

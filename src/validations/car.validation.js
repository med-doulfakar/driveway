const { object } = require('joi');
const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createCar = {
  body: Joi.object().keys({
    name: Joi.string(),
    make: Joi.string(),
    model: Joi.string(),
    year: Joi.number(),
    color: Joi.string(),
    vin: Joi.string(),
    registrationNumber: Joi.string(),
    account: Joi.string().custom(objectId),
  }),
};

const getCars = {
  params: Joi.object().keys({
    accountId: Joi.string().custom(objectId),
  }),
};

const updateCar = {
  params: Joi.object().keys({
    carId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      make: Joi.string(),
      model: Joi.string(),
      year: Joi.number(),
      color: Joi.string(),
      vin: Joi.string(),
      registrationNumber: Joi.string(),
      account: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteCar = {
  params: Joi.object().keys({
    carId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCar,
  getCars,
  updateCar,
  deleteCar,
};

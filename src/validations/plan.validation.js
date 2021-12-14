const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPlan = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.string().required(),
    account: Joi.string().custom(objectId),
  }),
};

const getPlans = {
  params: Joi.object().keys({
    accountId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPlan,
  getPlans,
};

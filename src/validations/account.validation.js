const Joi = require('joi');

const createAccount = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required(),
  }),
};

module.exports = {
  createAccount,
};

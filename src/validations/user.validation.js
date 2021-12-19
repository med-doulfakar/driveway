const { object } = require('joi');
const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('student', 'instructor', 'admin'),
    account: Joi.string().custom(objectId),
    cin: Joi.string(),
    phone: Joi.string(),
    plan: Joi.string().custom(objectId),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
const getUserByAccountId = {
  body: Joi.object().keys({
    accountId: Joi.string().custom(objectId).required(),
    roles: Joi.array().items(Joi.string()),
  }),
};

const linkUserWithAccount = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    accountId: Joi.string().custom(objectId),
  }),
};

const updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().custom(password),
      name: Joi.string().required(),
      role: Joi.string().required().valid('student', 'instructor', 'admin'),
      account: Joi.string().custom(objectId),
      cin: Joi.string(),
      phone: Joi.string(),
      plan: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  linkUserWithAccount,
  getUserByAccountId,
};

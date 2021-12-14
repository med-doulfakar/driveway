const Joi = require('joi');
const { SESSION_TYPES } = require('../config/session-types');
const { objectId } = require('./custom.validation');

const createSession = {
  body: Joi.object().keys({
    start: Joi.date().required(),
    end: Joi.date().required(),
    type: Joi.string()
      .required()
      .valid(...SESSION_TYPES),
    instructor: Joi.string().custom(objectId),
    account: Joi.string().custom(objectId),
    users: Joi.array().items(Joi.string().custom(objectId)),
  }),
};

const getByUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
const getByAccount = {
  params: Joi.object().keys({
    accountId: Joi.string().custom(objectId),
  }),
};

const removeUser = {
  body: Joi.object().keys({
    userId: Joi.string().custom(objectId),
    sessionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSession,
  getByUser,
  getByAccount,
  removeUser,
};

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
    monitorId: Joi.string().custom(objectId),
    users: Joi.array().items(Joi.string().custom(objectId)),
  }),
};

const getByUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSession,
  getByUser,
};

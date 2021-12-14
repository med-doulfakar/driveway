const Joi = require('joi');
const { objectId } = require('./custom.validation');
const methods = require('../config/payment-methods');

const createStudentPayment = {
  body: Joi.object().keys({
    method: Joi.string().required().valid('cash', 'tpe', 'virement', 'cheque', 'autre'),
    amount: Joi.number().required(),
    paymentDate: Joi.date().required(),
    student: Joi.string().custom(objectId),
    user: Joi.string().custom(objectId),
  }),
};

const getStudentPaymentsByStudent = {
  params: Joi.object().keys({
    studentId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createStudentPayment,
  getStudentPaymentsByStudent,
};

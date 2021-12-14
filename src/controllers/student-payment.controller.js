const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { studentPaymentService } = require('../services');

const createStudentPayment = catchAsync(async (req, res) => {
  const sp = await studentPaymentService.createStudentPayment(req.body);
  res.status(httpStatus.CREATED).send(sp);
});

const getStudentPaymentsByStudent = catchAsync(async (req, res) => {
  const sps = await studentPaymentService.getStudentPaymentsByStudent(req.params.studentId);
  res.status(httpStatus.OK).send(sps);
});

module.exports = {
  createStudentPayment,
  getStudentPaymentsByStudent,
};

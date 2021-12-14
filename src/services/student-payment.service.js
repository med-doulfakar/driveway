const httpStatus = require('http-status');
const { StudentPayment } = require('../models');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a student payment
 * @param {Object} studentPaymentBody
 * @returns {Promise<StudentPayment>}
 */
const createStudentPayment = async (studentPaymentBody) => {
  const student = await User.findById(studentPaymentBody.student).exec();
  if (!student) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Student doesn't exist ! ");
  }
  if (student.role !== 'student') {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Selected user is not a student ! ');
  }
  if (student.plan == null) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Selected student doesn't have any plan ! ");
  }
  const payment = await StudentPayment.create(studentPaymentBody);
  student.payments.push(payment);
   student.save();
  return payment;
};

const getStudentPaymentsByStudent = async (studentId) => {
  return StudentPayment.find({ student: studentId });
};

module.exports = {
  createStudentPayment,
  getStudentPaymentsByStudent,
};

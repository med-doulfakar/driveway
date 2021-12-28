const httpStatus = require('http-status');
const { StudentInstructor } = require('../models');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

const addStudentsToInstructor = async (body) => {
  const instructor = await User.find({ instructor: body.instructor }).exec();
  if (!instructor) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Instructor doesn't exist ! ");
  }
  return StudentInstructor.create(body);
};

const editStudentsToInstructor = async (body) => {
  return User.findOneAndUpdate({ instructor: body.instructor }, body);
};

module.exports = {
  addStudentsToInstructor,
  editStudentsToInstructor,
};

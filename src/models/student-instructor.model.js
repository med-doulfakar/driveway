const mongoose = require('mongoose');

const StudentInstructorSchema = mongoose.Schema({
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const StudentInstructor = mongoose.model('StudentInstructor', StudentInstructorSchema);

module.exports = StudentInstructor;

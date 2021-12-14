const mongoose = require('mongoose');
const { methods } = require('../config/payment-methods');

const studentPaymentSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    method: {
      type: String,
      enum: methods,
      default: 'cash',
    },
    paymentDate: {
      type: Date,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentPayment = mongoose.model('StudentPayment', studentPaymentSchema);

module.exports = StudentPayment;

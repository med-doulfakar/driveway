const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
  {
    name: String,
    make: String,
    model: String,
    year: Number,
    color: String,
    vin: String,
    registrationNumber: String,
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

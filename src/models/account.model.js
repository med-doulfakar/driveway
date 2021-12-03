const mongoose = require('mongoose');

const accountSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

/**
 * Check if account exists
 * @param {string} name - The account's name
 * @param {string} email - The account's email
 * @returns {Promise<boolean>}
 */
accountSchema.statics.isDuplicate = async function (name, email) {
  const account = await this.findOne({ name, email });
  return !!account;
};

/**
 * @typedef Account
 */
const Account = mongoose.model('Account', accountSchema);

module.exports = Account;

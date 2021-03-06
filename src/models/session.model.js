const mongoose = require('mongoose');
const { SESSION_TYPES } = require('../config/session-types');

const sessionSchema = mongoose.Schema(
  {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      enum: SESSION_TYPES,
      required: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
    },
    cancelled: {
      type: Boolean,
      default: false,
    },
    cancellations: [
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
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
sessionSchema.statics.checkOverlap = async function (startDate, endDate, monitorId, users) {
  const sessions = await this.find({
    $and: [{ start: { $gt: startDate } }, { start: { $lt: endDate } }, { users: { $in: users } }, { monitor: monitorId }],
  });

  return sessions.length > 0;
};

/**
 * @typedef Session
 */
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;

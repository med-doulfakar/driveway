const httpStatus = require('http-status');
const { Session } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a session
 * @param {Object} sessionBody
 * @returns {Promise<Session>}
 */
const createSession = async (sessionBody) => {
  const sessions = await Session.checkOverlap(sessionBody.start, sessionBody.end, sessionBody.monitorId, sessionBody.users);
  if (sessions) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Session Overlap');
  }
  return Session.create(sessionBody);
};

/**
 * get sessions by user id
 * @param {ObjectId} userID
 * @returns {Promise<Session>}
 */
const getSessionsByUserId = async (userId) => {
  const sessions = Session.find({ users: { $in: [userId] } })
    .populate('users')
    .populate('instructor');
  return sessions;
};

/**
 * get sessions by account id
 * @param {ObjectId} account Id
 * @returns {Promise<Session>}
 */
const getSessionsByAccountId = async (accountId) => {
  const sessions = Session.find({ account: accountId }).populate('users').populate('instructor');
  return sessions;
};

const removeUserFromSession = async (userId, sessionId) => {
  const session = Session.findById(sessionId).populate('users');
  const userIdx = session.users.indexOf(userId);
  session.users = session.users.splice(userIdx, 1);
  return session.save();
};

module.exports = {
  createSession,
  getSessionsByUserId,
  getSessionsByAccountId,
  removeUserFromSession,
};

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
  if ( sessions) {
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
  const sessions = Session.find({ user: userId });
  return sessions;
};

module.exports = {
  createSession,
  getSessionsByUserId,
};

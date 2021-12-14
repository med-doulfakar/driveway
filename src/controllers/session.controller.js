const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { sessionService } = require('../services');

const createSession = catchAsync(async (req, res) => {
  const session = await sessionService.createSession(req.body);
  res.status(httpStatus.CREATED).send(session);
});

const getSessionsByUserId = catchAsync(async (req, res) => {
  const sessions = await sessionService.getSessionsByUserId(req.params.userId);
  res.send(sessions);
});

const getSessionsByAccountId = catchAsync(async (req, res) => {
  const sessions = await sessionService.getSessionsByAccountId(req.params.accountId);
  res.send(sessions);
});
const removeUserFromSession = catchAsync(async (req, res) => {
  const session = await sessionService.removeUserFromSession(req.body.userId, req.body.sessionId);
  res.send(session);
});

module.exports = {
  createSession,
  getSessionsByUserId,
  getSessionsByAccountId,
  removeUserFromSession,
};

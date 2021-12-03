const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { accountService } = require('../services');

const createAccount = catchAsync(async (req, res) => {
  const account = await accountService.createAccount(req.body);
  res.status(httpStatus.CREATED).send(account);
});

module.exports = {
  createAccount,
};

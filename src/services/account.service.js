const httpStatus = require('http-status');
const { Account } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create an account
 * @param {Object} accountBody
 * @returns {Promise<Account>}
 */
const createAccount = async (accountBody) => {
  if (await Account.isDuplicate(accountBody.name, accountBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Account already exists');
  }
  return Account.create(accountBody);
};

const getAccountById = async (accountId) => {
  const account = await Account.findById(accountId);
  if (!account) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Account doesnt exist');
  }

  return account;
};
module.exports = {
  createAccount,
  getAccountById
};

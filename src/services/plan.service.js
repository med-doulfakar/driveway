const httpStatus = require('http-status');
const { Plan } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a plan
 * @param {Object} planBody
 * @returns {Promise<Plan>}
 */
const createPlan = async (planBody) => {
  if (await Plan.existsInAccount(planBody.price, planBody.account)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Plan already exists');
  }
  return Plan.create(planBody);
};

const getPlanById = async (planId) => {
  return Plan.findById(planId);
};

const getPlans = async (accountId) => {
  return Plan.find({ account: accountId }).populate('account', 'users');
};
module.exports = {
  createPlan,
  getPlanById,
  getPlans,
};

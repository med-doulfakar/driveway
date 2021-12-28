const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const kpiService = require('../services/kpis.service');

const getStudentKpis = catchAsync(async (req, res) => {
  const kpis = await kpiService.getStudentKpis(req.user);
  res.status(httpStatus.CREATED).send(kpis);
});

module.exports = {
  getStudentKpis,
};

const { Session } = require('../models');
const { StudentPayment } = require('../models');
const { Plan } = require('../models');

const getStudentKpis = async (user) => {
  const futureSessions = await Session.find({
    start: { $gte: new Date() },
    users: { $in: [user._id] },
  });

  const payments = await StudentPayment.find({
    student: user._id,
  });

  const sumPaid = payments.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  const plan = await Plan.findById(user.plan);

  return { futureSessions, payments, sumPaid, rest: plan.price - sumPaid };
};

module.exports = {
  getStudentKpis,
};

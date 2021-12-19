const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const accountRoute = require('./account.route');
const sessionRoute = require('./session.route');
const planRoute = require('./plan.route');
const studentPaymentRoute = require('./student-payment.route');
const carRoute = require('./car.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },

  {
    path: '/accounts',
    route: accountRoute,
  },
  {
    path: '/sessions',
    route: sessionRoute,
  },

  {
    path: '/plans',
    route: planRoute,
  },
  {
    path: '/student-payment',
    route: studentPaymentRoute,
  },
  {
    path: '/cars',
    route: carRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;

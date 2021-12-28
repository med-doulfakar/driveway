const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const kpiController = require('../../controllers/kpis.controller');

const router = express.Router();

router.route('/').get(auth(), validate(), kpiController.getStudentKpis);

module.exports = router;

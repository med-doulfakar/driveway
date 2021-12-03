const express = require('express');
const auth = require('../../middlewares/auth');
const accountController = require('../../controllers/account.controller');

const router = express.Router();

router.route('/').post(auth(), accountController.createAccount);

module.exports = router;

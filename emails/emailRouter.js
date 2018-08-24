const express = require('express');
const emailController = require('./emailController');

const router = express.Router();

router.post('/password-reset', emailController.sendPasswordReset);

module.exports = router;

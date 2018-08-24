const express = require('express');
const userController = require('./userController');

const router = express.Router();

// name is required
// email is required
// email must be unique
// password is required
router.post('/', userController.createUser);
router.put('/password', userController.updatePassword);

module.exports = router;

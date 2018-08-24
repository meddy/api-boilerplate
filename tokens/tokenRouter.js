const express = require('express');
const tokenController = require('./tokenController');

const router = express.Router();

// TODO: validate is guest
router.post('/auth', tokenController.createAuthToken);
// TODO: validate is authenticated
router.delete('/auth', tokenController.destroyAuthToken);

module.exports = router;

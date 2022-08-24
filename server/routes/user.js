const userCtrl = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.post('/login', userCtrl.login);

module.exports = router;
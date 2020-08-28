const express = require('express');
const router = express.Router();

const { test } = require('../controllers/authController');
//const { signup, signin, signout } = require('../controllers/authController');

router.post('/signup', test);
router.post('/signin');
//router.post('/signout', signout);

module.exports = router;
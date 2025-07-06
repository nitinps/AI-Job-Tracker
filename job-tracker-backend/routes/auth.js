const express = require('express');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/authController');

// POST /api/auth/signup
router.post('/signup', signupUser);

// POST /api/auth/login
router.post('/login', loginUser);

module.exports = router;

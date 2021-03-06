const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');

const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_KEY,
  algorithms: ['HS256'],
  userProperty: 'payload'
});

const express = require('express');
const router = express.Router();

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
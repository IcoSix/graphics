const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Register and get API key
router.post('/register', authController.register);

// Validate API key
router.post('/validate', authController.validateApiKey);

// Renew API key
router.post('/renew', authController.renewApiKey);

module.exports = router; 
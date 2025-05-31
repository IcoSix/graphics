const express = require('express');
const router = express.Router();
const collectionsController = require('../controllers/collections');
const authMiddleware = require('../middleware/auth');

// Get all collections
router.get('/', authMiddleware.authenticate, collectionsController.getAllCollections);

// Get collection by ID
router.get('/:id', authMiddleware.authenticate, collectionsController.getCollectionById);

// Get collections by theme
router.get('/theme/:themeId', authMiddleware.authenticate, collectionsController.getCollectionsByTheme);

module.exports = router; 
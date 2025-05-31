const express = require('express');
const router = express.Router();
const graphicsController = require('../controllers/graphics');
const authMiddleware = require('../middleware/auth');

// Get all graphics with optional filtering
router.get('/', authMiddleware.authenticate, graphicsController.getAllGraphics);

// Search graphics
router.get('/search', authMiddleware.authenticate, graphicsController.searchGraphics);

// Get a specific graphic by ID
router.get('/:id', authMiddleware.authenticate, graphicsController.getGraphicById);

// Bulk download graphics
router.post('/bulk-download', authMiddleware.authenticate, graphicsController.bulkDownload);

module.exports = router; 
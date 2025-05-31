const Graphic = require('../models/graphic');
const { generateError } = require('../utils/error');

/**
 * Get all graphics with optional filtering
 */
exports.getAllGraphics = async (req, res, next) => {
  try {
    const { page = 1, per_page = 10, type, sort } = req.query;
    const limit = parseInt(per_page) > 100 ? 100 : parseInt(per_page); // Max 100 per page
    const skip = (parseInt(page) - 1) * limit;
    
    // Build query object
    const query = {};
    if (type) query.type = type;
    
    // Determine sort order
    let sortOptions = {};
    switch(sort) {
      case 'newest':
        sortOptions = { created_at: -1 };
        break;
      case 'oldest':
        sortOptions = { created_at: 1 };
        break;
      case 'popular':
        sortOptions = { downloads: -1 };
        break;
      default:
        sortOptions = { created_at: -1 }; // Default to newest
    }

    // This would be a database call in a real implementation
    // Mocking response for demonstration
    const mockGraphics = [
      {
        id: '12345',
        title: 'File SVG Vector',
        type: 'svg',
        url: 'https://api.icosix.com/assets/svg/12345.svg',
        thumbnail_url: 'https://api.icosix.com/assets/thumbnails/12345.png',
        category: 'File Graphics',
        collection: 'File Graphics',
        tags: ['file', 'document', 'paper'],
        downloads: 71,
        views: 122,
        created_at: '2024-03-10T10:30:00Z'
      },
      {
        id: '12346',
        title: 'Zip File Icon',
        type: 'icon',
        url: 'https://api.icosix.com/assets/icons/12346.png',
        thumbnail_url: 'https://api.icosix.com/assets/thumbnails/12346.png',
        category: 'File Graphics',
        collection: 'File Graphics',
        tags: ['zip', 'archive', 'compressed'],
        downloads: 41,
        views: 87,
        created_at: '2024-03-09T14:15:00Z'
      }
    ];

    res.status(200).json({
      status: 'success',
      data: {
        graphics: mockGraphics,
        total: 2,
        page: parseInt(page),
        per_page: limit
      }
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Search graphics using keywords, tags, or specific criteria
 */
exports.searchGraphics = async (req, res, next) => {
  try {
    const { query, page = 1, per_page = 10, filter } = req.query;
    
    if (!query) {
      return next(generateError('Search query is required', 400));
    }
    
    const limit = parseInt(per_page) > 100 ? 100 : parseInt(per_page);
    const skip = (parseInt(page) - 1) * limit;
    
    // This would be a database search in a real implementation
    // Mocking response for demonstration
    const mockSearchResults = [
      {
        id: '12345',
        title: 'File SVG Vector',
        type: 'svg',
        url: 'https://api.icosix.com/assets/svg/12345.svg',
        thumbnail_url: 'https://api.icosix.com/assets/thumbnails/12345.png',
        category: 'File Graphics',
        collection: 'File Graphics',
        tags: ['file', 'document', 'paper'],
        downloads: 71,
        views: 122,
        created_at: '2024-03-10T10:30:00Z'
      }
    ];

    res.status(200).json({
      status: 'success',
      data: {
        graphics: mockSearchResults,
        total: 1,
        page: parseInt(page),
        per_page: limit
      }
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get a specific graphic by ID
 */
exports.getGraphicById = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    // This would be a database lookup in a real implementation
    // Mocking response for demonstration
    const mockGraphic = {
      id: '12345',
      title: 'File SVG Vector',
      description: 'A clean, modern file document SVG vector icon',
      type: 'svg',
      url: 'https://api.icosix.com/assets/svg/12345.svg',
      thumbnail_url: 'https://api.icosix.com/assets/thumbnails/12345.png',
      download_url: 'https://api.icosix.com/assets/download/12345',
      category: 'File Graphics',
      collection: 'File Graphics',
      resolution: '64x64',
      format: 'SVG',
      created_at: '2024-03-10T10:30:00Z',
      downloads: 71,
      views: 122,
      author: 'IcoSix Team',
      tags: ['file', 'document', 'paper']
    };

    res.status(200).json({
      status: 'success',
      data: {
        graphic: mockGraphic
      }
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Bulk download multiple graphics
 */
exports.bulkDownload = async (req, res, next) => {
  try {
    const { ids, format = 'zip' } = req.body;
    
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return next(generateError('Valid array of graphic IDs is required', 400));
    }
    
    if (ids.length > 50) {
      return next(generateError('Maximum 50 graphics can be downloaded at once', 400));
    }
    
    // This would be a bulk download process in a real implementation
    // Mocking response for demonstration
    res.status(200).json({
      status: 'success',
      data: {
        download_url: 'https://api.icosix.com/downloads/bulk-12345.zip',
        expires_at: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
        graphics_count: ids.length
      }
    });
  } catch (err) {
    next(err);
  }
}; 
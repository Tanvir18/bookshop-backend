const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

// Routes
router.post('/', bookController.registerBook);
router.get('/:id', bookController.getBook);
router.put('/:id', bookController.updateBook);
router.post('/:id/buy', bookController.buyBook);

module.exports = router;

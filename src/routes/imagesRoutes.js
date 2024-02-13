const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imagesController');

// Define las rutas para usuarios
router.get('/', imagesController.getAllImages);
router.get('/:id', imagesController.getImageById);

module.exports = router;
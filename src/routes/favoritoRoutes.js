const express = require('express');
const router = express.Router();
const favoritoController = require('../controllers/favoritoController');

// Define las rutas para usuarios
router.get('/', favoritoController.getAllFavoritos);
router.get('/:id', favoritoController.getFavoritosByUserId);
router.post('/create', favoritoController.createFavorito)
router.put('/:id', favoritoController.updateFavorito)
router.delete('/:id', favoritoController.deleteFavorito)

module.exports = router;
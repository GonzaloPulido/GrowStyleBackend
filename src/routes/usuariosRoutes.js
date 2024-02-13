const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Define las rutas para usuarios
router.get('/', usuariosController.getAllUsers);
router.get('/:id', usuariosController.getUserById);
router.post('/create', usuariosController.createUser)
router.put('/:id', usuariosController.updateUser)
router.delete('/:id', usuariosController.deleteUser)

module.exports = router;
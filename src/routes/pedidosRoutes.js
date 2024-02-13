const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

// Define las rutas para usuarios
router.get('/', pedidosController.getAllPedidos);
router.get('/:id', pedidosController.getPedidosByUserId);
router.post('/create', pedidosController.createPedido)
router.put('/:id', pedidosController.updatePedidoStatus)

module.exports = router;
const express = require('express');
const router = express.Router();
const productoPedidoController = require('../controllers/productoPedidoController');

router.get('/', productoPedidoController.getAllProductoPedido);
router.get('/:id', productoPedidoController.getProductoPedidoByPedidoId);
router.post('/create', productoPedidoController.createProductoPedido)
router.put('/:id', productoPedidoController.updateProductoPedido)
router.delete('/:id', productoPedidoController.deleteProductoPedido)

module.exports = router;
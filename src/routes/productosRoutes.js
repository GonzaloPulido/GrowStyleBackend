const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.getAllProducts);
router.get('/:id', productosController.getProductById);
router.post('/create', productosController.createProduct)
router.put('/:id', productosController.updateProduct)
router.delete('/:id', productosController.deleteProduct)

module.exports = router;
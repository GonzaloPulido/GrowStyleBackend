const { Router } = require('express')
const imagesRoutes = require('./imagesRoutes')
const usuariosRoutes = require('./usuariosRoutes')
const pedidosRoutes = require('./pedidosRoutes')
const productosRoutes = require('./productosRoutes')
const productoPedidoRoutes = require('./productoPedidoRoutes')
const favoritoRoutes = require('./favoritoRoutes')

// Crear el enrutador
const router = Router()

// Ruta raíz
router.get('/', (req, res) => {    
    res.send("Welcome to GrowStyle Routes")
});

// Rutas de imágenes
router.use('/images', imagesRoutes)
router.use('/usuarios',usuariosRoutes)
router.use('/pedidos', pedidosRoutes)
router.use('/productos', productosRoutes)
router.use('/productoPedido',productoPedidoRoutes)
router.use('/favorito', favoritoRoutes)


module.exports = router

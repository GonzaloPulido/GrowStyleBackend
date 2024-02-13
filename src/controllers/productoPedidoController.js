const mariaDBConnection = require('../config/mariaDB')

exports.getAllProductoPedido = async (req,res) => {
    try {
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM productoPedido";
        const rows = await conn.query(query);
        res.status(200).json(rows);
        } catch (error) {
            console.log(error)
        }
}


exports.getProductoPedidoByPedidoId = async (req, res) => {
    try {
        const { id } = req.params; 
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM productoPedido WHERE id_pedido = ?"; 
        const rows = await conn.query(query, [id]); 
        if (rows.length === 0) { 
            return res.status(404).json({ message: "Producto pedido no encontrado" });
        }
        res.status(200).json(rows[0]); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener producto pedido por ID" });
    }
}

exports.createProductoPedido = async (req, res) => {
    try {
        const { cantidad, talla, id_producto, id_pedido } = req.body;
        const conn = await mariaDBConnection();
        const query = "INSERT INTO productoPedido ( cantidad, talla, id_producto, id_pedido) VALUES (?, ?, ?, ?)";
        await conn.query(query, [cantidad, talla, id_producto, id_pedido]);
        res.status(201).json({ message: "Producto Pedido creado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear producto pedido" });
    }
}

exports.updateProductoPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const { cantidad, talla, id_producto, id_pedido } = req.body;
        const conn = await mariaDBConnection();
        const query = "UPDATE productoPedido SET cantidad = ?, talla = ?, id_producto = ?, id_pedido = ? WHERE id = ?";
        await conn.query(query, [cantidad, talla, id_producto, id_pedido, id]);
        res.status(200).json({ message: "Producto pedido actualizado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar producto pedido" });
    }
}

exports.deleteProductoPedido = async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await mariaDBConnection();
        const query = "DELETE FROM productoPedido WHERE id = ?";
        await conn.query(query, [id]);
        res.status(200).json({ message: "Producto pedido eliminado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar producto pedido" });
    }
}
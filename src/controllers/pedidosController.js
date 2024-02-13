const mariaDBConnection = require('../config/mariaDB')

exports.getAllPedidos = async (req, res) => {
    try {
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM pedidos";
        const rows = await conn.query(query);
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener pedidos" });
    }
}

exports.getPedidosByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM pedidos WHERE id_usuario = ?";
        const rows = await conn.query(query, [id]); 
        if (rows.length === 0) {
            return res.status(404).json({ message: "No se encontraron pedidos para este usuario" });
        }
        res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener pedidos por ID de usuario" });
    }
}

exports.createPedido = async (req, res) => {
    try {
        const { id_usuario, status, fecha } = req.body;
        const conn = await mariaDBConnection();
        const query = "INSERT INTO pedidos (id_usuario, status, fecha) VALUES (?, ?, ?)";
        await conn.query(query, [id_usuario, status, fecha]);
        res.status(201).json({ message: "Pedido creado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear pedido" });
    }
}

exports.updatePedidoStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!status) {
            return res.status(400).json({ error: "El estado del pedido es obligatorio" });
        }
        const conn = await mariaDBConnection();
        const query = "UPDATE pedidos SET status = ? WHERE id = ?";
        await conn.query(query, [status, id]);
        res.status(200).json({ message: "Estado del pedido actualizado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar el estado del pedido" });
    }
}

/*
exports.deletePedido = async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await mariaDBConnection();
        const query = "DELETE FROM pedidos WHERE id = ?";
        await conn.query(query, [id]);
        res.status(200).json({ message: "Pedido eliminado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar pedido" });
    }
} */
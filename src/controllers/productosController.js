const mariaDBConnection = require('../config/mariaDB')

exports.getAllProducts = async (req,res) => {
    try {
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM producto";
        const rows = await conn.query(query);
        res.status(200).json(rows);
        } catch (error) {
            console.log(error)
        }
}

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params; 
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM producto WHERE id = ?"; 
        const rows = await conn.query(query, [id]); 
        if (rows.length === 0) { 
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.status(200).json(rows[0]); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener producto por ID" });
    }
}

exports.createProduct = async (req, res) => {
    try {
        const { nombre, precio, precio_descuento, color, imagen, talla_xs, talla_s, talla_m, talla_l, talla_xl, talla_xxl } = req.body;
        const conn = await mariaDBConnection();
        const query = "INSERT INTO producto (nombre, precio, precio_descuento, color, imagen, talla_xs, talla_s, talla_m, talla_l, talla_xl, talla_xxl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        await conn.query(query, [nombre, precio, precio_descuento, color, imagen, talla_xs, talla_s, talla_m, talla_l, talla_xl, talla_xxl]);
        res.status(201).json({ message: "Producto creado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear producto" });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, precio_descuento, color, imagen, talla_xs, talla_s, talla_m, talla_l, talla_xl, talla_xxl } = req.body;
        const conn = await mariaDBConnection();
        const query = "UPDATE producto SET  nombre = ?, precio = ?, precio_descuento = ?, color = ?, imagen = ?, talla_xs = ?, talla_s = ?, talla_m = ?, talla_l = ?, talla_xl = ?, talla_xxl = ? WHERE id = ?";
        await conn.query(query, [nombre, precio, precio_descuento, color, imagen, talla_xs, talla_s, talla_m, talla_l, talla_xl, talla_xxl, id]);
        res.status(200).json({ message: "Producto actualizado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar producto" });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await mariaDBConnection();
        const query = "DELETE FROM producto WHERE id = ?";
        await conn.query(query, [id]);
        res.status(200).json({ message: "Producto eliminado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar producto" });
    }
}
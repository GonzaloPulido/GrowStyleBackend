const mariaDBConnection = require('../config/mariaDB')

exports.getAllFavoritos = async (req,res) => {
    try {
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM favorito";
        const rows = await conn.query(query);
        conn.end();
        res.status(200).json(rows);
        } catch (error) {
            console.log(error)
        }
}


exports.getFavoritosByUserId = async (req, res) => {
    try {
        const { id } = req.params; 
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM favorito WHERE id_usuario = ?"; 
        const rows = await conn.query(query, [id]); 
        if (rows.length === 0) { 
            return res.status(404).json({ message: "Favoritos no encontrados para este usuario" });
        }
        conn.end();
        res.status(200).json(rows); // Devuelve todos los favoritos encontrados
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener favoritos por ID de usuario" });
    }
}

exports.createFavorito = async (req, res) => {
    try {
        const { id_usuario, id_producto } = req.body;
        const conn = await mariaDBConnection();
        const query = "INSERT INTO favorito ( id_usuario, id_producto) VALUES (?, ?)";
        const returnedQuery = await conn.query(query, [id_usuario, id_producto]);
        console.log("Nuevo objeto",returnedQuery.insertId);
        conn.end();
        res.status(201).json({ message: "Favorito creado exitosamente", id: Number(returnedQuery.insertId)});
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear Favorito" });
    }
}

exports.updateFavorito = async (req, res) => {
    try {
        const { id } = req.params;
        const {id_usuario, id_producto } = req.body;
        const conn = await mariaDBConnection();
        const query = "UPDATE favorito SET id_usuario = ?, id_producto = ? WHERE id = ?";
        await conn.query(query, [id_usuario, id_producto, id]);
        conn.end();
        res.status(200).json({ message: "Favorito actualizado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar favorito" });
    }
}

exports.deleteFavorito = async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await mariaDBConnection();
        const query = "DELETE FROM favorito WHERE id = ?";
        await conn.query(query, [id]);
        conn.end();
        res.status(200).json({ message: "Favorito eliminado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar favorito" });
    }
}
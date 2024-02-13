const mariaDBConnection = require('../config/mariaDB')

exports.getAllUsers = async (req,res) => {
    try {
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM usuarios";
        const rows = await conn.query(query);
        res.status(200).json(rows);
        } catch (error) {
            console.log(error)
        }
}


exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params; 
        const conn = await mariaDBConnection();
        const query = "SELECT * FROM usuarios WHERE id = ?"; 
        const rows = await conn.query(query, [id]); 
        if (rows.length === 0) { 
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(rows[0]); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al obtener usuario por ID" });
    }
}

exports.createUser = async (req, res) => {
    try {
        const { rol, nombre, apellidos, telefono, email, contrasenya, calle, numero, ciudad, codigo_postal, provincia } = req.body;
        const conn = await mariaDBConnection();
        const query = "INSERT INTO usuarios (rol, nombre, apellidos, telefono, email, contrasenya, calle, numero, ciudad, codigo_postal, provincia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        await conn.query(query, [rol, nombre, apellidos, telefono, email, contrasenya, calle, numero, ciudad, codigo_postal, provincia]);
        res.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear usuario" });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { rol, nombre, apellidos, telefono, email, contrasenya, calle, numero, ciudad, codigo_postal, provincia } = req.body;
        const conn = await mariaDBConnection();
        const query = "UPDATE usuarios SET rol = ?, nombre = ?, apellidos = ?, telefono = ?, email = ?, contrasenya = ?, calle = ?, numero = ?, ciudad = ?, codigo_postal = ?, provincia = ? WHERE id = ?";
        await conn.query(query, [rol, nombre, apellidos, telefono, email, contrasenya, calle, numero, ciudad, codigo_postal, provincia, id]);
        res.status(200).json({ message: "Usuario actualizado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al actualizar usuario" });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const conn = await mariaDBConnection();
        const query = "DELETE FROM usuarios WHERE id = ?";
        await conn.query(query, [id]);
        res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al eliminar usuario" });
    }
}
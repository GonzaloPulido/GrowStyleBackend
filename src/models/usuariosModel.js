class UsuarioModel {
    constructor(rol, nombre, apellidos, telefono, email, contrasenya, calle = '', numero = '', ciudad = '', codigo_postal = '', provincia = '') {
        this.rol = rol;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.email = email;
        this.contrasenya = contrasenya;
        this.calle = calle;
        this.numero = numero;
        this.ciudad = ciudad;
        this.codigo_postal = codigo_postal;
        this.provincia = provincia
    }
}

module.exports = UsuarioModel;
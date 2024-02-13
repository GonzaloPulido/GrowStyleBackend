class PedidosModel {
    constructor(id_usuario, status = "" , fecha) {
        this.id_usuario = id_usuario;
        this.status = status;
        this.fecha = fecha;
    }
}

module.exports = PedidosModel;
class ProductoModel {
    constructor(nombre, precio, precio_descuento, color, imagen, talla_xs, talla_s, talla_m, talla_l, talla_xl, talla_xxl ) {
        this.nombre = nombre;
        this.precio = precio;
        this.precio_descuento = precio_descuento;
        this.color = color;
        this.imagen = imagen;
        this.talla_xs = talla_xs;
        this.talla_s = talla_s;
        this.talla_m = talla_m;
        this.talla_l = talla_l;
        this.talla_xl = talla_xl;
        this.talla_xxl = talla_xxl;
    }
}

module.exports = ProductoModel;
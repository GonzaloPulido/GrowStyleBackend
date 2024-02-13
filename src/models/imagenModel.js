const mongoose = require('mongoose');

const imagenSchema = new mongoose.Schema({
  base64: {
    type: String
  },
});

const Imagen = mongoose.model('images', imagenSchema)
module.exports = Imagen;
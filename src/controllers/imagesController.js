const express = require("express")
const imagenModel = require("../models/imagenModel")
const router = express.Router()

const Imagen = require('../models/imagenModel');

// Controlador para obtener todas las imágenes
// exports.getAllImages = async (req, res) => {
//     try {
//         // Busca todas las imágenes en la base de datos
//         const images = await Imagen.find();
//         console.log(images)
//         res.json(images); // Devuelve las imágenes en formato JSON
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error al obtener las imágenes.' });
//     }
// };

// Controlador para obtener una imagen por su ID
// exports.getImageById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         // Busca la imagen por su ID en la base de datos
//         const image = await Imagen.findById(id);
//         if (!image) {
//             return res.status(404).json({ message: 'Imagen no encontrada.' });
//         }
//         res.json(image); // Devuelve la imagen en formato JSON
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error al obtener la imagen.' });
//     }
// };


exports.getAllImages = async (req, res) => {
    Imagen
    .find()
    .then((images) => res.json(images))
    .catch((err) => res.json(err));
};

exports.getImageById = async (req, res) => {
    const { id } = req.params;
    Imagen
        .findById(id)
        .then((images) => res.json(images))
        .catch((err) => res.json(err));
};
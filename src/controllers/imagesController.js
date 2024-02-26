const express = require("express")
const imagenModel = require("../models/imagenModel")
const router = express.Router()

const Imagen = require('../models/imagenModel');

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
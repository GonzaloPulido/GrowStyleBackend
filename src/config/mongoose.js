const mongoose = require('mongoose')
require("dotenv").config();

// Configuración de MongoDB
const connectionImages = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectionImages
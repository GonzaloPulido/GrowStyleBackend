const express = require('express');
const PORT = process.env.PORT || 3001
const app = express();
const cors = require('cors')
const connectionBDImages = require('./config/mongoose')
const mariaDBConnection = require('./config/mariaDB')
connectionBDImages()
mariaDBConnection()

app.use(cors())
app.use(express.json());
app.use(require('./routes/index'));

app.listen(PORT, () => console.log(`API iniciada en el puerto ${PORT}`));
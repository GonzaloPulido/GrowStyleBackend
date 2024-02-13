const mariadb = require('mariadb')

// Configuración de MariaDB
const pool = mariadb.createPool({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'growstyle1234',
    database: 'growstyleDB',
  })

  const mariaDBConnection = async () => {
    try {
      const connection = await pool.getConnection()
      connection
      console.log("Conectado a MariaDB")
      return connection
    } catch (error) {
      console.log(error)
    }
  }

module.exports = mariaDBConnection
const mariadb = require('mariadb')

// Configuración de MariaDB (LOCAL)

// const pool = mariadb.createPool({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'growstyle1234',
//     database: 'growstyleDB',
// })

const pool = mariadb.createPool({
     host: 'switchyard.proxy.rlwy.net',
     port: 44878,
     user: 'root',
     password: 'PtDIueolQQuTNhuKaCIZOmKoofCuzrAv',
     database: 'railway',
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
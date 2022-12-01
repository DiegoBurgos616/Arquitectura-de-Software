var mysql = require("mysql");

var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'biblioteca',
    port: 3306
});

conexion.connect(
    (err) => {
        if (!err) console.log("Conexion establecida");
        else console.log("Error de conexion");
    }
);

module.exports = conexion;

var conexion = require('../config/conexion.js')
var libro = require("../model/libro.js")

module.exports = {
   index: function (req, res) {
      libro.obtener(conexion, function (err, datos) {
         console.log(datos);
         res.render("libros/index", { title: "Aplicacion", libros: datos });
      });
   }
}




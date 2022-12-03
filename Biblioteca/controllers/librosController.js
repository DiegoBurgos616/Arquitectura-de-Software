
var conexion = require('../config/conexion.js')
var libro = require("../model/libro.js")

module.exports = {
   index: function (req, res) {
      libro.obtener(conexion, function (err, datos) {
         console.log(datos);
         res.render("libros/index", { title: "Aplicacion", libros: datos });
      });
   },
 crear:function(req,res){
   res.render("libros/crear");

 },
 guardar:function(req,res){
    console.log(req.body);
 
    libro.insertar(conexion, req.body,function (err) {
       res.redirect("/libros");
   });


 }
}




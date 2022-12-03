var express = require('express');
var router = express.Router();
const librosController = require("../controllers/librosController");

var multer = require("multer");
var fecha = Date.now();


//Esta funcion sirve para que en caso de que dos imagenes con el mismo nombre se suban
//poder hacer una diferencia con la fecha y no se sobreescriban
var rutaAlmacen = multer.diskStorage(
    {
        destination: function (request, file, callback) {
            callback(null, "./public/images/");
        },
        filename: function (request, file, callback) {
            console.log(file);
            callback(null, fecha + "-" + file.originalname);
        }
    }
);

var cargar=multer({storage:rutaAlmacen});
/* GET home page. */


router.get("/", librosController.index);
router.get("/crear", librosController.crear);

router.post("/", cargar.single("archivo"),librosController.guardar);


module.exports = router;

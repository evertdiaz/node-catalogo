var express = require('express')
var router = express.Router()
var Producto = require('../models').producto

/* GET home page. */
router.get('/', function(req, res, next) {
	Producto.find(function(err, productos) {
		res.render('productos', { data: productos, title: "Catálogo"})
	})
});

module.exports = router;

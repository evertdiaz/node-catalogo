var express = require('express')
var router = express.Router()
var Producto = require('../models').producto
var Categoria = require('../models').categoria

/* GET home page. */
router.get('/', function(req, res, next) {
	Producto.find(function(err, productos) {
		Categoria.find(function(err,categorias) {
			res.render('productos', { data: productos, data2: categorias, title: "Catálogo"})	
		})
	})
});

router.get('/:categoria', function(req, res, next) {
	// De igual manera sería buscar por name
  Producto.find({categoria: req.params.categoria}, function(err, productos) {
    Categoria.find(function(err,categorias) {
			res.render('productos', { data: productos, data2: categorias, title: "Catálogo"})	
		})
  })
})

module.exports = router;

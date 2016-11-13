var express = require('express')
var router = express.Router()
var Producto = require('../models').producto

/* GET home page. */
router.get('/', function(req, res, next) {
	Producto.find(function(err, productos) {
		res.render('productos', { data: productos, title: "Catálogo"})
	})
});

router.get('/:categoria', function(req, res, next) {
	// De igual manera sería buscar por name
  Producto.find({categoria: req.params.categoria}, function(err, user) {
    res.render('categoria', { data: user, title: "Categoria"})
  })
})

module.exports = router;

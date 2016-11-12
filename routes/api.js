var express = require('express')
var router = express.Router()
var Producto = require('../models').producto

//GET
router.get('/productos', function(req, res, next) {
	Producto.find(function(err, productos) {
		res.send(productos)
	})
})

//GET Unitario
router.get('/producto/:id', function(req, res, next) {
  Producto.find({_id: req.params.id}, function(err, user) {
    res.send(user)
  })
})

// POST
router.post('/producto/', function(req, res, next) {
	var nombre = req.body.nombre
	var categoria = req.body.categoria
	var img = req.body.img
	var descripcion = req.body.descripcion
	var precio = req.body.precio
	var colores = req.body.colores
	var newproject = new Producto()
	newproject.nombre = nombre
	newproject.categoria = categoria
	newproject.img = img
	newproject.descripcion = descripcion
	newproject.precio = precio
	newproject.colores = colores
	newproject.save(function(err, savedProduct) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
	})

})

// UPDATE
router.put('/producto/:id', function(req, res, next){
	Producto.findById(req.params.id, function(err, prod) {
		prod.nombre = req.body.nombre;
		prod.categoria = req.body.categoria;
		prod.img = req.body.img;
		prod.descripcion = req.body.descripcion;
		prod.precio = req.body.precio;
		prod.colores = req.body.colores;
		prod.save(function(err) {
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(prod);
		});
	});
})

//DELETE
router.delete('/producto/:id', function(req, res, next) {
	Producto.findById(req.params.id, function(err, prod) {
		prod.remove(function(err) {
			if(err) return res.send(500, err.message);
			res.json({ message: 'Successfully deleted' });
		});
	});
})

module.exports = router;
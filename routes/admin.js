var express = require('express')
var router = express.Router()
var Producto = require('../models').producto
var Categoria = require('../models').categoria
var Promocion = require('../models').promocion

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('admin-login', {title:'Login'})
});

router.get('/home', function(req, res, next) {
	res.render('admin', { title: 'DASHBOARD'})
	// Temporalmente acá solo enviar las colecciones de usuarios y en frontend validar si coinciden con el ingresado
})

//Vista para ver la lista de productos
router.get('/productos', function(req, res, next) {
	Producto.find(function(err, productos) {
		Categoria.find(function(err, categorias) {
			res.render('admin-productos', { data: productos, data2: categorias, title: "Editar Producto"})
		})
		
	})
});

router.get('/producto/nuevo', function(req, res, next) {
	Categoria.find(function(err, categorias) {
		res.render('admin-producto-nuevo', { data: categorias, title: "Nuevo producto" })	
	})
})

//Vista para ver lista de productos por categoria
router.get('/productos/categoria/:nombre', function(req, res, next){
	Producto.find({categoria: req.params.nombre}, function(err, productos) {
		Categoria.find(function(err, categorias) {
			res.render('admin-productos-cat', { data: productos, data2: categorias, title: "Productos"})	
		})
		
	})
})

//Vista para realizar la edicion de un producto
router.get('/producto/editar/:id', function(req, res, next) {
	Producto.find({_id: req.params.id}, function(err, productos) {
		Categoria.find(function(err, categorias) {
			res.render('admin-producto-editar', { data: productos, data2: categorias, title: "Editar Producto"})
		})
	})
});

//Vista para lista de Categorias
router.get('/categorias', function(req, res, next) {
	Categoria.find(function(err, categorias) {
		res.render('admin-categorias', { data: categorias , title: "Categorias"})
	})
})

//Vista para nuevo categoria
router.get('/categoria/nuevo', function(req, res, next) {
	res.render('admin-categoria-nuevo', { title: 'Nueva Categoria'})
})

//Vista para editar una categoria
router.get('/categoria/:id', function(req, res, next) {
	Categoria.find({_id: req.params.id}, function(err, cat) {
		res.render('admin-categoria-editar', { data: cat , title: "Editar Categoria"})
	})
})

//Vista para Promociones
router.get('/promociones', function(req, res, next) {
	Promocion.find(function(err, promociones) {
		Categoria.find(function(err, categorias) {
			res.render('admin-promociones', { data: promociones, data2: categorias, title: "Editar Producto"})
		})
	})
})

//Vista para ver lista de promociones por categoria
router.get('/promociones/categoria/:nombre', function(req, res, next){
	Promocion.find({categoria: req.params.nombre}, function(err, promociones) {
		Categoria.find(function(err, categorias) {
			res.render('admin-promociones-cat', { data: promociones, data2: categorias, title: "Productos"})	
		})
		
	})
})

//Vista para editar una promocion
router.get('/promocion/:id', function(req, res, next) {
	Promocion.find({_id: req.params.id}, function(err, promo) {
		res.render('admin-promocion-editar', { data: promo , title: "Editar Promocion"})
	})
})

//Vista para nueva promocion
router.get('/promocion/nuevo', function(req, res, next) {
	Categoria.find(function(err, categorias) {
		res.render('admin-promocion-nuevo', { data: categorias, title: "Nuevo producto" })	
	})
})
//Vista para Mostrar Ayuda
router.get('/ayuda', function(req, res, next) {
	res.render('ayuda', { title: 'Ayuda' })
})

module.exports = router;

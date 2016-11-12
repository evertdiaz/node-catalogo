var express = require('express')
var router = express.Router()
var Producto = require('../models').producto

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('admin-login', {title:'Login'})
});

router.get('/home', function(req, res, next) {
	res.render('admin', { title: 'DASHBOARD'})
	// Temporalmente acá solo enviar las colecciones de usuarios y en frontend validar si coinciden con el ingresado
})

module.exports = router;

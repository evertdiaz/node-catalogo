var express = require('express');
var router = express.Router();
var Producto = require('../models').producto

router.get('/:nombre', function(req, res, next) {
	// De igual manera sería buscar por name
  Producto.find({nombre: req.params.nombre}, function(err, user) {
    res.render('producto', { data: user, title: "Joyería Quisuruco"})
  })
})

module.exports = router;

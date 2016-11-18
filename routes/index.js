var express = require('express');
var router = express.Router();
var Promocion = require('../models').promocion

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Joyería Quisuruco' });
});

router.get('/quienes-somos', function(req, res, next) {
  res.render('quienes-somos', { title: 'Quienes Somos' });
});

router.get('/contactanos', function(req, res, next) {
  res.render('contactanos', { title: 'Contáctanos' });
});

router.get('/promociones', function(req, res, next) {
	Promocion.find(function(err,promos) {
		res.render('promociones', { data: promos, title: 'Promociones' });
	})
});

module.exports = router;

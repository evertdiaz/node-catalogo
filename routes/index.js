var express = require('express');
var router = express.Router();

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

module.exports = router;

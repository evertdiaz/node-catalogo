var express = require('express')
var router = express.Router()
var Producto = require('../models').producto
var Categoria = require('../models').categoria
var Promocion = require('../models').promocion
var User = require('../models').User

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

//GET Por categoria
router.get('/productocat/:cat', function(req, res, next) {
  Producto.find({categoria: req.params.cat}, function(err, user) {
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


//**************CATEGORIA************+
//GET
router.get('/categorias', function(req, res, next) {
	Categoria.find(function(err, categorias) {
		res.send(categorias)
	})
})


//GET Por nombre
router.get('/categoria/:nom', function(req, res, next) {
  Categoria.find({nombre: req.params.nom}, function(err, cat) {
    res.send(cat)
  })
})

// POST
router.post('/categoria/', function(req, res, next) {
	var nombre = req.body.nombre
	var descripcion = req.body.descripcion
	var newcat = new Categoria()
	newcat.nombre = nombre
	newcat.descripcion = descripcion
	newcat.save(function(err, savedCategoria) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
	})

})

// UPDATE
router.put('/categoria/:id', function(req, res, next){
	Categoria.findById(req.params.id, function(err, cat) {
		cat.nombre = req.body.nombre;
		cat.descripcion = req.body.descripcion;
		cat.save(function(err) {
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(cat);
		});
	});
})

//DELETE
router.delete('/categoria/:id', function(req, res, next) {
	Categoria.findById(req.params.id, function(err, cat) {
		cat.remove(function(err) {
			if(err) return res.send(500, err.message);
			res.json({ message: 'Successfully deleted' });
		});
	});
})


//*********PROMOCIONES***********+
//GET
router.get('/promociones', function(req, res, next) {
	Promocion.find(function(err, promos) {
		res.send(promos)
	})
})


//GET Por nombre
router.get('/promocion/:id', function(req, res, next) {
  Promocion.find({_id: req.params.id}, function(err, promo) {
    res.send(promo)
  })
})

// POST
router.post('/promocion/', function(req, res, next) {
	var nombre = req.body.nombre
	var descripcion = req.body.descripcion
	var categoria = req.body.categoria
	var descuento = req.body.descuento
	var newpromo = new Promocion()
	newpromo.nombre = nombre
	newpromo.descripcion = descripcion
	newpromo.categoria = categoria
	newpromo.descuento = descuento
	newpromo.save(function(err, savedPromocion) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
	})

})

// UPDATE
router.put('/promocion/:id', function(req, res, next){
	Promocion.findById(req.params.id, function(err, promo) {
		promo.nombre = req.body.nombre;
		promo.descripcion = req.body.descripcion;
		promo.categoria = req.body.categoria;
		promo.descuento = req.body.descuento;
		promo.save(function(err) {
			if(err) return res.send(500, err.message);
			res.status(200).jsonp(promo);
		});
	});
})

//DELETE
router.delete('/promocion/:id', function(req, res, next) {
	Promocion.findById(req.params.id, function(err, cat) {
		cat.remove(function(err) {
			if(err) return res.send(500, err.message);
			res.json({ message: 'Successfully deleted' });
		});
	});
})


//=======USUARIOS
router.get('/user/:username', function(req, res, next) {
	User.find({username: req.params.username}, function(err,us) {
		res.send(us)
	})
})

router.post('/user/', function(req, res, next) {
	var username = req.body.username
	var password = req.body.password
	var newUser = new User()
	newUser.username = username
	newUser.password = password
	newUser.save(function(err, savedUser) {
		if(err) {
			console.log(err)
			return res.status(500).send()
		}
		return res.status(200).send()
	})

})
module.exports = router;
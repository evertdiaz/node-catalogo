var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');

var routes = require('./routes/index');
var users = require('./routes/users');
var producto = require('./routes/producto');
var productos = require('./routes/productos');
var admin = require('./routes/admin');
var api = require('./routes/api');

var app = express();
//ESTO SE AUMENTÓ PARA LAS IMAGENES
app.use(bodyParser())
var multipart = require('connect-multiparty')
app.use(multipart())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


//mongoose.connect('mongodb://localhost/cms')
//console.log('Servidor Iniciado en Developent Env. localhost:3000')
mongoose.connect('mongodb://admin:admin@ds151697.mlab.com:51697/heroku_2x3jx6cq')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));

//===IMAGENES
app.post('/product-uploaded', function(req, res) {
   //El modulo 'fs' (File System) que provee Nodejs nos permite manejar los archivos
   var fs = require('fs')
   var path = req.files.archivo.path
   console.log(process.env.HOME)
   var newPath = process.env.PWD + '/public/images/productos/' + req.files.archivo.originalFilename
   var is = fs.createReadStream(path)
   var os = fs.createWriteStream(newPath)
   is.pipe(os)
   is.on('end', function() {
      //eliminamos el archivo temporal
      fs.unlinkSync(path)
   })
   console.log('Archivo Subido')
   res.render('admin-product-uploaded', {nombre: req.files.archivo.originalFilename, title:"Archivo Subido"})
})

//===IMAGENES
app.post('/promocion-uploaded', function(req, res) {
   //El modulo 'fs' (File System) que provee Nodejs nos permite manejar los archivos
   var fs = require('fs')
   var path = req.files.archivo.path
   console.log(process.env.HOME)
   var newPath = process.env.PWD + '/public/images/promociones/' + req.files.archivo.originalFilename
   var is = fs.createReadStream(path)
   var os = fs.createWriteStream(newPath)
   is.pipe(os)
   is.on('end', function() {
      //eliminamos el archivo temporal
      fs.unlinkSync(path)
   })
   console.log('Archivo Subido')
   res.render('admin-promocion-uploaded', {nombre: req.files.archivo.originalFilename, title:"Archivo Subido"})
})


app.use('/', routes);
app.use('/users', users);
app.use('/producto', producto);
app.use('/productos', productos);
app.use('/admin', admin);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

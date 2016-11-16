var mongoose = require('mongoose')

var Schema =  mongoose.Schema

var UserSchema = new Schema({
	username: String,
	password: String,
	perfil: String,
	bio: String,
	skills: String,
	phone: Number,
	mail: String
})
mongoose.model('user', UserSchema) 
var User = mongoose.model('user')

var productoSchema = new Schema({
	nombre: String,
	categoria: String,
	img: String,
	descripcion: String,
	precio: Number,
	colores: String,
})
mongoose.model('producto', productoSchema)
var producto = mongoose.model('producto')

var categoriaSchema = new Schema({
	nombre: String,
	descripcion: String
})
mongoose.model('categoria', categoriaSchema)
var categoria = mongoose.model('categoria')


var promocionSchema = new Schema({
	nombre: String,
	descripcion: String,
	categoria: String,
	descuento: Number
})
mongoose.model('promocion', promocionSchema)
var promocion = mongoose.model('promocion')

module.exports.User = User
module.exports.producto = producto
module.exports.categoria = categoria
module.exports.promocion = promocion
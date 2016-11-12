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

module.exports.User = User
module.exports.producto = producto
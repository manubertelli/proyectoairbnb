var m = require('mongoose');

var schema = new m.Schema({
	owner: m.Schema.Types.ObjectId,
	title: String,
	description: String 
	// address:{
	// 	fullAdress: String,
	// 	coordenadas:{
 //            type: {type:String},
 //            coordinates:[Number]
 //        },
	// pictures:[{ url: String }], 
	// reservations: m.Schema.Types.ObjectId 
});

var Apartment = m.model('Apartment', schema);
module.exports = Apartment;
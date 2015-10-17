var m = require('mongoose');

var schema = new m.Schema({
	email: String,
	password: String,
	fullname: String,
	active: Boolean,
	token: String
	// reservations:[IDs],
	// apartments:[IDs]
});

var User = m.model('User', schema);
module.exports = User;
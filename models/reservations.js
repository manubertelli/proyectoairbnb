var m = require('mongoose');

var schema = new m.Schema({ 
	userId: m.Schema.Types.ObjectId, 
	apartmentId: m.Schema.Types.ObjectId, 
	startDate: Date, 
	endDate: Date 
});
var Reservation = m.model('Reservation', schema);
module.exports = Reservation;
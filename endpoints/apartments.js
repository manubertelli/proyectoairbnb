var express = require('express')
var router = express.Router();
var mongoUrl = 'mongodb://admin:admin123@ds041581.mongolab.com:41581/base_de_prueba';
var m = require('mongoose');
var apartmentsModel = require('../models/apartments');
var jwt = require('jwt-simple');


//	me conecta a la base de datos
m.connect(mongoUrl, function(err) {
    if (err) {
        console.log('esta todo mal: ' + err);
    } else {
        console.log('esta todo bien, se conecto a la base');
    }
})

// crea un nuevo apartment
router.post('/', function(req, res){
	var newApartment = new apartmentsModel(req.body);
	newApartment.save(function(err){
		if (err){
			res.status(400).json({
				error: 'algo paso'
			})
		}else{
			res.json(newApartment);
		}
	})
})

// modifica la publicacion del apartment
router.put('/', function(req,res){
	try{
		var decodedUser =  jwt.decode(req.headers.authorization, secret);
	}catch(e){
		res.status(400).json({error:'invalid token'})
	}
	
	if(decodedUser.id){
		var query = {email: req.params.email};
		var update = req.body;
		var options = {multi:false};
		Apartment.update( query, update, options, function(err, userModificado){
			res.json(userModificado)
		})
	}else{
		res.status(400).json({error:'segundo err'})
	}
})

// elimina la publicacion
router.delete('/', function(req, res){
	try{
		var decodedUser = jwt.decode(req.headers.authorization, secret);
	}catch(e){
		res.status(400).json({error: 'invalid token'})
	}
	if(decodedUser.id){
		var query = {email:req.params.email};
		var deleted = req.body;
		var options = {multi:false};
		Apartment.deleted(query, deleted, options, function(err, apartmentEliminado){
			res.json(apartmentEliminado);
		})
	}
})

// exporta router
module.exports = router;
const mongoose = require('mongoose');



/**
var schema = new  mongoose.Shema({
	id: {
		type : Integer,
		required: true
	},
	morada : {
		type : String,
		required: true 
	},
	contacto : {
		type : String,
		required : true
	}
    estado_do_bairro : {
    	type : String,
    	status : String
    }


})

**/

var schema = new  mongoose.Schema({
name: {
	type: String,
	required: true
} ,
email: {
	type: String,
	required: true,
	unique: true
},
gender: String,
status: String


});



const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
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


/**
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


**/


var schema = new  mongoose.Schema({


	morada : {
		type : String,
		required: true 
	},

	contacto : {
		type : String,
		required : true
	},

    estado_do_bairro : {
    	type : String,
    	required: true
    },

    fotografia_da_localização : {
    	type: String,
    	required: true
    }

});
const Casadb = mongoose.model('casadb', schema)

module.exports = Casadb;
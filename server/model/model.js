const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fotosSchema = Schema({
	city: String,
	state: String,
});

var schema = new mongoose.Schema({
	morada: {
		type: String,
		required: true,
	},

	contacto: {
		type: String,
		required: true,
	},

	estado_do_bairro: {
		type: String,
		required: true,
	},

	fotografia_da_localização: {
		type: String,
		required: true,
	},
	foto_1: {
		type: String,
	},
	foto_2: {
		type: String,
		required: true,
	},
	foto_3: {
		type: String,
		required: true,
	},
	foto_4: {
		type: String,
		required: true,
	},
	foto_5: {
		type: String,
		required: true,
	},
});
const Casadb = mongoose.model("casadb", schema);

module.exports = Casadb;

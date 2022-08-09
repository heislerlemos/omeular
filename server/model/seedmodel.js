var Casadb = require('../model/model');
const mongoose = require('mongoose');

const connectDB = require('../database/connection')

mongoose.connect('mongodb+srv://heisler:5Myklw7L2tbCWpyO@cluster0.toavd.mongodb.net/omeular?retryWrites=true&w=majority');

var casas = [

 new Casadb ({
  morada : "teste morada",
  contacto : "teste contacto",
    estado_do_bairro : "teste bairro",
    fotografia_da_localização : "url",
      foto_1 : "1",
      foto_2 : "2",
      foto_3 : "3",
      foto_4 : "4",
      foto_5 : "5"
}),
  new Casadb ({
  morada : "teste morada",
  contacto : "teste contacto",
    estado_do_bairro : "teste bairro",
    fotografia_da_localização : "url",
      foto_1 : "1",
      foto_2 : "2",
      foto_3 : "3",
      foto_4 : "4",
      foto_5 : "5"
}),
 new Casadb ({
  morada : "teste morada",
  contacto : "teste contacto",
    estado_do_bairro : "teste bairro",
    fotografia_da_localização : "url",
      foto_1 : "1",
      foto_2 : "2",
      foto_3 : "3",
      foto_4 : "4",
      foto_5 : "5"
}),
 new Casadb ({
  morada : "teste morada",
  contacto : "teste contacto",
    estado_do_bairro : "teste bairro",
    fotografia_da_localização : "url",
      foto_1 : "1",
      foto_2 : "2",
      foto_3 : "3",
      foto_4 : "4",
      foto_5 : "5"
})


];


casas.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === casas.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});
var Casadb = require('../model/model');
const mongoose = require('mongoose');

const connectDB = require('../database/connection')

mongoose.connect('mongodb+srv://heisler:5Myklw7L2tbCWpyO@cluster0.toavd.mongodb.net/omeular?retryWrites=true&w=majority');

var casas = [

 new Casadb ({
  morada : "Apartamento T3 em Maianga",
  contacto : "941 291 122",
    estado_do_bairro : "Bom",
    fotografia_da_localização : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-97170.jpg",
      foto_1 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-71895.jpg",
      foto_2 : "https://cdn.angocasa.com/images/content/v/e/vender-apartamento-t3-na-maianga-big-90706.jpg",
      foto_3 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-21486.jpg",
      foto_4 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-40552.jpg",
      foto_5 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-29672.jpg"
}),
  new Casadb ({
  morada : "Apartamento T3 em Ingombota",
  contacto : "940 983 472",
    estado_do_bairro : "Bom",
    fotografia_da_localização : "https://cdn.angocasa.com/images/content/1/-/1-big-70401.jpg",
      foto_1 : "https://cdn.angocasa.com/images/content/2/-/2-big-91288.jpg",
      foto_2 : "https://cdn.angocasa.com/images/content/3/-/3-big-20415.jpg",
      foto_3 : "https://cdn.angocasa.com/images/content/4/-/4-big-31801.jpg",
      foto_4 : "https://cdn.angocasa.com/images/content/5/-/5-big-22449.jpg",
      foto_5 : "https://cdn.angocasa.com/images/content/6/-/6-big-50347.jpg"
}),
 new Casadb ({
  morada : "Apartamento T3 em Edifício Solar de Alvalade",
  contacto : "932 838 552",
    estado_do_bairro : "Mal",
    fotografia_da_localização : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-91118.jpg",
      foto_1 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-42438.jpg",
      foto_2 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-91354.jpg",
      foto_3 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-28345.jpg",
      foto_4 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-85436.jpg",
      foto_5 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-big-21294.jpg"
}),
 new Casadb ({
  morada : "Apartamento T3 em Centralidade do Kilamba",
  contacto : "936 806 815",
    estado_do_bairro : "Bom",
    fotografia_da_localização : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-em-centralidade-do-kilamba-big-22355.jpg",
      foto_1 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-em-centralidade-do-kilamba-big-69851.jpg",
      foto_2 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-em-centralidade-do-kilamba-big-54994.jpg",
      foto_3 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-em-centralidade-do-kilamba-big-24726.jpg",
      foto_4 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-em-centralidade-do-kilamba-big-89640.jpg",
      foto_5 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t3-em-centralidade-do-kilamba-big-73191.jpg"
}),
 new Casadb ({
  morada : "Vivenda V3 em Projecto Orlando Residencial (Kilamba)",
  contacto : "923 283 828",
    estado_do_bairro : "Bom",
    fotografia_da_localização : "https://cdn.angocasa.com/images/content/v/i/vivenda-v3-em-projecto-orlando-residencial-via-expressa-big-45924.jpg",
      foto_1 : "Vivenda V3 em Projecto Orlando Residencial (Kilamba)",
      foto_2 : "https://cdn.angocasa.com/images/content/v/i/vivenda-v3-em-projecto-orlando-residencial-via-expressa-big-50242.jpg",
      foto_3 : "https://cdn.angocasa.com/images/content/v/i/vivenda-v3-em-projecto-orlando-residencial-via-expressa-big-75804.jpg",
      foto_4 : "https://cdn.angocasa.com/images/content/v/i/vivenda-v3-em-projecto-orlando-residencial-via-expressa-big-89123.jpg",
      foto_5 : "https://cdn.angocasa.com/images/content/v/e/venda-vivenda-v3-projecto-orlando-residencial-via-expressa-big-32514.jpg"
}),

 new Casadb ({
  morada : "Apartamento T2 em Viana",
  contacto : "923 ",
    estado_do_bairro : "Mal",
    fotografia_da_localização : "https://cdn.angocasa.com/images/content/a/p/apartamento-t2-big-70619.jpeg",
      foto_1 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t2-big-37213.jpeg",
      foto_2 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t2-big-30488.jpeg",
      foto_3 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t2-big-19612.jpeg",
      foto_4 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t2-big-63272.jpeg",
      foto_5 : "https://cdn.angocasa.com/images/content/a/p/apartamento-t2-big-53342.jpeg"
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
var Userdb = require("../model/model");	


// create and save user 

exports.create  = (req, res ) => {


	if(!req.body){
		res.status(400).send({message: "O conteudo não pode estar vazio"})
	}

// new user

/**const user = new Userdb ({
	name: req.body.name,
	email: req.body.email,
	gender: req.body.gender,
	status: req.body.status
});
*/
//save user in the database


const user = new CasaDb ({
	morada: req.body.morada ,
	contacto: req.body.contacto,
	estado_do_bairro: req.body.estado_do_bairro,
	fotografia_da_localização: req.body.fotografia_da_localização
});


user 
	.save(user)
	.then(data => {
		res.send(data)
	})

	.catch(err => {
		res.status(500).send(	{
			message: err.message || "Algum erro ocorreu enquanto criavamos o user"
		});
	});
	
	
}


// retrive  and return users/ retrive and return a single user 

exports.find = (req, res ) => {

}


// update  new idetinfied user by user id 

exports.update = (req, res ) => {
	
}



// update  new idetinfied user by user id 

exports.delete = (req, res ) => {
	
}
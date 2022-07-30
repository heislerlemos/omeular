var Casadb = require("../model/model");	


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


const casa = new Casadb ({
	morada: req.body.morada ,
	contacto: req.body.contacto,
	estado_do_bairro: req.body.estado_do_bairro,
	fotografia_da_localização: req.body.fotografia_da_localização
});


casa 
	.save(casa)
	.then(data => {
		res.send(data)
	})

	.catch(err => {
		res.status(500).send(	{
			message: err.message || "Algum erro ocorreu enquanto criavamos o casa"
		});
	});
	
	
}


// retrive  and return users/ retrive and return a single user 

exports.find = (req, res ) => {

		if(req.query.id){
			const id = req.query.id;

			Casadb.findById(id)
				.then(data => {
					if(!data){
						res.status(404).send({message: "Não foi encontrado o utilizador pelo id " + id})
					}else {
						res.send(data)
					}
				})
				.catch(err =>{
					res.status(500).send({message: "Erro a obter a casa" + id})
				})
		}else{ 

	Casadb.find()

		.then(casa => {
			res.send(casa)
		})
		.catch(err => {
			res.status(500).send({message: err.message  || "Um erro occoreu enquanto  buscava-se uma casa"})
		})
}
}


// update  new idetinfied user by user id 

exports.update = (req, res ) => {


	if(!req.body){
		return res 
			.status(400)
			.send({message: "O dado para atualizar não pode estar vazio"})
	}

	const id = req.params.id;
	Casadb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
		.then(data => {
			if(!data){
				res.status(404).send({message: 'Não é possivel atualizar a casa  co ${id}, talvez a casa não foi encontrada'})
			} else {
				res.send(data)
			}
		})
		.catch(err => {
			res.status(500).send({message: "Erro a atualizar a informação da casa "})
		})


	
}



// update  new idetinfied user by user id 

exports.delete = (req, res ) => {
	const id = req.params.id;

	Casadb.findByIdAndDelete(id)

	.then(data => {
		if(!data){
			res.status(404).send({message: `Não é possivel apagar o id ${id}, talvez o id esteja errado`})

		}else {
			res.send({
				message : "casa foi apagada!"
			})
		}

	})

	.catch(err => {
		res.status(500).send({
			message: "Não foi possivel apagar utilizador com o id " + id 
		})
	})

	
}
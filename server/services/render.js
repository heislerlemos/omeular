const axios = require('axios');




exports.homeRoutes = (req, res) => {	
	//Make a get request to the api users
	
	axios.get('http://localhost:3000/api/casas')

		.then(function(response){
			console.log(response.data)
					res.render("index", {casas: response.data});

		})

		.catch(err => {
			res.send(err);
		})


}

exports.add_casa = (req, res) => {
	res.render("add_casa")
} 


	exports.update_casa = (req, res) =>{

    axios.get('http://localhost:3000/api/casas/', { params : { id : req.query.id }})        
        .then(function(casadata){
            res.render("update_casa", { casa : casadata.data})
        })
        .catch(err =>{
            res.send(err);
        })
} 


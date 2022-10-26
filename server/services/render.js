const axios = require('axios');
var Casadb = require("../model/model");	


exports.homeRoutes = (req, res) => {	
	
	//Make a get request to the api users

	if(req.query.search) {
		var noneMatch = null;

		const regex = new RegExp(escapeRegex(req.query.search), 'gi');

		Casadb.find({morada: regex},function(err, allcasas){

			if(err){
				console.log(err);
			} else {
				if (allcasas.length < 1) {
					var noneMatch = "Não foi encontrado nenhum valor por favor tente de novo"
				}
				res.render("index", {casas:allcasas, noneMatch: noneMatch});
			}
		})


	} else {
	axios.get('https://omeular.herokuapp.com/api/casas/')

	//axios.get('https://omeular.herokuapp.com/api/casas/')

		.then(function(response){
			console.log(response.data)
					res.render("index", {casas: response.data , noneMatch: noneMatch});

		})

		.catch(err => {
			res.send(err);
		})

	}
}



exports.add_casa = (req, res) => {



      // -----------------------------------------------------------------------
  // authentication middleware

  const auth = {login: 'admin', password: 'dude007'} // change this

  // parse login and password from headers
  const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
  const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

  // Verify login and password are set and correct
  if (login && password && login === auth.login && password === auth.password) {
    // Access granted...
    return   res.render("add_casa")
  }

  // Access denied...
  res.set('WWW-Authenticate', 'Basic realm="401"') // change this
  res.status(401).send('🔐 Será necessario authenticar primeiro para aceder a esta pagina .') // custom message

  // -----------------------------------------------------------------------



  

    
} 




	exports.update_casa = (req, res) =>{

    axios.get('https://omeular.herokuapp.com/api/casas/', { params : { id : req.query.id }})        
        .then(function(casadata){
            res.render("update_casa", { casa : casadata.data})
        })
        .catch(err =>{
            res.send(err);
        })
} 




function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

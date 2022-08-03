const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection')



const app = express();


//deploying heroku 

dotenv.config({path:'config.env'})

//const PORT  = process.env.PORT || 8080



// log request
app.use(morgan('tiny'));


// mongodb connection 
connectDB();

//parse request to body parser 
app.use(bodyparser.urlencoded({extended:true}))


// set view engine

app.set("view engine", "ejs")

//Para preferencia 
//app.set("views", path.resolve(__dirname, "views/ejs"))


// load routes


app.use('/', require('./server/routes/router'))

//load assets

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.set('port', (process.env.PORT || 5000));



//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('`O Servidor esta correr 🚀 ', app.get('port'));
});


//app.listen(5000, ()=> {console.log(`O Servidor esta correr em http://localhost:${PORT}`)})
//app.listen(3000, ()=> {console.log(`O Servidor esta correr em http://localhost:${PORT}`)})


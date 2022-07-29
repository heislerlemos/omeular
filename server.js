const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');



const app = express();

dotenv.config({path:'config.env'})
const PORT  = process.env.PORT || 8080

// log request
app.use(morgan('tiny'));

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


app.listen(3000, ()=> {console.log(`O Servidor esta correr em http://localhost:${PORT}`)})
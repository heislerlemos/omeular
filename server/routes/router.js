
const express = require('express');
const route = express.Router()



const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);

/**
 * 
 * @description root route 
 * @method GET/
 * 
 * 
 * 
 * */

route.get('/add-casa', services.add_casa);

/**
 * 
 * @description add route 
 * @method GET/
 * 
 * 
 * 
 * */
route.get('/update-casa', services.update_casa);


/**
 * 
 * @description update route 
 * @method PATCH/
 * 
 * 
 * 
 * */


// API

route.post ('/api/casas', controller.create);
route.get ('/api/casas', controller.find);
route.put ('/api/casas/:id', controller.update);
route.delete ('/api/casas', controller.delete);


module.exports = route
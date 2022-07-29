
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

route.get('/add-user', services.add_users);

/**
 * 
 * @description add route 
 * @method GET/
 * 
 * 
 * 
 * */
route.get('/update-user', services.update_users);


/**
 * 
 * @description update route 
 * @method PATCH/
 * 
 * 
 * 
 * */


// API

route.post ('/api/users', controller.create);
route.get ('/api/users', controller.find);
route.put ('/api/users/:id', controller.update);
route.delete ('/api/users', controller.delete);


module.exports = route
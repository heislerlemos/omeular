
const express = require('express');
const route = express.Router()


const services = require('../services/render');

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

module.exports = route
/* eslint-disable */
const express = require('express');
const Routes = express.Router();
const {registerUser,loginAuth,vehicleAssignment,allDrivers} = require('../controller/controller')
//test Routes
const {WhereFunction} = require('../controller/controller_test')

Routes.post("/registerUser",registerUser)
Routes.post("/loginAuth",loginAuth)
//for vehicle Assignment
Routes.get("/vehicleAssignment",vehicleAssignment)
//for total driver menu card of home page
Routes.get("/allDrivers",allDrivers)



//test
Routes.get("/active",WhereFunction)

module.exports = Routes ;

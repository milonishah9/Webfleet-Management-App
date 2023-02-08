/* eslint-disable */
const express = require('express');
const Routes = express.Router();
const {registerUser,loginAuth,vehicleAssignment,allDrivers} = require('../controller/controller')


Routes.post("/registerUser",registerUser)
Routes.post("/loginAuth",loginAuth)
Routes.get("/vehicleAssignment",vehicleAssignment)
Routes.get("/all",allDrivers)



module.exports = Routes ;

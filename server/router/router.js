/* eslint-disable */
const express = require('express');
const Routes = express.Router();
const {registerUser,loginAuth} = require('../controller/controller')

Routes.post("/registerUser",registerUser)
Routes.post("/loginAuth",loginAuth)



module.exports = Routes ;
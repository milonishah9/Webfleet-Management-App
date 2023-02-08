/* eslint-disable */
const express = require('express');
const Routes = express.Router();
const {registerUser,loginAuth, addUser, updateUser} = require('../controller/controller')

Routes.post("/registerUser",registerUser)
Routes.post("/loginAuth",loginAuth)

Routes.post("/addUser",addUser)
Routes.post("/updateUser",updateUser)



module.exports = Routes ;
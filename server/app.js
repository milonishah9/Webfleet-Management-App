/* eslint-disable */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Routes = require('./router/router')

app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}) );
app.use(cors())

app.use("/",Routes)

app.listen((8010),()=>{console.log("post 8010 load");})
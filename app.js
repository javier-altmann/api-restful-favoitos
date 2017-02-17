'use strict'
var express = require('express');
var bodyParser = require('body-parser'); //importo body-parser

var app = express(); //uso express
var api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 

app.use((req,res,next)=>{
    res.header('Acces-Control-Allow-Origin','*');
    res.header('Acces-Control-Allow-Headers','X-API-KEY,Origin,X-Requested-With, Content-Type,Accept, Acces-Control-Request-Method');
    res.header('Acces-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});


app.use('/api',api);



module.exports = app;
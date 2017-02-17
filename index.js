'use strict'
var moongose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678; // Guardo el puerto


moongose.connect('mongodb://localhost:27017/cursofavoritos', function(err,res){

    if(err){
        throw err;
    } else{
        console.log("Conexión a Mongo DB correcta");
        app.listen(port,function(){
    console.log("Api Rest favoritos funcionando en Http://localhost:"+port);
});
    }


});

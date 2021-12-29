'use strict'
var mongoose = require('mongoose');     //Importación de moongose para conectarse a una base de datos
const { hostname } = require('os');
var app = require("./app");             //Importación del servidor
var port =  3900;                       //Puerto del servidor
var puerto = 27017                      //Puerto para conectarse con una base de datos
var url = "mongodb://localhost:"+puerto+"/api_tiendas";  //url  de la base de datos 

// mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;      //Declaración de Promise

//Conexion a base de datos de mongo db
mongoose.connect(url,{useNewUrlParser : true}).then(()=>{
    console.log('Conexion exitosa en las base de datos')    //Mensaje de confirmación a la conexión a la base de datos
    // Creación del servidor y configurar para escuchar peticiones de http
    app.listen(port,() => {
        console.log("servidor corriendo en el puerto "+port);   // Mensaje de verificación para el correcto funcionamiento del servidor

    });
})
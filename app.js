'use strict'

// Cargar modulos de node necesarios para el servidor
var express = require("express");
var bodyParser = require("body-parser");


// Ejecutar express http
var app = express();

// Cargar ficheros rutas

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// Añadir prefijos a rutas

// Exportar modulo o fichero actual
module.exports = app;
// 
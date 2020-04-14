const express = require('express');
const valida = require('./ValidacionUsuarios');
var Enruta=express.Router();
var jwt = require('json-web-token');



Enruta.post("/Usuarios",validacion,(req,res) => {

valida.ValidameUsuario(req.body.Usuario,req.body.Contraseña,res);

});


module.exports = Enruta;

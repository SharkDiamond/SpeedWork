const express = require('express');
const valida = require('./ValidacionUsuarios');
var Enruta=express.Router();
var jwt = require('json-web-token');


function validacion(req,res,next) {




}


Enruta.post("/Usuarios",validacion,(req,res) => {


valida.ValidameUsuario(req.body.Usuario,req.body.Contraseña,res);

});

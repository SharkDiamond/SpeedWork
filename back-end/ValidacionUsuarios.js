const express = require('express');
const datos=require('./BaseDeDatos.js');

const app=express();


function ValidameUsuario(Nombre,Contraseña) {

var ConsultBD="select * from Usuarios where Usuario='" + Nombre + "' and Contraseña='" + Contraseña + "'";


var dt=datos.Conecta();

dt.query(ConsultBD,(error,result) => {




});


}


exports.ValidameUsuario = ValidameUsuario;

//const express = require('express');
const conexionDT=require('./BaseDeDatos.js');
//var jwt = require('json-web-token');
//const app=express();
const jwt = require('jsonwebtoken');

function ValidameUsuario(Nombre,Password,res) {

const s=[Nombre,Password];


const ConsultBD="select * from Usuarios where NombreUsuario= ? and Contraseña= ?";


conexionDT.Conexion.query(ConsultBD,s, (error,row,fi) => {

if (row.length!=0) {


console.log("PASASTE" + row[0].NombreUsuario);
const datos={
usuario:row[0].NombreUsuario,
nombre:row[0].Nombre,
Apellido:row[0].Apellido
};

//FALTA COLOCARLE EL TIEMPO DE EXPIRACION
const token=jwt.sign({datos},"LOLVALIDACLAVE");

res.json(token);
res.end();

}

else {

console.log("NO PASASTE");

res.send(false);

res.end();

}




});




}


exports.ValidameUsuario = ValidameUsuario;

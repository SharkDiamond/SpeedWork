//const express = require('express');
const conexionDT=require('./BaseDeDatos.js');

//const app=express();


function ValidameUsuario(Nombre,Password,res) {

const s=[Nombre,Password];


const ConsultBD="select * from Usuarios where NombreUsuario= ? and Contraseña= ?";


conexionDT.Conexion.query(ConsultBD,s, (error,row,fi) => {

if (row.length!=0) {


console.log("PASASTE");


res.json(true);

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

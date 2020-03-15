
var mysql= require('mysql');

/*Conecta a la base de datos y devuleve un objeto conexion para
hacer las consultas*/


const Conexion=mysql.createConnection({

host:"localhost",
user:"root",
password:"",
database:"SpeedWork"


});


Conexion.connect((Error) => {

if (Error) {

console.log("Problemas Al Conectar con la base de datos");

}

else{

console.log("Base De Datos Conectada");


}


});


exports.Conexion=Conexion;

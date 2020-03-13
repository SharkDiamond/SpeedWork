
var mysql= require('mysql');

/*Conecta a la base de datos y devuleve un objeto conexion para
hacer las consultas*/


function Conecta() {

  var conexion = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : ''
  });

conexion.connect();

return conexion;

}

exports.Conecta = Conecta;

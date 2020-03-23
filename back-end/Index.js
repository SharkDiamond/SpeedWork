const express = require('express');
const VU=require('./ValidacionUsuarios.js');
const app=express();
const path = require('path');
var ClientesPrueba=require("./EnrutadorClientes.js");
const jwt = require('jsonwebtoken');
app.set("Puerto",3000);
app.set("Vistafrontal",__dirname + "/Vista/index.html");




//APRENDER PARA LA SEGURIDAD JSON WEB TOKEN  Open auth2 Y HACER BIEN LAS PETICIONES DESDE EL CLIENTE "OLVIDATE DE AXIOS"

//MOSTRAR FRON-END APLICACION REACT
app.get("/",(req,res) => {

res.sendFile(app.get("Vistafrontal"));

});

//Validacion De Usuarios
app.get("/Usuarios",(req,res) => {

//PRUEBA
  VU.ValidameUsuario("Gabriel1722","wwwaaa12",res);


//VALIDANDO EL USUARIO
//VU.ValidameUsuario(req.body.Usuario,req.body.Contraseña,res);

});

/*
axios({ method: 'POST', url: 'you http api here', headers: {autorizacion: localStorage.token}, data: { user: 'name' } })

*/

function validaToken(req,res,next) {

if (req.headers.authorization) {

console.log("se esta enviando en la cabecera la autorizacion");

req.headers.authorization.split(" ");


} else {


  console.log("no se esta enviando la autorizacion");

res.sendStatus("403");

}


}




app.use(validaToken);


//RUTAS DE LOS CLIENTES
app.use("/",ClientesPrueba);


//RUTAS DEPARTAMENTOS


app.listen(app.get("Puerto"),() => {

console.log("Servidor Iniciado en el puerto " + app.get("Puerto"));

});

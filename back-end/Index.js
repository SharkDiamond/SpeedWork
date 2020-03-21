const express = require('express');
const VU=require('./ValidacionUsuarios.js');
const app=express();
const path = require('path');
var ClientesPrueba=require("./EnrutadorClientes.js");

app.set("Puerto",3000);
app.set("Vistafrontal",__dirname + "/Vista/index.html");

//MOSTRAR FRON-END APLICACION REACT
app.get("/",(req,res) => {

res.sendFile(app.get("Vistafrontal"));

});

//Validacion De Usuarios
app.post("/Usuarios",(req,res) => {

//VALIDANDO EL USUARIO
VU.ValidameUsuario(req.body.Usuario,req.body.Contraseña,res);

});

app.get('/ab(cd)?e', function(req, res) {
  res.send('prueba');
});

//RUTAS DE LOS CLIENTES
app.use("/",ClientesPrueba);

app.listen(app.get("Puerto"),() => {

console.log("Servidor Iniciado en el puerto " + app.get("Puerto"));

});

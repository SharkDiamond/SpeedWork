const express = require('express');
const VU=require('./ValidacionUsuarios.js');
const Clientes = require('./Clientes.js');
const app=express();
const path = require('path');

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

//CANTIDAD DE CLIENTES Y CANTIDAD DE CLIENTES CANCELADOS PARA CADA TIPO DE USUARIO

//VIP
app.get("/ClientesV",(req,res) => {

Clientes.informeClientes(res,1);

});

//COMERCIAL
app.get("/ClientesC",(req,res) => {

Clientes.informeClientes(res,2);

});

//RESIDENCIAL
app.get("/ClientesR",(req,res) => {

Clientes.informeClientes(res,3);

});






app.listen(app.get("Puerto"),() => {

console.log("Servidor Iniciado en el puerto " + app.get("Puerto"));

});

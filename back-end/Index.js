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

//PARA LA BUSQUEDA DE CLIENTES
app.post("/BusquedaXYZ",(req,res) => {

Clientes.BuscaCliente(req.body.dato,req.body.Tipo,req.body.campo,res);

});

//PARA CREAR CLIENTES
app.post("/CrearClienteXYZ",(req,res) => {

Clientes.CrearCliente(res,req.body.Nombre,req.body.Apellido,req.body.Correo,req.body.Direccion,req.body.Telefono,req.body.Tipo);


});


/*
//PROTOTIPO
app.route("/Clientes:tipo").get((req,res) => {

switch (req.params.tipo) {

  case "VIP":

Clientes.informeClientes(res,1);

    break;

    case "COMERCIAL":

  Clientes.informeClientes(res,2);

      break;

      case "RESIDENCIAL":

      Clientes.informeClientes(res,3);

        break;

  default:

res.send("No buscas nada");

break;

}//FIN DEL SWITCH

}).post((req,res) => {

 if (req.params.tipo=="BUSCAR") {

 Clientes.BuscaCliente(req.body.dato,req.body.Tipo,req.body.campo,res);

 }

else  if(req.params.tipo=="CREAR"){

Clientes.CrearCliente(res,req.body.Nombre,req.body.Apellido,req.body.Correo,req.body.Direccion,req.body.Telefono,req.body.Tipo);

}

});



*/



app.listen(app.get("Puerto"),() => {

console.log("Servidor Iniciado en el puerto " + app.get("Puerto"));

});

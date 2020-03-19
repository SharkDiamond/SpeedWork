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


app.get('/ab(cd)?e', function(req, res) {
  res.send('prueba');
});




//CANTIDAD DE CLIENTES Y CANTIDAD DE CLIENTES CANCELADOS PARA CADA TIPO DE USUARIO

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



app.listen(app.get("Puerto"),() => {

console.log("Servidor Iniciado en el puerto " + app.get("Puerto"));

});

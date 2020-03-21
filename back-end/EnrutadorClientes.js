const express = require('express');
var Enrutador=express.Router();
const Clientes = require('./Clientes.js');

Enrutador.get("/Clientes:tipo",(req,res) => {
  
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


module.exports = Enrutador;

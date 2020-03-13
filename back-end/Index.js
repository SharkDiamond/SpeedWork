const express = require('express');
const VU=require('./ValidameUsuarios.js');
const app=express();

//Validacion De Usuarios
app.post("/Usuarios",(req,res) => {

var PoD=VU.ValidameUsuario(req.body.User,req.body.Password);

if (PoD) {

res.send(PoD);

res.end();
}

else if (PoD==false) {

res.send(PoD);

res.end();
}



});



app.listen(3000,() => {

console.log("Servidor Iniciado en el puerto 3000");

});

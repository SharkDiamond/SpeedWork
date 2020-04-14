//MODULOS
const express = require('express');
const VU=require('./ValidacionUsuarios.js');
const app=express();
const path = require('path');
const jwt = require('jsonwebtoken');
//ENRUTADORES
var ClientesPrueba=require("./EnrutadorClientes.js");
var Usuarios=require("./EnrutadorUsuario.js");.


//VARIABLES
app.set("Puerto",3000);
app.set("Vistafrontal",__dirname + "/Vista/index.html");


//APRENDER PARA LA SEGURIDAD JSON WEB TOKEN  Open auth2 Y HACER BIEN LAS PETICIONES DESDE EL CLIENTE "OLVIDATE DE AXIOS"

//MOSTRAR FRON-END APLICACION REACT
app.get("/",(req,res) => {

res.sendFile(app.get("Vistafrontal"));

});

//ENRUTADOR ENCARGADO DE VALIDAR USUARIOS
app.use("/",Usuarios);

/*
axios({ method: 'POST', url: 'you http api here', headers: {autorizacion: localStorage.token}, data: { user: 'name' } })

*/

//FUNCION MIDELLWARE
function validaToken(req,res,next) {

//QUE LA PETICION VENGA CON LA CABECERA DE autorizacion

const PARTIDO=req.headers.authorization.split(" ");

//VERIFICANDO QUE EN LA SOLICITUD SE ENVIEN TANTO LA CABECERA DE AUTORIZACION COMO EL BEADER
if (req.headers.authorization && PARTIDO[1]=="beader") {

console.log("se esta enviando en la cabecera la autorizacion");

//RESCATANDO EL TOKEN QUE VIENE DEL FRON-END
const Tk=req.body.token;

//VERIFICANDO SI EL TOKEN TODAVIA EXISTE
  jwt.verify(TK,"PERROSÑ37",(error,decode) =>{

if(error){
console.log("hay un error en la verificacion del JWT" + error);
}

//SI EXISTE
else if(!error){

//VALIDAR SI EL TOKEN VIENE FIRMADO
PARTETOKEN=Tk.split(".");


if (PARTETOKEN[2]=="undefined" || PARTETOKEN[2]==null) {


return;

}

else {

  next();
}



}


  });



}//CIERRE DEL IF

else {

  console.log("no se esta enviando la autorizacion");

res.sendStatus("403");

}


}

//USANDO MIDELLWARE
app.use(validaToken);



//RUTAS DE LOS CLIENTES
app.use("/",ClientesPrueba);


//RUTAS DEPARTAMENTOS


app.listen(app.get("Puerto"),() => {

console.log("Servidor Iniciado en el puerto " + app.get("Puerto"));

});

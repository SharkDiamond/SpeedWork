const datos = require('./BaseDeDatos.js');
const mysql = require('mysql');


function informeClientes(res,tipo){


datos.Conexion.query("select * from Clientes where Tipo=? and EstadoCliente=true",tipo,(error,row,filed) => {

const Cantidad=row.length;


datos.Conexion.query("select * from Clientes where EstadoCliente=false and Tipo=?",tipo,(error,row,field) => {


const CantidadCancelados=row.length;
const datos={CANTIDAD:Cantidad,CANCELADOS:CantidadCancelados};

res.json(datos);

res.end();

});


});


}

function BuscaCliente(Cliente,TipoDeCliente,campo,res) {


switch (campo) {

  case "ID":
console.log("id");

const s=[TipoDeCliente,Cliente];


const consulta="select * from Clientes where Tipo=? and idClientes=?";

datos.Conexion.query(consulta,s,(error,row,fiel) => {

if (row.length!==0) {

res.json(row);

res.end();
}

else {

res.send("No hay Resultados");
res.end();
}


});

    break;

  case "Nombre":

console.log("nombre");
const sb=[TipoDeCliente,Cliente];


const busca="select * from Clientes where Tipo=? and Nombre  LIKE '" + sb[1] + "%'";


if (datos.Conexion.escape(busca)) {

  console.log("Consulta de busqueda por Nombre realizada");

  datos.Conexion.query(busca,sb[0],(error,row,fiel) => {

  if (row.length!==0) {

  res.json(row);
  res.end();
  }

  else {

  res.send("No hay Resultados");
  res.end();
  }



  });


} else {

  console.log("no paso estan intentando hacer una inyeccion");


}



      break;

      case "Telefono":
console.log("telefono");

const sc=[TipoDeCliente,Cliente];

const buscat="select * from Clientes where Tipo=? and Telefono  LIKE '" + sc[1] + "%'";



if (datos.Conexion.escape(buscat)) {

console.log("Consulta de busqueda por Telefono realizada ");

datos.Conexion.query(buscat,sc[0],(error,row,fiel) => {


  if (row.length!==0) {

  res.json(row);
  res.end();
  }

  else {

  res.send("No hay Resultados");
  res.end();
  }

});


}

else{

console.log("no paso estan intentando hacer una inyeccion");


}





        break;

  default:

}



}



function CrearCliente(res,nombre,apellido,direccion,telefono,correo,tipo) {

switch (Tipo) {
  case 'Residencial':

const data1=[nombre,apellido,direccion,telefono,correo];
datos.Conexion.query("insert into Clientes values('',?,?,?,?,?,3,SYSDATE(),true)",data1,(error,row,field) => {

if (error) {

console.log("Hay problemas para ejecutar la consulta");

}

else {

res.send("se creo");

res.end();
}

});


    break;

 case 'Comercial':

 const data2=[nombre,apellido,direccion,telefono,correo];
 datos.Conexion.query("insert into Clientes values('',?,?,?,?,?,2,SYSDATE(),true)",data2,(error,row,field) => {

 if (error) {

 console.log("Hay problemas para ejecutar la consulta");

 }

 else {

res.send("se creo");

 res.end();
 }

 });




break;

case 'VIP':

const data3=[nombre,apellido,direccion,telefono,correo];
datos.Conexion.query("insert into Clientes values('',?,?,?,?,?,1,SYSDATE(),true)",data3,(error,row,field) => {

if (error) {

console.log("Hay problemas para ejecutar la consulta");

}

else {

res.send("se creo");

res.end();
}

});



break;


  default:



  break;
}


}





exports.informeClientes = informeClientes;

exports.BuscaCliente = BuscaCliente;

exports.CrearCliente=CrearCliente;

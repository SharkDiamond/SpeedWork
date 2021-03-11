const datos = require('./BaseDeDatos.js');
const mysql = require('mysql');


const informeClientes = (res,tipo) =>{

const Consultas=["select * from Clientes where Tipo=? and EstadoCliente=true","select * from Clientes where EstadoCliente=false and Tipo=?"];

let Clientes={

Actuales:0,
Cancelados:0
  
};


  for(let x=1;x>=2;x++){

   datos.Conexion.query(Consultas[x],tipo,(error,row,filed)=>{
  
    if(x==1) Clientes.Actuales=row.length;
    
    if(x==2) Clientes.Cancelados=row.length;   
     
    
  });

}  
  
  res.json(Clientes);

  res.end();

}

function BuscaCliente(Cliente,TipoDeCliente,campo,res) {


const Campos={  
"ID":"idClientes=?",
"Nombre",
"Telefono"

};
  
for(const propiedad in Campos){


if(Campos[propiedad]===campo){

const datos=[TipoDeCliente,Campos[propiedad]];

  
  

}

}  
  
  
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

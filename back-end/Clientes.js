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

const BuscaCliente = (Cliente,TipoDeCliente,campo,res) => {


const Campos={  
"ID":"idClientes=?",
"Nombre",
"Telefono"

};
 
  let datos;
  
for(const propiedad in Campos){


if(Campos[propiedad]===campo){

datos=[TipoDeCliente,Campos[propiedad]];

  
break;  

}//LLAVE DEL CIERRE DEL IF

}//LLAVE DE CIERRE DEL FOR
  
 const consulta="";
 
 if(datos[1]==="Nombre" ǀǀ datos[1]==="Telefono") consulta="select * from Clientes where Tipo=? and "+datos[1]+" LIKE'" + datos[1] + "%'";

 else consulta="select * from Clientes where Tipo=? and "+datos[1]+"=?";
  
  //VERIFICANDO QUE LA CONSULTA NO TENGA ALGUN ATAQUE DE INYECCION
  if (datos.Conexion.escape(busca)) {
  
datos.Conexion.query(consulta,TipoDeCliente,Cliente,(error,row,fiel) => {

if (row.length!==0) {

res.json(row);

res.end();

}

else {

res.send("No hay Resultados");
res.end();

}
  
});
  
  }//LLAVE DE CIERRE DEL IF QUE VERIFICA SI LA CONSULTA TIENE ALGUNA INYECCION SQL
  
else console.log("no paso estan intentando hacer una inyeccion");
  
}//LLAVE DE CIERRE DE LA FUNCION BUSCACLIENTE


const CrearCliente = (res,nombre,apellido,direccion,telefono,correo,tipo) => {

const Clientes=[
{"VIP":1},
{"Comercial":2},
{"Residencial":3}];

const IDCLIENTE=Clientes.filter((T) => {T==tipo;});  
 
const data1=[nombre,apellido,direccion,telefono,correo];

 datos.Conexion.query("insert into Clientes values('',?,?,?,?,?,3,SYSDATE(),true)",data1,(error,row,field) => {

if (error) console.log("Hay problemas para ejecutar la consulta");

else {

res.send("se creo");

res.end();
}

});  
  
}

exports.informeClientes = informeClientes;
exports.BuscaCliente = BuscaCliente;
exports.CrearCliente=CrearCliente;

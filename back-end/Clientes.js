const datos = require('./BaseDeDatos.js');




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

      break;

      case "Telefono":
console.log("telefono");

const sc=[TipoDeCliente,Cliente];

const buscat="select * from Clientes where Tipo=? and Telefono  LIKE '" + sc[1] + "%'";


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


        break;

  default:

}



}






exports.informeClientes = informeClientes;

exports.BuscaCliente = BuscaCliente;

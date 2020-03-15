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



exports.informeClientes = informeClientes;

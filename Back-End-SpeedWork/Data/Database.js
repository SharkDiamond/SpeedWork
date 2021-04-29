const mysql=require("mysql");
const { search } = require("../Routes/General");

//DATA OF SERVICE OF THE DATABASE
const connection = mysql.createConnection({

host:"localhost",
user:"root",
password:"",
database:"SpeedWork"


});


//CONECTED TO THE DATABASE
connection.connect(function(err) {
    
    if (err) console.log("Not Connection");

console.log("connected to the database");

});


//FOR SEARCH OF CLIENTS
searchClientData=(Tipo,dato,campo)=>{
   
   return new Promise((resolve,reject)=>{

    const typeClient=["","VIP","Comercial","Residencial"];

    const IdType =typeClient.indexOf(Tipo);

    console.log(dato,IdType);

    let query=``;
    
    
        if (campo!="idClientes") {
        
            query=`SELECT * from clientes where Tipo=${IdType} and ${campo} like ${"'"+dato+"%'"}  and  EstadoCliente=true`;
    
        }
    
        else{

            query=`SELECT * from clientes where Tipo=${IdType} and ${campo}=${"'"+dato+"'"} and  EstadoCliente=true`;
    
        } 
    
        connection.query(query,(error, results, fields)=> {
        
            if (error) throw error;

            resolve(results);
      
    });




   }); 


}





//EXPORT THE FUNCTIONS
module.exports=searchClientData;










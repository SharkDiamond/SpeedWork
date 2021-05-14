//IMPORTS
const mysql=require("mysql");
//const { search } = require("../Routes/General");

//CREATE THE CONNEXION WITH DATABASE
const connections = mysql.createPool({
    connectionLimit:15,
    host:"localhost",
    user:"root",
    password:"",
    database:"SpeedWork",
    port:3306

});

//FOR BACK AN CONNEXION WITH DATABASE
const createConeccionUpdate=()=>{

    return new Promise((resolve, reject)=>{

        connections.getConnection((error,connection)=>{

            if (error) reject("Not Connection");

            else resolve(connection);

        });

    });

};

//FOR SEARCH THE TYPE OF CLIENTS ACCORDING TO ID
const SearchTypeClient =(Type)=>{

        const typeClient=["","VIP","Comercial","Residencial"];
    
        const IdType =typeClient.indexOf(Type);
    
        return IdType;
    
     }

//FOR SEARCH OF CLIENTS
 const searchClientData= (Type,data,campo) => {

   return new Promise(async (resolve,reject)=>{

        let query=``;
    
        let s1="'"+data+"'";
        let s2="'"+campo+"'";

        try {

            let connection = await createConeccionUpdate();

                if (connection.escape(data)===s1 && connection.escape(campo)===s2 && parseInt(connection.escape(Type),10)===Type) {

                    if (campo!=="ID") query="SELECT * from clientes where "+ campo + " LIKE '"+data+"%'" + "and Tipo="+Type;

                    else {

                        campo = "idClientes";

                        query="SELECT * from clientes where "+ campo +"="+ data + " and Tipo="+Type;
                    }

                    connection.query(query,[campo,data],(error,results)=> {
        
                        resolve(results);
                        //CLOSE CONNECTION
                        connection.release();

                    });

                }


                else{

                    reject("The data of enter have sql injection");

                    console.log("The data of enter have sql injection");

                }

        }

        catch (error) {

           reject("Problems with the consult of the find of the clients" + error);

        }


   }); 


}

//FOR CREATE CLIENTS
const CreateClient = (Nombre,Apellido,Direccion,Telefono,Correo,Tipo)=>{

    return new Promise(async (resolve,reject)=>{

        try {

            let connection = await createConeccionUpdate();

            let query=`INSERT INTO Clientes VALUES ("",?,?,?,?,?,?,SYSDATE(),true)`;

            connection.query(query,[Nombre,Apellido,Direccion,Telefono,Correo,SearchTypeClient(Tipo)],(error, results)=> {
            
                if (error) reject("PROBLEM TO THE INSERT IN THE DATABASE");
                
                else resolve(true);
                
                connection.release();
    
            });

        } catch (error) {

            console.log("Problems the create client" + Nombre, Apellido);

            reject("PROBLEM TO THE INSERT IN THE DATABASE CLIENTS" + error);

        }

       }); 


}

//FOR VALIDATE USERS
const validUsers = (NombreUsuario,Contraseña)=>{

    return new Promise(async (resolve, reject) => {

        try {

            let coneccion = await createConeccionUpdate();

            let query="SELECT * FROM usuarios where NombreUsuario=?  and  Contraseña=?";

            coneccion.query(query,[NombreUsuario,Contraseña],(error, result)=>{

                if (result.length>0) resolve(true);

                else resolve(false);

                coneccion.release();
            });

        }

        catch (error) {
            reject("there was a problem when searching for the user" + error);
        }


    });


}


const DataClientType = (Type) =>{

    return new Promise(async (resolve,reject)=>{

        try {
            let connexion=await createConeccionUpdate();

            let query="SELECT COUNT(*) as Amount FROM clientes WHERE EstadoCliente=true AND Tipo=? UNION SELECT COUNT(*) from clientes WHERE EstadoCliente=false AND Tipo=?";

            connexion.query(query,[Type,Type],(error, results, fields)=>{

                const cantidad={
                    totalClients:results[0].Amount,
                    CanceledClients:results[1].Amount

                };

                if (error) reject("Hubo un problema al ejecutar la consulta:"+error);

                else resolve(cantidad);

                connexion.release();

            });
        }

        catch (error){

            reject("Hubo un problema:"+error);

        }


    });


}

//EXPORT THE FUNCTIONS
module.exports={searchClientData,CreateClient,validUsers,DataClientType};

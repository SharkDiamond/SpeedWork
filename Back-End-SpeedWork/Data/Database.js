//IMPORTS
const mysql=require("mysql");
//const { search } = require("../Routes/General");
const encriptar=require("bcryptjs");
const { query } = require("express-validator");
//CREATE THE CONNEXION WITH DATABASE
const connections = mysql.createPool({
    connectionLimit:20,
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
const validUsers = (NombreUsuario,Contraseña2)=>{

    return new Promise(async (resolve, reject) => {

        try {

            let coneccion = await createConeccionUpdate();

            //giving back Password
            let query="SELECT Contraseña FROM usuarios where NombreUsuario=?";

            coneccion.query(query,[NombreUsuario],(error, result)=>{

                if (error) console.log(error);

                if (result.length>0 && encriptar.compareSync(Contraseña2,result[0].Contraseña)) resolve(true);

                else resolve(false);

                coneccion.release();
            });

        }

        catch (error) {
            reject("there was a problem when searching for the user" + error);
        }


    });


}

//FOR AMOUNT CLIENTS OPEN AND CANCELED
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

const UpdatePassword = () =>{

    return new Promise(async (resolve, reject) => {

        try {

            let coneccion = await createConeccionUpdate();

            var salt = encriptar.genSaltSync(10);

            var hash = encriptar.hashSync("paseelectronica", salt);

            let query="UPDATE usuarios SET Contraseña='"+hash + "' WHERE NombreUsuario='Joseito'";

            coneccion.query(query,(error, result)=>{

                resolve(true);

                coneccion.release();
            });

        }

        catch (error) {
            reject("there was a problem when searching for the user" + error);
        }


    });








}

const existUser= (User)=>{

    return new Promise(async (resolve, reject)=>{
    
        try {

            let connection=await createConeccionUpdate();

            let query="SELECT Sexo from usuarios where NombreUsuario='"+User+"'";

            connection.query(query,User,(error,fields)=>{

                if (error) reject("hubo un problema",error);

               const manageResult = fields.length>0 && fields.length==1 ? resolve(true) : resolve(false);

                connection.release();

        });

        }
        
        catch (error) {
            reject("Hubo un problema",error);
        }

    });

}

//FOR CREATE DEPARTAMENTS
const CreateDepartaments=(NameDepartament)=>{

    return new Promise(async (resolve,reject)=>{


        try{

            const conexion= await createConeccionUpdate();

            let query="INSERT INTO departamentos VALUES ('',?)";

            conexion.query(query,[NameDepartament],(error,results,fields)=>{

                if (error) reject("No autorizado"+ error);

                if (results.affectedRows>0) resolve("Creado!");

                conexion.release();

            });


        }

        catch (e) {
            reject(`No hay conexion con la base de datos`);
        }



    });




}

//FOR VALIDE IF  A DEPARTAMENT EXIST
const validDepartament= (Departament)=>{

    return new Promise(async (resolve, reject)=>{

        try {

            let connection=await createConeccionUpdate();

            let query="SELECT NombreDepartamento from departamentos where NombreDepartamento='"+Departament+"'";

            connection.query(query,Departament,(error,fields)=>{

                if (error) reject("hubo un problema",error);

                const manageResult = fields.length>0 && fields.length==1 ? resolve(true) : resolve(false);

                connection.release();

            });

        }

        catch (error) {
            reject(error);
        }

    });

}

const valideDepartamentExistId =(Departament)=>{

    return new Promise(async (resolve, reject)=>{


        try {

            let connection=await createConeccionUpdate();

            let IdNumber=parseInt(Departament);

            let query="SELECT NombreDepartamento from departamentos where idDepartamento=?";

            connection.query(query,IdNumber,(error,results,fields)=>{

                if (error) reject("hubo un problema",error);

                const manageResult = results.length>0 && results.length==1 ? resolve(true) : resolve(false);

                connection.release();

            });

        }

        catch (error) {
            reject("Hubo un problema con la conexion o la consulta",error);
        }

    });

}


//FOR CREATE REPORT
const createReport=(Report,idDepartamento)=>{

    console.log(Report,idDepartamento);

    return new Promise(async (resolve,reject)=>{

        try {

            let conexion=await createConeccionUpdate();

            const query="insert into Reportes values('',?,true,SYSDATE(),?,null)";

            conexion.query(query,[Report,idDepartamento],(error,results,fields)=>{

                if (error) reject("Hubo un problema al ejecutar la consulta",error);

              if (results.affectedRows>0) resolve("Reporte Creado!");

                conexion.release();

            });

        }

        catch (error){

            reject("Hubo un problema al crear el reporte",error);

        }

    });

}


const validReportExist=(idReporte)=>{

        return new Promise(async(resolve,reject)=>{

            try {
                
                let conexion=await createConeccionUpdate();

                const query="select NombreReporte from reporte where idReporte=?";

                conexion.query(query,idReporte,((error,result)=>{

                    if (error) console.log("Hubo un problema al ejecutar la consulta");

                    let manageResult=result.length>0 && result.length==1 ? resolve(true) : resolve(false);

                    conexion.release();


                }));

            } catch (error) {
                
                reject("Hubo un problema con la conexion:"+error);

            }

        }); 

}



const createCommentary=(comentario,reporte,usuario)=>{

    return new Promise(async(resolve,reject)=>{

        try {
            
        let conexion=await createConeccionUpdate();

        let query="insert into comentarios values('','?',SYSDATE,'?',?";

        conexion.query(query,[comentario,reporte,usuario],((error,result,fields)=>{

            if (error) console.log("Hubo un problema al ejecutar la consulta");

            if (result.affectedRows>0) resolve("Comentario Creado");
        
            conexion.release();

        }));

        } 
        

        catch (error){
            
            reject("Hubo un problema al crear el comentario:"+error);

        } 


    });


}



//EXPORT THE FUNCTIONS
module.exports={searchClientData,CreateClient,validUsers,DataClientType,UpdatePassword,existUser,CreateDepartaments,validDepartament,valideDepartamentExistId,createReport,createCommentary,validReportExist};

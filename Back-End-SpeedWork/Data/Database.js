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

            if (error) return reject("Not Connection Whith Database");

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
            
                if (error) reject("PROBLEM TO THE INSERT IN THE DATABASE CreateClient");
                
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

                if (error) console.log("Hubo un problema al ejecutar la consulta validUsers"+error);

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

                if (error) reject("hubo un problema al ejecutar la consulta existUser",error);

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

                if (error) reject("hubo un problema al ejecutar la consulta validDepartament",error);

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

                if (error) return reject("hubo un problema al ejecutar la consulta valideDepartamentExistId");


                try {
                    const manageResult = results.length>0 && results.length==1 ? resolve(true) : resolve(false);
                } catch (error) {
                    
                    reject("hubo un problema");

                }

                

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

                if (error) reject("Hubo un problema al ejecutar la consulta create report",error);

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


                const query="select NombreReporte from reportes where idReporte=?";
                
                conexion.query(query,idReporte,((error,result)=>{

                    if (error) console.log("Hubo un problema al ejecutar la consulta en validReport");
                    

                    try {

                        let manageResult=result.length>0 && result.length==1 ? resolve(true) : resolve(false);

                    conexion.release();
                        
                    } catch (error) {
                        console.log(error,"problema con el result en validreportexist");
                    }

                    


                }));

            } catch (error) {
                
                reject("Hubo un problema con la conexion:"+error);

            }

        }); 

}


const returnComents=(reporte)=>{

    
    return new Promise(async(resolve,reject)=>{

        try {
            
        let conexion=await createConeccionUpdate();

        let query="select * from comentarios where NumeroReporte=?";

       
        conexion.query(query,reporte,((error,results,fields)=>{

            if (error) console.log("Hubo un problema al ejecutar la consulta returnComents");
            
            
             resolve(results);
        
            conexion.release();

        }));

        } 
        

        catch (error){
            
            reject("Hubo un problema al buscar los comentarios:"+error);

        } 


    });


}


const createCommentary=(comentario,reporte,usuario)=>{

    console.log("llego a crear comentario");

    return new Promise(async(resolve,reject)=>{

        try {
            
        let conexion=await createConeccionUpdate();

        let query="insert into comentarios values ('',?,SYSDATE(),?,?)";

        conexion.query(query,[comentario,usuario,reporte],((error,results,fields)=>{

            if (error) console.log("Hubo un problema al ejecutar la consulta Commentary");
            
            console.log(results);

            if (results.affectedRows>0) resolve("Comentario Creado!");
        
            conexion.release();

        }));

        } 
        

        catch (error){
            
            reject("Hubo un problema al crear el comentario:"+error);

        } 


    });


}


const returnReports=(idReport)=>{


    return new Promise(async(resolve,reject)=>{

    try {
        

        let conexion=await createConeccionUpdate();

        let query="select * from reportes where PertenenciaDepartamento=?"

        conexion.query(query,idReport,(error,result)=>{

            if (error) return reject("Hubo un problema al ejecutar la consulta de Reports");

            resolve(result);

            conexion.release();
        });

    } catch (error) {

        reject(error);

        
    }


    });


}


const DepartamentNumber=()=>{


    return new Promise(async(resolve,reject)=>{

        try {
        
            let conexion=await createConeccionUpdate();
    
            let query="select idDepartamento, NombreDepartamento from departamentos";
    
            conexion.query(query,(error,result,fields)=>{
                
                if (error){

                    console.log(error);  
                    
                    reject(error);
                    
                    return;

                };

                resolve(result);

                conexion.release();

            });
    
    
    
        } catch (error) {
            reject(error);
            console.log(error);
           
        }






    });

   





}


DepartamentAndAmountReports=()=>{

        return new Promise(async(resolve,reject)=>{
            
            let CANTIDAD=[];
            let NOMBRES=[];
            let IDDEPARTAMENTO=[];

            try {
                
                let data=await DepartamentNumber();

                data.forEach(async(element,index) => {
                   
                    let conexion= await createConeccionUpdate();
    
                    let query="select count(*) as cantidad from reportes where PertenenciaDepartamento=?";
                
                    conexion.query(query,element.idDepartamento,(error,result)=>{
                       
                        if (error) return reject("Hubo un problema al ejecutar la consulta en la funcion DepartamentAndAmountReports");
    
                        CANTIDAD.push(result[0].cantidad);
    
                        NOMBRES.push(element.NombreDepartamento);
                        
                        IDDEPARTAMENTO.push(element.idDepartamento);
    
                        
                        
                        if (index==data.length-1) resolve([NOMBRES,CANTIDAD,IDDEPARTAMENTO]);
                        //hay que volver a crear la bnghihyuconexion
                        conexion.release();
    
                    });
                   
                    
                });
    
    


            } catch (error) {
                
                reject(error);
            }


        });



}

const returnReport=(idReport)=>{

        return new Promise(async(resolve,reject)=>{

            try {

                let conexion=await createConeccionUpdate();

                let query="select NombreReporte,FechaCreacion,Estado from reportes where idReporte=?";

                conexion.query(query,idReport,(error,result,fields)=>{

                    if (error) return reject("Hubo un problema al ejecutar la consulta de returnReport");

                    resolve(result[0]);

                    conexion.release();

                });


            } catch (error) {
                
                reject(error);

            }



        });


}

const OOCReport=(cambia,reporte)=>{

    return new Promise(async(resolve,reject)=>{

       try {

        let conexion=await createConeccionUpdate();

        let query="UPDATE reportes SET Estado=? WHERE idReporte=?";

        conexion.query(query,[cambia,reporte],(error,result,fields)=>{

           if (error) return reject("Hubo un problema al ejecutar la consulta en OOCReport");

            resolve(result.affectedRows==1 && result.affectedRows>0 ? true : false);

            conexion.release();

        });


       } catch (error) {
          
            reject(error);

       } 

    });

}


const returnReporstDay=()=>{

    return new Promise(async(resolve,reject)=>{
        
    try {

        let conexion=await createConeccionUpdate();

        let query="SELECT NombreReporte FROM `reportes` ORDER BY `FechaCreacion` DESC LIMIT 3"

        conexion.query(query,(error,result)=>{

            if (error) return reject(error);
            
            resolve(result);

            conexion.release();

        });


    } catch (error) {
       
        reject(error);

    }




    });





}

const returnPanelData=()=>{

    return new Promise(async(resolve,reject)=>{

        try {
            
            let conexion=await createConeccionUpdate();

            let query="select count(*) as DATA from clientes UNION select count(*)  from reportes UNION select count(*) from reportes where PertenenciaDepartamento=24";
                //
            conexion.query(query,(error,result)=>{
                
                if (error) return reject(error);
                    
                    
                  let [CLIENTES,REPORTES,VISITAS]=result;
                    
                let Respuesta={
                   "CLIENTES":CLIENTES.DATA,
                    "REPORTES":REPORTES.DATA,
                    "VISITAS":VISITAS.DATA


                }

                resolve(Respuesta);

                delete Respuesta;

                conexion.release();

            });


        } catch (error) {
            
            reject(error);


        }


    });







}

const amountForMonth=(type)=>{

    return new Promise(async(resolve,reject)=>{

        try {
        
            const MonthData=[];
            const recorrer=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
            const Data={
                
                "ClientesEnMes":["clientes","FechaCreacionPerfil"],
                "ReportesEnMes":["reportes","FechaCreacion"],
                "VisitasEnMes":["reportes","FechaCreacion",24]
    
            }
            


            recorrer.forEach(async(elemeto,index)=>{
                
                let conexion=await createConeccionUpdate();
                
                let mesRepeat=index+1;
               
                let complemento=" where MONTH("+Data[type][1]+")="+mesRepeat+" and PertenenciaDepartamento="+Data[type][2];

                if(type!=="VisitasEnMes") complemento=" where MONTH("+Data[type][1]+")="+mesRepeat;

                let query="select count(*) as amounth from "+Data[type][0]+complemento;

                conexion.query(query,(error,result)=>{
                    
                    if(error)  return reject(error);
                    
                    MonthData[index]={"Mes":elemeto,"Cantidad":result[0].amounth};
                    if (index==11) {

                        
                        resolve(MonthData);
                    }
                    conexion.release();
                   
                });
                

            });

           

            /*
            for (let index=0; index<=12; index++) {
                
              
            };
          */
          

        } catch (error) {
            reject(error);
        }


    })


}




//EXPORT THE FUNCTIONS
module.exports={searchClientData,CreateClient,validUsers,DataClientType,UpdatePassword,existUser,CreateDepartaments,validDepartament,valideDepartamentExistId,createReport,createCommentary,validReportExist,returnComents,returnReports,DepartamentAndAmountReports,returnReport,OOCReport,returnReporstDay,returnPanelData,amountForMonth};

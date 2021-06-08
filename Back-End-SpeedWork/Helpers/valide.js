const {existUser,validDepartament,valideDepartamentExistId,validReportExist}=require("../Data/Database");

const validateUserExist= async (User)=> {

    console.log("Imprime en valid user",User);


    let found =null;

    if (User.length<7 || User.length>11){

        throw new Error("El nombre de usuario debe tener minimo 7 caracteres y maximo 10 caracteres.");

        return 0;

    }


    try { found = await existUser(User); }

    catch (error) { console.log("Hubo un problema al verificar el usuario",error); }

    if (!found) throw new Error("El usuario ingresado no existe!");

}

const valideDepartamentExist=async (Departament)=>{

    let found=null;

    try { found = await validDepartament(Departament); }

    catch (error) { console.log("Hubo un problema al verificar el Departamento",error); }

    if (found) throw new Error("Ya existe un departamento con ese nombre.");

}

const DepartamentExistId=async (idDepartment)=>{

    let found=null;

    try { found = await valideDepartamentExistId(idDepartment); }

    catch (error) { console.log("Hubo un problema al verificar el Departamento",error); }


    if (!found) throw new Error("El departamento no existe.");

}


const validReport=async (idReporte)=>{

let reporte=parseInt(idReporte);

    console.log("Imprime en valid report",reporte);

    let found=null;
   
    try {found=await validReportExist(reporte);} 
    
    catch (error) { console.log("Hubo un problema al verificar el reporte:"+error); }   


    console.log(found,"Imprime en funcion validreport");

    if (!found) throw new Error("El Reporte no existe.");

}


module.exports={validateUserExist,DepartamentExistId,validReport,valideDepartamentExist};

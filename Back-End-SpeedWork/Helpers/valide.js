const {existUser,validDepartament}=require("../Data/Database");


const validateUserExist= async (User)=> {

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


module.exports={validateUserExist,valideDepartamentExist};
const {existUser}=require("../Data/Database");


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


module.exports={validateUserExist};

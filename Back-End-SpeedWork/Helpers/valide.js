const encriptar=require("bcryptjs");
const {existUser}=require("../Data/Database");


const validateUserExist= async (User)=> {

    let found =null;

    try { found = await existUser(User); }

    catch (error) { console.log("Hubo un problema al verificar el usuario",error); }

    if (!found) throw new Error("El usuario ingresado no existe");

}


module.exports={validateUserExist};

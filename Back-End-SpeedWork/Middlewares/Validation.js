const {validationResult}=require("express-validator");


const validateRequest= async (request,response,next)=>{

    const error= await validationResult(request);
    console.log(error.isEmpty());

    let responseErrors=[];

    error.errors.forEach((valor,indice)=>responseErrors[indice]=valor.msg);

    if (!error.isEmpty()) return response.status(400).json({Errors:responseErrors}).end();

    next();

}



module.exports={validateRequest};

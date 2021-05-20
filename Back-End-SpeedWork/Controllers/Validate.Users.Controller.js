const {response}=require("express");
const {validUsers}=require("../Data/Database");
const {validationResult}=require("express-validator");


const Validate=(request, res=response)=>{


  const error=validationResult(request);

  //VALIDANDO SI HAY ALGUN ERROR
  if (!error.isEmpty()) return res.status(400).json({Error1:error.errors[0].msg,Error2:error.errors.length>1 ? error.errors[1].msg : null}).end();

    validUsers(request.body.User, request.body.Password).then( Result => {

        if (Result){

            res.status(202).json({happen:Result}).end();
            let Time=new Date();
            console.log(request.body.User,Time);
        }

        else res.status(203).json({happen:Result}).end();

        }).catch(error => console.log(error));


}

module.exports = Validate;
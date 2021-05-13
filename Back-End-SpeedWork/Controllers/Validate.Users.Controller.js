const {response}=require("express");
const {validUsers}=require("../Data/Database");

const Validate=(request, res=response)=>{

    console.log(request.body.User,request.body.Password);

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
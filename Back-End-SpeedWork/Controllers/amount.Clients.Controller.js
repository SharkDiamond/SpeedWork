const {response}=require("express");

const {DataClientType}=require("../Data/Database");

const amountClients = (req,res)=>{

    const {Type} = req.body;

    console.log(Type);

    DataClientType(Type).then((Amount)=>{
        console.log("ejecutas");

        res.status(202).json({"amountClients":Amount.totalClients,"cancelClients":Amount.CanceledClients}).end();

   }).catch((error)=>{

       res.status(500).end();

       console.log(error);
   });

};

module.exports=amountClients;
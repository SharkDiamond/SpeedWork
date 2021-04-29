const {response}=require("express");
const SearhClient=require("../Data/Database");


const SearhClients= (req,res=response)=>{

    const {Tipo,dato,campo}=req.query;

    SearhClient(Tipo,dato,campo).then((result) => {

        res.status(200).json({"datos":result});

        res.end();

    });


}


module.exports=SearhClients;
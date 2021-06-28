const {response}=require("express");
const {searchClientData}=require("../Data/Database");


const SearchClients= (req,res=response)=>{

    const {Tipo,dato,campo}=req.body;

    let Hours = new Date();
    console.log("Search:",req.body,Hours);

    searchClientData(Tipo,dato,campo).then((results) => {

        if (results.length!=0 && results.length>0) {
            res.status(200).json({"Clients":results});
            res.end();
        }

        else{
            res.status(204);
            res.end();
        }

    }).catch((error)=>{
        console.log(error);
        res.status(400).end();
    }

    );

}


module.exports=SearchClients;
const {response}=require("express");

const DatosGeneral=(req,res=response)=>{
    

    res.json({
        msg:"get"

    });
    

}

module.exports=DatosGeneral;
const {request}=require("express");

const errorCatchGeneral=(error,res=request)=>{

    console.log(error);

    res.status(400).json({error});

};


const thenGeneral=()=>{




}



module.exports={errorCatchGeneral};
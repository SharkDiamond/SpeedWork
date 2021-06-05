const {createCommentary}=require("../Data/Database");
const {errorCatchGeneral}=require("../Helpers/ReduntCode");


const Commentary=(req,res)=>{

   const {comentario,reporte,usuario}=req.params;
    
   createCommentary(comentario,reporte,usuario).then((responde)=>{

        res.status(201).json(responde).end();

   }).catch(errorCatchGeneral);


}


module.exports={Commentary};


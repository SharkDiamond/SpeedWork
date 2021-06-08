const {createCommentary,returnComents}=require("../Data/Database");
const {errorCatchGeneral}=require("../Helpers/ReduntCode");


const Commentary=(req,res)=>{
   
   const {comentario,reporte,usuario}=req.body;
  
   createCommentary(comentario,reporte,usuario).then((responde)=>{
         
      res.status(201).json(responde).end();

   }).catch(errorCatchGeneral);
   
}


const commentarys=(req,res)=>{
   
   const {reporte}=req.params;
   
   let ids=parseInt(reporte);

   returnComents(ids).then((responde)=>{


      res.status(200).json(responde).end();



   }).catch(errorCatchGeneral);
         
     
}

module.exports={Commentary,commentarys};


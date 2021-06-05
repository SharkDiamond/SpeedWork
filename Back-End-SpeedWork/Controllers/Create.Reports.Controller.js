const {createReport}=require("../Data/Database");
const {errorCatchGeneral}=require("../Helpers/ReduntCode");

   const  ReportApi=(req,res)=>{

        const {idDepartment,nameReport}=req.params;


        createReport(nameReport,idDepartment).then((Respuesta) => {

           let fechaCreacion=new Date();

           console.log(`Report Create: ${nameReport} ${fechaCreacion}`);

           res.status(201).json({Respuesta}).end();

        }).catch(errorCatchGeneral);

   }


   module.exports={ReportApi};

const {returnReports,returnReport,OOCReport}=require("../Data/Database");
const {errorCatchGeneral}=require("../Helpers/ReduntCode");

const amountReports=(req,res)=>{

    const {idDepartments}=req.body;

    console.log("amountReports",idDepartments);

   
    returnReports(parseInt(idDepartments)).then((result)=>{

        console.log(result);

        res.status(200).json({resultado:result}).end();

    }).catch(errorCatchGeneral);


}

//FALTA HACERLE LA RUTA.......
const Report=async(req,res)=>{

    try {
        
        let {idReporte}=req.body;

        let valor=await returnReport(idReporte);

        res.status(200).json(valor).end();

    } catch (error) {
        
        errorCatchGeneral(error);


    }



}


const OpenOrClose=async(req,res)=>{

    try {
        
        let {cambia,reporte}=req.body;

        let valor=await OOCReport(cambia,reporte);

        if (valor) res.status(200).json(valor).end();  
      
        else res.status(404).end();  

    } catch (error) {
        
        errorCatchGeneral(error);


    }



}



module.exports={amountReports,Report,OpenOrClose};
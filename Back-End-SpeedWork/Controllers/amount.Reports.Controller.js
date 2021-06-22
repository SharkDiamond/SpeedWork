const {returnReports,returnReport}=require("../Data/Database");
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
        
        let {Id}=req.body;

        let valor=await returnReport(Id);

        res.status(200).json(valor).end();

    } catch (error) {
        
        errorCatchGeneral(error);


    }



}


module.exports={amountReports,Report};
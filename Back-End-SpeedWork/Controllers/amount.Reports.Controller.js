const {returnReports}=require("../Data/Database");
const {errorCatchGeneral}=require("../Helpers/ReduntCode");

const amountReports=(req,res)=>{

    const {idDepartment}=req.params;

    returnReports(parseInt(idDepartment)).then((result)=>{

        res.status(200).json({resultado:result}).end();

    }).catch(errorCatchGeneral);


}

module.exports={amountReports};
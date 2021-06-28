const {Router}=require("express");
const {check}=require("express-validator");
const {valideDepartamentExist,DepartamentExistId,validReport,validateUserExist}=require("../Helpers/valide");
const router=Router();
const {validateRequest}=require("../Middlewares/Validation");
const {amountReports,Report,OpenOrClose}=require("../Controllers/amount.Reports.Controller");


router.post("/Amount",[check("idDepartments").custom(DepartamentExistId),validateRequest],amountReports);



router.post("/Report",[check("idReporte").custom(validReport),validateRequest],Report);

router.post("/OpenOrCloseReport",[check("cambia",`El valor de 'cambia' tiene que ser boleano!`).isBoolean(),check("reporte").custom(validReport),validateRequest],OpenOrClose);


module.exports=router;


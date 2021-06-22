const {Router}=require("express");
const {check}=require("express-validator");
const {valideDepartamentExist,DepartamentExistId,validReport,validateUserExist}=require("../Helpers/valide");
const router=Router();
const {validateRequest}=require("../Middlewares/Validation");
const {amountReports}=require("../Controllers/amount.Reports.Controller");


router.post("/Amount",[check("idDepartments").custom(DepartamentExistId),validateRequest],amountReports);


module.exports=router;


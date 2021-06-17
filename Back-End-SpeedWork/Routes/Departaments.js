const {Router}=require("express");
const {check}=require("express-validator");

const {Departaments}=require("../Controllers/Create.Departaments.Controller");
const {ReportApi}=require("../Controllers/Create.Reports.Controller");
const {validateRequest}=require("../Middlewares/Validation");
const {valideDepartamentExist,DepartamentExistId,validReport,validateUserExist}=require("../Helpers/valide");
const {Commentary,commentarys}=require("../Controllers/Create.Commentary.Controller");
const {Lista}=require("../Controllers/ListDepartament.Controller");
const {amountReports}=require("../Controllers/amount.Reports.Controller");


const router=Router();

router.post("/:Departament",[check("Departament","Es necesario colocarle un nombre").not().isEmpty().custom(valideDepartamentExist),
validateRequest],Departaments);

router.post("/:idDepartment/:nameReport",[check("idDepartment").custom(DepartamentExistId),
check("nameReport","El nombre del reporte no puede estar vacio.").not().isEmpty(),validateRequest],ReportApi);


router.post("/",[
check("comentario","El comentario no puede venir vacio").not().isEmpty(),
check("reporte").custom(validReport),
check("usuario").custom(validateUserExist)
,validateRequest],Commentary);


router.get("/Comentarios/:reporte",[check("reporte").custom(validReport),validateRequest],commentarys);

router.post("/amountReports/:idDepartment",[check("idDepartment").custom(DepartamentExistId),validateRequest],amountReports);

router.get("/list",Lista);

module.exports=router;


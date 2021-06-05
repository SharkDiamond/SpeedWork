const {Router}=require("express");
const {check}=require("express-validator");

const {Departaments}=require("../Controllers/Create.Departaments.Controller");
const {ReportApi}=require("../Controllers/Create.Reports.Controller");
const {validateRequest}=require("../Middlewares/Validation");
const {valideDepartamentExist,DepartamentExistId,validReport}=require("../Helpers/valide");
const {Commentary}=require("../Controllers/Create.Commentary.Controller");

const router=Router();

router.post("/:Departament",[check("Departament","Es necesario colocarle un nombre").not().isEmpty().custom(valideDepartamentExist),
validateRequest],Departaments);

router.post("/:idDepartment/:nameReport",[check("idDepartment","El departamento indicado no es valido").custom(DepartamentExistId),
check("nameReport","El nombre del reporte no puede estar vacio.").not().isEmpty(),validateRequest],ReportApi);


router.post("/:Commentary/:reporte/:usuario",[check("Commentary","El comentario no puede venir vacio").not().isEmpty(),
check("reporte","El Reporte no es valido").custom(validReport),
,validateRequest],Commentary);


module.exports=router;


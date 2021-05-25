const {Router}=require("express");
const {check}=require("express-validator");
const {Departaments}=require("../Controllers/Create.Departaments.Controller");
const {validateRequest}=require("../Middlewares/Validation");
const {valideDepartamentExist}=require("../Helpers/valide");
const router=Router();

router.post("/:Departament",[check("Departament","Es necesario colocarle un nombre").not().isEmpty().custom(valideDepartamentExist),
validateRequest],Departaments);


module.exports=router;


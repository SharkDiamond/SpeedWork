const {Router}=require("express");
const {check}=require("express-validator");
const {Departaments}=require("../Controllers/Create.Departaments.Controller");
const {validateRequest}=require("../Middlewares/Validation");

const router=Router();

router.post("/Create/:Departament",[validateRequest],Departaments);


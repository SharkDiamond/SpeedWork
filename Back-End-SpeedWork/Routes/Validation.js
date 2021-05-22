const {Router}=require('express');
const Validate =require("../Controllers/Validate.Users.Controller");
const {check}=require("express-validator");
const {validateRequest}=require("../Middlewares/Validation");
const {validateUserExist}=require("../Helpers/valide");

const router=Router();

router.post('/',[
check("User","El nombre de usuario debe tener minimo 7 caracteres y maximo 10 caracteres.").isLength({min:7,max:11}).custom(validateUserExist),
check("Password","El password debe tener minimo 5 caracteres.").isLength({min:5}),
validateRequest
],Validate);


module.exports = router;


//
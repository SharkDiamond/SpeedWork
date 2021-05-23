const {Router}=require('express');
const Validate =require("../Controllers/Validate.Users.Controller");
const {check}=require("express-validator");
const {validateRequest}=require("../Middlewares/Validation");
const {validateUserExist}=require("../Helpers/valide");

const router=Router();

router.post('/',[
check("User").custom(validateUserExist),
check("Password","El password debe tener minimo 5 caracteres.").isLength({min:5}),
validateRequest
],Validate);


module.exports = router;


//
const {Router}=require('express');
const Validate =require("../Controllers/Validate.Users.Controller");
const {check}=require("express-validator");


const router=Router();

router.post('/',[check("User","El nombre de usuario debe tener minimo 7 caracteres.").isLength({min:7}),
check("Password","El password  debe tener minimo 5 caracteres.").isLength({min:5})],Validate);


module.exports = router;

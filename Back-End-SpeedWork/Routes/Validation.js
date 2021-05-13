const {Router}=require('express');
const Validate =require("../Controllers/Validate.Users.Controller");

const router=Router();

router.post('/',Validate);


module.exports = router;

const {Router}=require('express');
const DatosGeneral=require('../Controllers/General.Controller');

const router=Router();


//GET DATA
router.get('/',DatosGeneral);


module.exports=router;


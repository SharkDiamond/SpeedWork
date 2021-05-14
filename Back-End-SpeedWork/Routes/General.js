const {Router}=require('express');
const DatosGeneral=require('../Controllers/General.Controller');
const amountClients=require('../Controllers/amount.Clients.Controller');
const router=Router();



router.post('/',DatosGeneral);
router.post('/amount',amountClients);

module.exports=router;


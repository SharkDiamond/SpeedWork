const {Router}=require('express');
const {ReportsDay,GeneralPanel}=require('../Controllers/General.Controller');
const amountClients=require('../Controllers/amount.Clients.Controller');
const router=Router();


router.get('/Reportes',ReportsDay);

router.get("/GeneralData",GeneralPanel);

router.post('/amount',amountClients);

module.exports=router;


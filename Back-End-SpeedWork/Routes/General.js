const {Router}=require('express');
const {ReportsDay,GeneralPanel,amountData}=require('../Controllers/General.Controller');
const amountClients=require('../Controllers/amount.Clients.Controller');
const router=Router();


router.get('/Reportes',ReportsDay);

router.get("/GeneralData",GeneralPanel);

router.post('/amount',amountClients);

router.post("/MonthData",amountData)


module.exports=router;


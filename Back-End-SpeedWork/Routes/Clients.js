const {Router}=require('express');

const createClients=require('../Controllers/Create.Clients.Controller');
const SearhClients=require('../Controllers/Search.Clients.Controller');


const router=Router();


router.post("/",createClients);

router.get("/",SearhClients);



module.exports=router;
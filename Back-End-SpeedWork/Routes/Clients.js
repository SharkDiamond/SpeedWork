const {Router}=require('express');

const createClients=require('../Controllers/Create.Clients.Controller');
const SearchClients=require('../Controllers/Search.Clients.Controller');


const router=Router();


router.post("/create",createClients);

router.post("/search",SearchClients);



module.exports=router;
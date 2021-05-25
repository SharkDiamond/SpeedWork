const express = require('express');
const cors= require('cors');



class Server{

    constructor(){

        this.app=express();

        //Middlewares
        this.middlewares();

        this.routes();
        
    }


    middlewares(){

        this.app.use(express.static("public"));
        
       this.app.use(express.json());
        
        this.app.use(cors());
        
    }


    routes(){

        this.app.use("/Users",require("../Routes/Validation"));

        this.app.use("/General",require("../Routes/General"));

        this.app.use("/amountClients",require("../Routes/General"));

        this.app.use("/CreateClients",require("../Routes/Clients"));

        this.app.use("/SearchClients",require("../Routes/Clients"));

        this.app.use("/Departments",require("../Routes/Departaments"));

    } 

    Escuchar(){
        
       this.app.listen(8081);

    }

}


module.exports=Server;
const {response}=require("express");
const {CreateClient}=require("../Data/Database");

const createClients = (req,res=response)=>{

    const {Nombre,Apellido,Direccion,Telefono,Correo,Tipo}= req.body;

    CreateClient(Nombre,Apellido,Direccion,Telefono,Correo,Tipo).then((test)=>{
        if (test) res.status(201).end();
    }).catch((message)=>{
 res.end();console.log(message);
});

}

module.exports=createClients;
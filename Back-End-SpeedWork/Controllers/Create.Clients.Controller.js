const {response}=require("express");


const createClients = (req,res=response)=>{

const {Nombre,Apellido,Direccion,Telefono,Correo}=req.body;



res.status(201).json({create:true});


}

module.exports=createClients;
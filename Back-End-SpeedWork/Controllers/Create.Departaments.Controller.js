const {CreateDepartaments}=require("../Data/Database.js");



const Departaments=(req,res)=>{

    const {Departament}=req.params();

    CreateDepartaments(Departament).then((Respuesta) => {

        res.status(201).json({Respuesta}).end();

    }).catch((error)=>{

        console.log(error);

        res.status(400).json({error});

    });

}


module.exports = {Departaments};

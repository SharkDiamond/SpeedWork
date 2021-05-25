const {CreateDepartaments}=require("../Data/Database.js");



const Departaments=(req,res)=>{

    const {Departament}=req.params;

    console.log(Departament);

    CreateDepartaments(Departament).then((Respuesta) => {

         let fechaCreacion=new Date();

        console.log(`Create Departament: ${Departament} ${fechaCreacion}`);

        res.status(201).json({Respuesta}).end();

    }).catch((error)=>{

        console.log(error);

        res.status(400).json({error});

    });

}


module.exports = {Departaments};

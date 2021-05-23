//IMPORTS
const createClients=require('../Controllers/Create.Clients.Controller');
const SearchClients=require('../Controllers/Search.Clients.Controller');
const {check}=require('express-validator');
const {validateRequest}=require("../Middlewares/Validation");
const {Router}=require('express');

const router=Router();

router.post("/create",[
    check("Nombre","El nombre no puede estar vacio.").not().isEmpty().not().isNumeric().withMessage("El Nombre no puede contener solo numeros"),
    check("Apellido","El apellido no puede contener numeros o caracteres especiales.").isAlpha(),
    check("Direccion","La direccion no puede estar vacia").not().isEmpty(),
    check("Telefono","El campo telefono no puede estar vacio").not().isEmpty().isNumeric().withMessage("El telefono solo puede contener numeros"),
    check("Correo","El campo de email no puede estar vacio").not().isEmpty().isEmail().withMessage("El email ingresado no es valido"),
    check("Tipo","El tipo de cliente ingresado no es correcto").isIn(["Residencial","Comercial","VIP"]),validateRequest],createClients);

router.post("/search",[
    check("dato","No se puede enviar el dato de busqueda con un valor vacio").not().isEmpty(),
    check("Tipo","El tipo de dato ingresado no es valido.").isIn([1,2,3]),
    check("campo","El campo  ingresado no es valido.").isIn(["Nombre","Telefono","ID"])
    ,validateRequest],SearchClients);

module.exports=router;
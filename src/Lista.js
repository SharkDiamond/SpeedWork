
import React, { Component } from 'react';
import './App.css';
import axios from "axios";

export default class Lista extends Component  {
  
constructor(){

super();

this.state={


Datos:[]


}


}



   componentDidMount(){
axios.get("http://localhost:8080/restback/index.php/Peticion/ultimosReportes?format=json")
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


reportes:response.data


})


  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    alert(error);
  });


} 
    



render(){

  return (
 
   
<div className="fondoBarra col-4">

<form className="text-center mt-3">

<input type="text" placeholder="Buscar Departameto" className="mb-2 mt-2 mr-2"/>

<input type="submit" value="Buscar" />
</form>


<div className="bg-white  rounded p-1 text-center mt-3 mb-2">

<h1 className="d-inline mr-4 " >Instalaciones</h1>


<h1 className="d-inline fondoBarra  colorVerde rounded">30</h1>


</div>




</div>


  );

}


}








import React, { Component } from 'react';
import './App.css';
import axios from "axios";

export default class Reporte extends Component  {
  
constructor(){

super();

this.state={

FechaC:"",
Nombre:"",
Comentarios:[]



}

this.Peticion=this.Peticion.bind(this);

}



Peticion(Dato){



axios.post("http://localhost:8080/restback/index.php/Departamentos/TituloReporte",{IDentificador:Dato}).then((respuesta)=>{

//SI TODO SALE BIEN





respuesta.data.map((elemento)=>{

this.setState({

Nombre:elemento.NombreReporte,
FechaC:elemento.FechaCreacion


})


});

console.log(respuesta.data.NombreReporte);


}).catch((error)=>{

//SI OCURRE UN PROBLEMA

alert("problemas");
console.log(error);
});





}

componentDidUpdate(prevProps, prevState){

if (this.props.idbusqueda!==prevProps.idbusqueda) {

	this.Peticion(this.props.idbusqueda);
}





}



render(){



if (this.props.ver===true) {



  return (
 
   
<div className="fondoBarra rounded p-3">

<h1 className="mr-3" align="right" Style="color:white;">{this.state.FechaC}</h1>

<h1 className="display-4 text-primary mb-4" align="center">{this.state.Nombre}</h1>




<div className="fondoBarra p-3 rounded">

<textarea name="message" rows="5" cols="90"  className="ml-3"></textarea>
<button className="btn bg-white ml-3 mt-2" >Enviar</button>
</div>

</div>


  );


}


if (this.props.ver===false) {



  return (
 
   
<div className="d-none">



</div>


  );


}



}


}

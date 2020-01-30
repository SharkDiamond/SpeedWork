
import React, { Component } from 'react';
import './App.css';
import axios from "axios";

export default class Reporte extends Component  {
  
constructor(){

super();

this.state={

FechaCreacion:"",
Nombre:"",
Comentarios:[]



}



}








render(){



if (this.props.ver===true) {



  return (
 
   
<div className="fondoBarra rounded p-3">

<h1 className="mr-3" align="right" Style="color:orange;">{this.state.FechaCreacion}</h1>

<h1 className="display-4 text-primary mb-4" align="center">{this.state.Nombre}</h1>


{
  //ALGORITMO PARA MOSTRAR TODOS LOS COMENTARIOS DEL REPORTE
this.state.Comentarios.map((Elemento,indice)=>{
return(

<div className="bg-white mb-3  rounded pt-3 pl-3 pr-3" key={indice}>
<h1 className="h4">{Elemento.comentario}</h1>
<p className="font-weight-bold pb-2 mr-3" align="right">{Elemento.NombreUsuario}<span Style="color: #26926b ;">{Elemento.fechacomentario}</span></p>
</div>

)

}


)

}



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

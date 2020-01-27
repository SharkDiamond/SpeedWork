
import React, { Component } from 'react';
import './App.css';
import axios from "axios";

export default class Reporte extends Component  {
  
constructor(){

super();

this.state={



}



}








render(){



if (this.props.ver===true) {



  return (
 
   
<div className="fondoBarra rounded p-3">

<h1 className="mr-3" align="right" Style="color:orange;">17-7-1999</h1>

<h1 className="display-4 text-primary mb-4" align="center">REPORTE {this.props.idbusqueda}</h1>



<div className="bg-white mb-3  rounded pt-3 pl-3 pr-3 ">


<h1 className="h4">Los Tiburones de La Guaira son un equipo de béisbol venezolano perteneciente a la Liga Venezolana de Béisbol Profesional.</h1>
<p className="font-weight-bold pb-2 mr-3" align="right">Gabriel Arispe  <span Style="color: #26926b ;">17-6-2006</span></p>

</div>

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

import React, { Component } from 'react';

import axios from "axios";
import Lista from "./Lista";

export default class Departametos extends Component {


constructor(){


super();



this.state={

Datos:[],
t:1

}


}



actualiza=(DepartamentoNombre)=>{

console.log(DepartamentoNombre);


axios.post("http://localhost:8080/restback/index.php/Departamentos/EnviarDatos",{numero:DepartamentoNombre}).then((respuesta)=>{

//SI TODO SALE BIEN


this.setState({

Datos:respuesta.data


})



}).catch((error)=>{

//SI OCURRE UN PROBLEMA

alert("problemas");
console.log(error);
});




}
  
    render() {

return (

            <div className="container-fluid ">


<div className="row m-3" >


<div className="col-8 ">

<table class="table fondoBarra">
  <thead>
    <tr>
      <th scope="col" className="text-white">ID</th>
      <th scope="col" className="text-white">Nombre</th>
      <th scope="col" className="text-white">Fecha De Creacion</th>
      <th scope="col" className="text-white">Cliente</th>
    </tr>
  </thead>
   <tbody>
  {
this.state.Datos.map((Elemento)=>{

return(
 
    <tr key={Elemento.Id}>
      <th scope="row" Style="color:orange;">{Elemento.idReporte}<button className="btn btn-outline-success ml-1">Ver</button></th>
 
      <td className="text-primary align-middle">{Elemento.NombreReporte}</td>
      <td className="text-primary align-middle">{Elemento.FechaCreacion}</td>
      <td className="text-primary align-middle">{Elemento.RfCliente}</td>
   
    </tr>
 
)

})

  }
   </tbody>
</table>



</div>




<Lista actualizatabla={this.actualiza}/>









</div>


            </div>
      

      )  
    }




}
   

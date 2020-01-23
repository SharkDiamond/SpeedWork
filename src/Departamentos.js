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
      <th scope="col" className="text-white">Fecha</th>
      <th scope="col" className="text-white">Cliente</th>
    </tr>
  </thead>
  {
this.state.Datos.map((Elemento)=>{

return(
  <tbody key={Elemento.Id}>
    <tr>
      <th scope="row" Style="color:orange;">{Elemento.idReporte}</th>
      <td className="text-primary">{Elemento.NombreReporte}</td>
      <td className="text-primary">{Elemento.FechaCreacion}</td>
      <td className="text-primary">{Elemento.RfCliente}</td>
    </tr>
  </tbody>
)

})

  }
</table>



</div>




<Lista actualizatabla={this.actualiza}/>









</div>


            </div>
      

      )  
    }




}
   

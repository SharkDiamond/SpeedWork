import React, { Component } from 'react';

import axios from "axios";
import Lista from "./Lista";

export default class Departametos extends Component {


constructor(){


super();



this.state={

Datos:[]

}

this.actualiza=this.actualiza.bind(this);
}


//ACTUALIZAR LA TABLA 
actualiza(etiqueta){

/*

axios.post("http://localhost:8080/restback/index.php/Peticion/ultimosReportes?format=json",{Departamento:etiqueta.target.id})
.then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


Datos:response.data


})


  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    alert(error);
  });

*/
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
  <tbody>
    <tr>
      <th scope="row" Style="color:orange;">{Elemento.Id}</th>
      <td className="text-primary">{Elemento.Nombre}</td>
      <td className="text-primary">{Elemento.Fecha}</td>
      <td className="text-primary">{Elemento.Cliente}</td>
    </tr>
  </tbody>
)

})

  }
</table>



</div>




<Lista actualizatabla={this.actualiza()}/>









</div>


            </div>
      

      )  
    }




}
   

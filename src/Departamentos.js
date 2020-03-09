import React, { Component } from 'react';
//IMPORTACIONES DE COMPONENTES Y HERRAMIENTAS
import axios from "axios";
import Lista from "./Lista";
import Reporte from "./Reporte";
import Barra from "./Barra";

export default class Departametos extends Component {


constructor(){


super();



this.state={

Datos:[],
t:1,
ClaseTabla:"table fondoBarra",
VerReporte:false,
REPORTEID:null

}


}


MostrarReporte=(e)=>{

this.setState({

ClaseTabla:"d-none",
REPORTEID:e.target.id,
VerReporte:true
})





}



actualiza=(DepartamentoNombre)=>{

console.log(DepartamentoNombre);


axios.post("http://localhost:8080/restback/index.php/Departamentos/EnviarDatos",{numero:DepartamentoNombre}).then((respuesta)=>{

//SI TODO SALE BIEN


this.setState({

Datos:respuesta.data,
ClaseTabla:"table fondoBarra",
VerReporte:false



})



}).catch((error)=>{

//SI OCURRE UN PROBLEMA

alert("problemas");
console.log(error);
});




}

    render() {


if (localStorage.getItem("Usuario")) {

  return (

              <div className="container-fluid">
  <Barra />


        <br/>

        <br/>

        <br/>

        <br/>

        <br/>

        <br/>

        <br/>


  <div className="row m-3" >


  <div className="col-8 ">

  <table class={this.state.ClaseTabla} id="Tabla">
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
        <th scope="row" Style="color:orange;">{Elemento.idReporte}<button className="btn btn-outline-success ml-1" id={Elemento.idReporte} onClick={this.MostrarReporte}>Ver</button></th>

        <td className="text-primary align-middle">{Elemento.NombreReporte}</td>
        <td className="text-primary align-middle">{Elemento.FechaCreacion}</td>
        <td className="text-primary align-middle">{Elemento.RfCliente}</td>

      </tr>

  )

  })

    }
     </tbody>
  </table>

  <Reporte ver={this.state.VerReporte} idbusqueda={this.state.REPORTEID}/>


  </div>




  <Lista actualizatabla={this.actualiza}/>









  </div>


              </div>


        )



}


if (localStorage.getItem("Usuario")==undefined) {

return(
<div>


<h1 className="text-center font-weight-bold display-1">Pagina No Encontrada</h1>



</div>



)



}



    }




}

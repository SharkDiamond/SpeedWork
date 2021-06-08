import React, { Component } from 'react';
//IMPORTACIONES DE COMPONENTES Y HERRAMIENTAS
import axios from "axios";
import Lista from "./Lista";
import Reporte from "./Reporte";
import Barra from "./Barra";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

export default class Departametos extends Component {



constructor(){

toast.configure();

super();

if (window.location.href!=="http://localhost:3000/Departamentos/data") {
  
  let paramentros=window.location.hash;
  

const Ids=this.buscarNumeros(paramentros);


  this.state={

    Datos:[],
    t:1,
    ClaseTabla:"table fondoBarra",
    VerReporte:false,
    DepartamentoID:null,
    REPORTEID:null,
    
    
    }



  


  if (Ids[1]==10000000000){
    

    this.state={

      Datos:[],
      t:1,
      ClaseTabla:"table fondoBarra",
      VerReporte:false,
      DepartamentoID:null,
      REPORTEID:null,
      
      
      }
    
    this.actualiza(Ids[0]);


    
    
  }
  
  
  else{
    
    
    this.state={

      Datos:[],
      t:1,
      ClaseTabla:"d-none",
      VerReporte:true,
      DepartamentoID:null,
      REPORTEID:Ids[1],
      
      
      }
   
   
}

}


else{


  this.state={

    Datos:[],
    t:1,
    ClaseTabla:"table fondoBarra",
    VerReporte:false,
    DepartamentoID:null,
    REPORTEID:null,
    
    
    }


}
this.buscarNumeros=this.buscarNumeros.bind(this);
this.actualiza=this.actualiza.bind(this);
this.MostrarReporte=this.MostrarReporte.bind(this);
this.MostrarReporte2=this.MostrarReporte2.bind(this);


}


MostrarReporte=(e)=>{

this.setState({

ClaseTabla:"d-none",
REPORTEID:e.target.id,
VerReporte:true
});

}



MostrarReporte2=(e)=>{

  this.setState({
  
  ClaseTabla:"d-none",
  REPORTEID:e,
  VerReporte:true
  });
  
  }
  



buscarNumeros=(cadena)=>{


  let dato1="";
  let dato2="";

  let partir=0;
  
  let contadorHash=0;

  for (let index = 1; index < cadena.length; index++) {
    
        
    if (cadena[index]!=="#") {
      
      dato1=dato1+cadena[index];
    
    
    }
    
    else{
      
      contadorHash++;


      partir=index;


      break;
      
  
    }
  
  
    
  }
  
  if (contadorHash==0) dato2=10000000000;

  else if (contadorHash==1) dato2=cadena.slice(partir+1,cadena.length);

console.log("Cantidad de simbolo",contadorHash);


 let ids=[parseInt(dato1),parseInt(dato2)];


return ids;


}

actualiza=(DepartamentoNombre)=>{

console.log("ID",DepartamentoNombre);


axios.post("http://localhost:8080/restback/index.php/Departamentos/EnviarDatos",{numero:DepartamentoNombre}).then((respuesta)=>{

//SI TODO SALE BIEN


this.setState({

Datos:respuesta.data,
ClaseTabla:"table fondoBarra",
VerReporte:false



})



}).catch((error)=>{

//SI OCURRE UN PROBLEMA


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
        <th scope="row" Style="color:orange;">{Elemento.idReporte}<Link to={"#"+Elemento.PertenenciaDepartamento+"#"+Elemento.idReporte}><button className="btn btn-outline-success ml-1" id={Elemento.idReporte} onClick={this.MostrarReporte}>Ver</button></Link></th>

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

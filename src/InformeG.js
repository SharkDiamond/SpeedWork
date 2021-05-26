import React, { Component } from 'react'
import './App.css';
import MD from "./MD.js";
import axios from "axios";
import Grafica from "./Grafica";
export default class InformeG extends Component {


  constructor(){

    super();

  this.state={
    
    Clientes:"Cantidad De Clientes",
    Reportes:"Cantidad De Reportes",
    Visitas:"Cantidad De Visitas",
    mostrar:0,
    Meses:null

}

    }


  //Funcion Que hace la peticion y asigna los valores cuando se entra en el informe para ver los datos
  entra=()=>{

   axios.get('http://localhost:8080/restback/index.php/Peticion/General?format=json').then((response) => {
    
   //RESPUESTA SI TODO SALE BIEN

  this.setState({

    Clientes:response.data.CLIENTES,
    Reportes:response.data.REPORTES,
    Visitas:response.data.VISITAS

})



  }).catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

  console.log(error);
  alert(error);


  });




        }

  //Funcion que deja los valores de fabrica cuando se sale del informe para ver los datos
  sale=()=>{


    this.setState({

      Clientes:"Cantidad De Clientes",
      Reportes:"Cantidad De Reportes",
      Visitas:"Cantidad De Visitas"

                });


  }

  //Funcion que se activa cuando se le da click al panel del general para mostrar los datos
  cambia=(p)=>{

    const retornaid=p.target.id;


    const mes=["","ClientesEnMes","ReportesEnMes","VisitasEnMes"];


    axios.get("http://localhost:8080/restback/index.php/Peticion/" + mes[retornaid] + "?format=json").then((response) => {
    
    //RESPUESTA SI TODO SALE BIEN

      this.setState({

        mostrar:retornaid,
        Meses:response.data

});

    console.table(this.state.Meses);

  })
  .catch((error) => {

    //RESPUESTA SI HAY ALGUN ERROR
    console.log(error);
    alert(error);

  });


}



  Vuelve=(etiqueta)=>{
  
    const retornaId=etiqueta.target.id;


    this.setState({

      mostrar:retornaId

});


}


  componentDidMount(){


/*
   axios.get('http://localhost:8080/restback/index.php/Peticion/i?format=json')
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({

Clientes:response.data.a

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


    if (this.state.mostrar==0) {

      return (

        <div className="container fondoBarra  rounded text-center p-4" onClick={this.entra} onMouseOut={this.sale}>

        <h1 className="letra1 display-4  d-inline font-weight-bold" onClick={this.cambia} id={1}>{this.state.Clientes}</h1>
        <br/>
        <br/>
        <h1 className="letra1 display-4  d-inline font-weight-bold" onClick={this.cambia} id={2}>{this.state.Reportes}</h1>
        <br/>
        <br/>
        <h1 className="letra1 display-4  d-inline font-weight-bold" onClick={this.cambia} id={3}>{this.state.Visitas}</h1>
        
        </div>
        
        )
    }


    else if(this.state.mostrar!==0){

      return(

        <div className="container-fluid fondoBarra  rounded text-center p-2">

      <Grafica/>


        </div>

    )



}


    }
}

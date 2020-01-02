import React, { Component } from 'react';
import dia from "./imagenes/dia.png";



export default class Miniperfil extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
   numero:null,
   nombre:"",
Direccion:""
    }
    
    
    }
    
imprime=()=>{

this.props.datos.map((e)=>{

this.setState({

numero:e.Telefono,
nombre:e.Nombre,
Direccion:e.Direccion


})



});






}



componentDidMount(){


this.props.datos.map((e)=>{

this.setState({


numero:e.Telefono,
nombre:e.Nombre,
Direccion:e.Direccion



})



});

  
}

   
    render() {

return (

            <div className="" align="center">

<div class="card  mb-3 minip bg-white" >
  <div class="card-header bg-transparent border-primary"><h3 className="font-weight-bold">{this.state.Nombre}</h3></div>
  <div class="card-body text-success">
    <h5 class="card-title font-weight-bold text-primary" onClick={this.imprime}>Numeros De Telefono</h5>
    <p class="card-text text-dark font-weight-bold" >{this.state.Telefono}</p>
      <h5 class="card-title font-weight-bold text-primary">Direccion</h5>
    <p class="card-text text-dark font-weight-bold">{this.state.Direccion}</p>

  </div>
 
</div>
            </div>
      

      )  
    }




}
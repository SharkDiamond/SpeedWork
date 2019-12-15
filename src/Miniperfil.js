import React, { Component } from 'react';
import dia from "./imagenes/dia.png";



export default class Miniperfil extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
   

    }
    
    
    }
    


   
    render() {

return (

            <div className="m-2" align="center">

<div class="card  mb-3 minip bg-white" >
  <div class="card-header bg-transparent border-primary"><h3 className="font-weight-bold">Medical Cannabis</h3></div>
  <div class="card-body text-success">
    <h5 class="card-title font-weight-bold text-primary">Numeros De Telefono</h5>
    <p class="card-text text-dark font-weight-bold">7876551919 / 7875122659</p>
      <h5 class="card-title font-weight-bold text-primary">Direccion</h5>
    <p class="card-text text-dark font-weight-bold">Cale carvajal sector centro</p>

  </div>
 
</div>
            </div>
      

      )  
    }




}
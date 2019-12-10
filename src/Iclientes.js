import React, { Component } from 'react';
import dia from "./imagenes/dia.png";



export default class Iclientes extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
    

    }
    
    
    }
    


   
    render() {

return (

            <div className="mb-4 container">


<div className="row fondoBarra rounded">

<div className="col-12 ">  


<h1 className="text-white letra1 p-2 text-center">{this.props.Titulo}</h1>

<form className="mb-1 mt-1 text-center">


<input type="text" placeholder="Nombre o ID"/> 

<br/>

<input type="submit" placeholder="Buscar" value="Buscar" className="mt-3 bg-success btn"/>



</form>


<h1 className="text-white letra1 h1 text-center">{this.props.Cantidad}</h1>






</div>







</div>


            </div>
      

      )  
    }




}
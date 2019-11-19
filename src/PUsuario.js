import React, { Component } from 'react'
import './App.css';

import user from "./user.png";





export default class PUsuario extends Component {
   
 

constructor(){
super();

this.state={


Ver:"d-none"

}


}


   
Entra=()=>{

    this.setState({
Ver:""

    })


}

Sale=()=>{


  this.setState({
    Ver:"d-none"

    })




}


   
    render() {

const Elemento=(

<div className={this.state.Ver}>
<p className="h1 cambialista text-success">Gabriel Arispe</p>

<a href="https://www.youtube.com/watch?v=1GtZbkvCZfM"><p className="h4 cambialista">Cambiar Datos</p></a>

<a><p className="h4 cambialista text-danger">Cerrar Sesion</p></a>

<button className="btn fondoB" onClick={this.Sale}>Ocultar</button>
<br/>

</div>
  
            


);


return (


<div className="fondoBarra container rounded p-2 text-center container" >
      
<img src={user} onClick={this.Entra}  width="102px"  height="102px" className="text-center"/>

 
{Elemento}


            </div>

    )








           
    }

}

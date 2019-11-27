import React, { Component } from 'react'
import './App.css';

import user from "./user.png";





export default class PUsuario extends Component {
   
 

constructor(){
super();

this.state={



animacion:"pequeño fondoBarra  rounded p-2 text-center container",
Ver:"d-none"
}


}


   
actualiza=()=>{

    this.setState({

Ver:""

    })


}


Entra=()=>{

    this.setState({

animacion:"grande fondoBarra  rounded p-2 text-center container"
    })


setTimeout(this.actualiza, 50);


}

Sale=()=>{


  this.setState({
    Ver:"d-none",
animacion:"pequeño fondoBarra  rounded p-2 text-center container"
    })




}


   
    render() {

const Elemento=(

<div className={this.state.Ver}>
<p className="h1 cambialista text-success">Gabriel Arispe</p>

<a href="https://www.youtube.com/watch?v=1GtZbkvCZfM"><p className="h4 cambialista">Cambiar Datos</p></a>

<a><p className="h4 cambialista text-danger">Cerrar Sesion</p></a>

<button className="btn fondoB bg-white" onClick={this.Sale}>Ocultar</button>
<br/>

</div>
  
            


);


return (


<div className={this.state.animacion}>
      



<img src={user} onClick={this.Entra}  width="102px"  height="102px" className="text-center"/>

 
{Elemento}

            </div>

    )








           
    }

}

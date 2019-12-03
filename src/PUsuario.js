import React, { Component } from 'react'
import './App.css';

import user from "./user.png";





export default class PUsuario extends Component {
   
 

constructor(){
super();

this.state={



animacion:"pequeño fondoBarra  rounded p-2 text-center container",
Ver:"d-none",
ov:false
}


}



actualiza=()=>{

    this.setState({

Ver:""

    })
    }
    


Mostrar=()=>{


if (this.state.ov==false) {


this.setState({


ov:true,
animacion:"grande fondoBarra  rounded p-2 text-center container"



})


setTimeout(this.actualiza, 50);

}

else if (this.state.ov==true) {


this.setState({


ov:false,
animacion:"pequeño fondoBarra  rounded p-2 text-center container",
Ver:"d-none"

})


}

}

   
    render() {

const Elemento=(

<div className={this.state.Ver}>
<p className="h1 cambialista text-success">Gabriel Arispe</p>

<a href="https://www.youtube.com/watch?v=1GtZbkvCZfM"><p className="h4 cambialista">Cambiar Datos</p></a>

<a><p className="h4 cambialista text-danger">Cerrar Sesion</p></a>

</div>
  
            


);


return (

<div className={this.state.animacion}>
      



<img src={user} onClick={this.Mostrar}  width="102px"  height="102px" className="text-center"/>

 
{Elemento}

            </div>

    )
      
    }

}

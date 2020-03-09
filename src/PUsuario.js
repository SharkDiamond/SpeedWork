import React, { Component } from 'react';
import './App.css';

import user from "./imagenes/user.png";
import {Redirect} from "react-router-dom";




export default class PUsuario extends Component {



constructor(){
super();

this.state={



animacion:"pequeño fondoBarra  rounded p-2 text-center container",
Ver:"d-none",
ov:false,
salir:false
}


}



actualiza=()=>{

    this.setState({

Ver:""

    })
    }



Mostrar=()=>{


if (this.state.ov===false) {


this.setState({


ov:true,
animacion:"grande fondoBarra  rounded p-2 text-center container"



})


setTimeout(this.actualiza, 50);

}

else if (this.state.ov===true) {


this.setState({


ov:false,
animacion:"pequeño fondoBarra  rounded p-2 text-center container",
Ver:"d-none"

})


}

}


CerrarSesion=()=>{

  localStorage.removeItem("Usuario");

this.setState({

salir:true


})

}


    render() {

const Elemento=(

<div className={this.state.Ver}>

<p className="h1  text-success font-weight-bold mt-3">{localStorage.getItem("Usuario")}</p>
<button className="btn btn-danger" onClick={this.CerrarSesion}>Cerrar Sesion</button>
</div>




);



if (this.state.salir) {


return(

<div>
<Redirect to="/"/>

</div>



)



}




return (

<div className={this.state.animacion}>




<img src={user} onClick={this.Mostrar} alt=""  width="102px"  height="102px" className="text-center"/>


{Elemento}

            </div>

    )

    }

}

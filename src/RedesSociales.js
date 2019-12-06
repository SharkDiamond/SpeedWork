import React, { Component } from 'react';
import "./App.css";
import colaboracion from "./imagenes/colaboracion.png";       
import facebook from "./imagenes/facebook.png";
import instagram from "./imagenes/instagram.png";
import gorjeo from "./imagenes/gorjeo.png";

export default class RedesSociales extends Component {
 

constructor(){
super();

this.state={



animacion:"text-center",
ver:"d-none",
ov:false
}


}




actualiza=()=>{


    this.setState({

animacion:""

    })



}


Gira=()=>{

if (this.state.ov==false) {

 this.setState({

animacion:"text-center girar",
ver:"",
ov:true


    })


}

else if (this.state.ov==true) {

this.setState({

animacion:"alreves",
ver:"d-none",
ov:false

    })


}


}





    render() {

const ICONOS=(
<div className={this.state.ver}>

<a href="https://www.facebook.com/"><img src={facebook}  width="60px"  height="60px" className="mt-1"/></a>


<a href=""><img src={instagram}  width="60px"  height="60px" className="mt-2"/></a>

<a href=""><img src={gorjeo}   width="60px"  height="60px" className="mt-2 mb-1"/></a>

</div>
	);


        return (
            <div className="fondoBarra  rounded p-2 text-center container">
       

<img src={colaboracion}  onClick={this.Gira} width="74px"  height="74px" className={this.state.animacion}/>

 {ICONOS}


            </div>
        )
    }
}

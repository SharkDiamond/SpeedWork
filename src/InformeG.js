import React, { Component } from 'react'
import './App.css';
import MD from "./MD.js";
import axios from "axios";

export default class InformeG extends Component {
    
    
    constructor(){
super();

this.state={
Clientes:"Cantidad De Clientes",
Reportes:"Cantidad De Reportes",
Visitas:"Cantidad De Visitas",
mostrar:0


}



    }
 entra=()=>{



   axios.get('http://localhost:8080/restback/index.php/Peticion/i?format=json')
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({

Clientes:response.data.a,
 Reportes:response.data.b,
Visitas:response.data.c

})



  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    alert(error);
  });

        
        
        
        }
    
    
        sale=()=>{


            this.setState({
            
Clientes:"Cantidad De Clientes",
Reportes:"Cantidad De Reportes",
Visitas:"Cantidad De Visitas"


                
                })
            
            
            }
        
cambia=(p)=>{

    const retornaid=p.target.id;

this.setState({


mostrar:retornaid


})


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
    

else if(this.state.mostrar!=0){

    return(

<div className="container fondoBarra  rounded text-center p-4">


<MD muestra={this.state.mostrar} enviaFuncion={this.cambia}/>

</div>

    )



}





    }
}

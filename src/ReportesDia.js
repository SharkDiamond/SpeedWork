import React, { Component } from 'react';
import dia from "./imagenes/dia.png";
import axios from "axios";



export default class ReportesDia extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
    
    anima:"pequeño container fondoBarra  rounded text-center p-2",
    Ver:"d-none",
    ov:false,
    reportes:"Nada Al Momento"
    
    }
    
    
    }
    


actualiza=()=>{

    this.setState({

Ver:""

    })
    }
    
       
    componentDidMount(){
axios.get("http://localhost:8080/restback/index.php/Peticion/ultimosReportes?format=json")
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


reportes:response.data


})


  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

   
    alert(error);
  });


} 
    
    
   Mostrar=()=>{


if (this.state.ov===false) {

axios.get("http://localhost:8080/restback/index.php/Peticion/ultimosReportes?format=json")
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


ov:true,
anima:"grande fondoBarra  rounded p-2  text-center container",
reportes:response.data


})


  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    
    alert(error);
  });



setTimeout(this.actualiza, 80);

}

else if (this.state.ov===true) {


this.setState({


ov:false,
anima:"pequeño fondoBarra  rounded p-2 text-center container",
Ver:"d-none"

})


}

  } 
   
    render() {


        const Elemento=(

            <div className={this.state.Ver}>
            <p className="h1 cambialista colorVerde font-weight-bold">Reportes Del Dia</p>
            
           <ul className="text-white font-weight-bold">
<li>{this.state.reportes.Primero}</li>
<li>{this.state.reportes.Segundo}</li>
<li>{this.state.reportes.Tercero}</li>
           </ul>   
            </div>
              
                        
            
            
            );
            


        return (
            <div className={this.state.anima}>
                
                      
<img src={dia} onClick={this.Mostrar}  width="102px" alt="" height="102px" className=""/>

 
{Elemento}


            </div>
        )
    }
}

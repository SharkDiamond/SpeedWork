import React, { Component } from 'react'
import dia from "./dia.png";
export default class ReportesDia extends Component {
   
   
   

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
            <p className="h1 cambialista text-warning">Reportes Del Dia</p>
            
           
            <button className="btn fondoB" onClick={this.Sale}>Ocultar</button>
            <br/>
            
            </div>
              
                        
            
            
            );
            


        return (
            <div className="container fondoBarra  rounded text-center p-2">
                
                      
<img src={dia} onClick={this.Entra}  width="102px"  height="102px" className="text-center"/>

 
{Elemento}


            </div>
        )
    }
}

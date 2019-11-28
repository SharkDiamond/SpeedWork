import React, { Component } from 'react'
import dia from "./dia.png";
export default class ReportesDia extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
    
    anima:"pequeño container fondoBarra  rounded text-center p-2",
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
       anima:"grande container fondoBarra  rounded text-center p-2",

        })
    
setTimeout(this.actualiza, 50);

    
    }
    
    Sale=()=>{
    
    
      this.setState({
          anima:"pequeño container fondoBarra  rounded text-center p-2",
        Ver:"d-none"
    
        })
    
    
    
    
    }
    
    
   
   
   
    render() {


        const Elemento=(

            <div className={this.state.Ver}>
            <p className="h1 cambialista text-warning">Reportes Del Dia</p>
            
           <ol className="colorlista">
<li>Visitas Naguabo</li>
<li>Instalacion Nuevo Orden</li>
<li>Desintalacion en el Hatillo</li>
           </ol>
            <button className="btn fondoB bg-white" onClick={this.Sale}>Ocultar</button>
            <br/>
            
            </div>
              
                        
            
            
            );
            


        return (
            <div className={this.state.anima}>
                
                      
<img src={dia} onClick={this.Entra}  width="102px"  height="102px" className="text-center"/>

 
{Elemento}


            </div>
        )
    }
}

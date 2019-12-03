import React, { Component } from 'react'
import dia from "./dia.png";
export default class ReportesDia extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
    
    anima:"pequeño container fondoBarra  rounded text-center p-2",
    Ver:"d-none",
    ov:false
    
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
    
    
   Mostrar=()=>{


if (this.state.ov==false) {


this.setState({


ov:true,
anima:"grande fondoBarra  rounded p-2 text-center container"



})


setTimeout(this.actualiza, 50);

}

else if (this.state.ov==true) {


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
            <p className="h1 cambialista text-warning">Reportes Del Dia</p>
            
           <ol className="colorlista">
<li>Visitas Naguabo</li>
<li>Instalacion Nuevo Orden</li>
<li>Desintalacion en el Hatillo</li>
           </ol>   
            </div>
              
                        
            
            
            );
            


        return (
            <div className={this.state.anima}>
                
                      
<img src={dia} onClick={this.Mostrar}  width="102px"  height="102px" className=""/>

 
{Elemento}


            </div>
        )
    }
}

import React, { Component } from 'react'
import './App.css';
export default class InformeG extends Component {
    
    
    constructor(){
super();

this.state={
Clientes:"Cantidad De Clientes",
Reportes:"Cantidad De Reportes",
Visitas:"Cantidad De visitas"


}



    }
    entra=()=>{


        this.setState({
        
            Clientes:12,
            Reportes:23,
            Visitas:59
            
            
            })
        
        
        }
    
    
        sale=()=>{


            this.setState({
            
Clientes:"Cantidad De Clientes",
Reportes:"Cantidad De Reportes",
Visitas:"Cantidad De visitas"


                
                })
            
            
            }
        




    render() {
        return (
            <div className="container fondoBarra  rounded text-center p-4" onMouseEnter={this.entra} onMouseOut={this.sale}>
                

<h1 className=" letra1 display-4  d-inline font-weight-bold">{this.state.Clientes}</h1>
<br/>
<br/>
<h1 className="letra1 display-4  d-inline font-weight-bold">{this.state.Reportes}</h1>
<br/>
<br/>
<h1 className="letra1 display-4  d-inline font-weight-bold">{this.state.Visitas}</h1>
            </div>
        )
    }
}

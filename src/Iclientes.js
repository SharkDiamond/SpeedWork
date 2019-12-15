import React, { Component } from 'react';
import dia from "./imagenes/dia.png";



export default class Iclientes extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
    eleccion:"ID"

    }
    
    
    }
    

cambia=(etiqueta)=>{

this.setState({


eleccion:etiqueta.target.value

})


}
   
    render() {

return (

            <div className="mb-4 container">


<div className="row fondoBarra rounded">

<div className="col-12 ">  


<h1 className="text-white letra1 p-2 text-center font-weight-bold" onClick={this.props.pasafuncion}>{this.props.Titulo}</h1>

<form className="mb-1 mt-1 text-center">


<input type="text" placeholder={this.state.eleccion}/> 
<br/>
<br/>
<select className="seleccion" onClick={this.cambia} >
<option value="ID">ID</option>

<option value="Nombre">Nombre</option>

<option value="Telefono">Telefono</option>
</select>



<br/>

<input type="submit" placeholder="Buscar" value="Buscar" className="mt-3 bg-success btn" onClick={this.props.pasafuncion}/>

</form>


<h1 className="text-white letra1 h1 text-center">{this.props.Cantidad}</h1>






</div>







</div>


            </div>
      

      )  
    }




}
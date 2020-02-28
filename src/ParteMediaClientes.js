import React, { Component } from "react";
import axios from "axios";
import './App.css';


export default class ParteMediaClientes extends Component {
   

constructor(){
super();

this.state={
Nombre:"",
Apellido:"",
Telefono:"",
Direccion:"",
Correo:"",
tipoCliente:"Residencial"


}


}


FiltroCliente=(e)=>{

var valor=e.target.value;


this.setState({


tipoCliente:valor

})

console.log(this.state.tipoCliente);

}


Formularios=(e)=>{

var valor=e.target.value;


this.setState({


[e.target.name]:e.target.value

})


console.log(this.state.Nombre);
console.log(this.state.Apellido);
console.log(this.state.Correo);
console.log(this.state.Direccion);
console.log(this.state.Telefono);
}


enviar= async (e) =>{

e.preventDefault();

await axios.post("http://localhost:8080/restback/index.php/Clientes/crearclientes",
{Nombre:this.state.Nombre,
Apellido:this.state.Apellido,
Correo:this.state.Correo,
Direccion:this.state.Direccion,
Telefono:this.state.Telefono,
Tipo:this.state.tipoCliente
}).then((respuesta)=>{




alert("todo salio bien");



}  ).catch(()=>{


alert("Problemas");


}


);

}


render(){
if (this.props.crearOver==true) {

return(
<div>
<form className="text-center" onSubmit={this.enviar}>
<h1 className="colorVerde font-weight-bold">Clientes</h1>

<div className="form-row">

<div className="col">
<input type="text"  placeholder="Nombre" name="Nombre" onChange={this.Formularios} required />
<input type="text"  placeholder="Direccion Fisica" name="Direccion" className="mt-2" onChange={this.Formularios} required />
<input type="email"  placeholder="Correo Electronico" name="Correo" className="mt-2" onChange={this.Formularios} required />
</div>

<div className="col">
<input type="text"  placeholder="Apellido" name="Apellido" onChange={this.Formularios}/>
<input type="tel"  placeholder="Telefono" name="Telefono" className="mt-2" onChange={this.Formularios} required />
<select className="mt-2" name="tipoCliente">
<option onClick={this.FiltroCliente}  value="Residencial">Residencial</option>
<option onClick={this.FiltroCliente} value="Comercial">Comercial</option>
<option onClick={this.FiltroCliente} value="VIP">VIP</option>
</select>
</div>

</div>


<div className="form-row mt-3">

<div className="col">

<input type="submit" value="Crear"  />


</div>


</div>

</form>

</div>
	)

}



if (this.props.crearOver==false) {

return(
<div>

<h1 className="text-white font-weight-bold mt-3" >Cantidad Total De Clientes</h1>

<h1 className="text-white">{this.props.cantidad}</h1>

<h1 className="text-white font-weight-bold">Clientes Cancelados</h1>

<h1 className="text-white">{this.props.cancelados}</h1>





</div>


	)
	
}




}




   }

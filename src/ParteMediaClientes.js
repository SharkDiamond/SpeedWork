import React, { Component } from "react";
import axios from "axios";
import './App.css';


export default class ParteMediaClientes extends Component {
   

constructor(){
super();

this.state={



}


}


render(){
if (this.props.crearOver==true) {

return(
<div>
<form className="text-center">
<h1 className="colorVerde font-weight-bold">Clientes</h1>

<div className="form-row">

<div className="col">
<input type="text"  placeholder="Nombre"/>
<input type="text"  placeholder="Direccion Fisica" className="mt-2"/>
<input type="text"  placeholder="Correo Electronico" className="mt-2"/>
</div>

<div className="col">
<input type="text"  placeholder="Apellido"/>
<input type="text-number"  placeholder="Telefono" className="mt-2"/>
<select className="mt-2">
<option>Residencial</option>
<option>Comercial</option>
<option>VIP</option>
</select>
</div>

</div>


<div className="form-row mt-3">

<div className="col">

<input type="submit" value="Crear" />


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

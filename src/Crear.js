
import React, { Component } from 'react';
import './App.css';
import axios from "axios";

export default class Crear extends Component  {
  
constructor(){

super();

this.state={




}

 //this.Envia=this.Envia.bind(this);

}




    



render(){


  return (
 
   
<div className="container  rounded ">
<div className="row">
<div className="col-3 fondoBarra rounded p-4">

<form className="text-center">
<h1 className="colorVerde font-weight-bold">Clientes</h1>
<input type="text"  placeholder="Nombre"/>
<br/>
<br/>
<input type="text"  placeholder="Apellido"/>
<br/>
<br/>
<input type="text"  placeholder="Direccion"/>
<br/>
<br/>
<input type="number"  placeholder="Telefono"/>
<br/>
<br/>
<input type="text"  placeholder="Correo Electronico"/>
<br/>
<br/>
<select className="mb-3">
<option>Residencial</option>
<option>Comercial</option>
<option>VIP</option>
</select>
<br/>
<input type="submit" value="Crear" />

</form>

</div>

<div className="col-4">
<form className="text-center">
<h1 className="text-danger font-weight-bold">Reporte</h1>
<input type="text" placeholder="Nombre"/>



<input type="submit" />

</form>


</div>

<div className="col-4">
<form className="text-center">
<h1 className="text-primary font-weight-bold">Departamento</h1>
<input type="text" />

<input type="text" />

<input type="text" />

</form>

</div>

</div>


</div>


  );

}


}
import React, { Component } from 'react';
import './App.css';
import conversacion from "./conversacion.png";
import conexion from "./conexion.png";
import analisis from "./analisis.png";
import reloj from "./reloj.png";
export default class Barra extends Component {

  
constructor(){
super();



}



  render() {

        return (
            <div className=" container-fluid fondoBarra ">
 <nav class="navbar navbar-expand-lg">
  <a class="sube h1 font-weight-bold letra1" href="#">SpeedWork</a>

  <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active ">
      <a class="nav-link font-weight-bold letra" href="#"><img  src={conversacion} width="62px" height="62px" className="mr-2"/>Clientes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link font-weight-bold letra" href="#"><img  src={conexion} width="62px" height="62px" className=" mr-2"/>Departamentos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link font-weight-bold letra" href="#"><img  src={analisis} width="62px" height="62px" className="  mr-2"/>Reportes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link font-weight-bold letra" href="#"><img  src={reloj} width="62px" height="62px" className=" mr-2"/>Agenda</a>
      </li>
    </ul>
  </div>

  <form>
<div className="row">
<div className="col-8">
<input type="searh" name="xcvBuscar" className="form-control form-control-sm" placeholder="Buscar"/>
</div>
<div className="col-2">
<input type="submit" name="xcvBuscar" className="btn btn-success btn-sm " value="Buscar"/>
</div>
</div>
  </form>
</nav>

      </div>
        )
    }
}

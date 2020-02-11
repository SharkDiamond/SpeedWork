import React, { Component } from 'react';
import './App.css';
import conversacion from "./imagenes/conversacion.png";
import analisis from "./imagenes/analisis.png";
import conexion from "./imagenes/conexion.png";
import reloj from "./imagenes/reloj.png";
import {Link} from "react-router-dom";


export default class Barra extends Component {




      //<a class="nav-link font-weight-bold letra" href="#"><img  src={conversacion} width="62px" height="62px" className="mr-2"/>Clientes</a>

  render() {

        return (
            <div className=" container-fluid fondoBarra fixed-top">
 <nav class="navbar navbar-expand-lg">

 <Link  className="nav-link sube h1 font-weight-bold letra1" to="./">SpeedWork</Link>

  <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active ">
       <Link  className="nav-link font-weight-bold letra" to="./Clientes"><img  src={conversacion} width="62px" height="62px" className="mr-2" alt=""/>Clientes</Link>

      </li>
      <li class="nav-item">
       <Link  className="nav-link font-weight-bold letra" to="./Departamentos"><img  src={conexion} width="62px" height="62px" className="mr-2" alt="" />Departamentos</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link font-weight-bold letra" to="./Crear"><img  src={analisis} width="62px" height="62px" className="mr-2" alt=""/>Crear</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link font-weight-bold letra" to="./Agenda"><img  src={reloj} width="62px" height="62px" className=" mr-2" alt=""/>Agenda</Link>
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

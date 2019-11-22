import React, { Component } from 'react'
import "./App.css";
export default class MD extends Component {
    
    
    
    
    render() {
       
       
       
       if (this.props.muestra==1) {
           
        return (
            <div className="container-fluid fondo">
                

<h1>Clientes</h1>


            </div>
        )

       }
       
       
       else if(this.props.muestra==2) {
           
        return (
            <div className="container-fluid fondo rounded">
                

<h1 className="display-4">Reportes</h1>

<div className="row p-4">

<div className="col-12   rounded ">
<table className="table table-dark">
<thead>
<tr>
<th>Id</th>
<th>Nombre</th>
<th>Estado</th>
<th>Departamento</th>
<th>Fecha</th>
</tr>

</thead>

<tbody>
<tr>

<td>123</td>
      <td>Instalacion Laureles</td>
      <td>Abierto</td>
      <td>Instalaciones</td>
      <td>14-7-2019</td>
</tr>
<tr>

<td>124</td>
      <td>Remocion Jose Nuñez</td>
      <td>Cerrado</td>
      <td>Busqueda</td>
      <td>17-7-2019</td>
</tr>


</tbody>





</table>

</div>





</div>



            </div>
        )

       }
       
 
       else if(this.props.muestra==3) {
           
        return (
            <div className="container-fluid fondo">
                

<h1>Visitas</h1>


            </div>
        )

       }



    }
}

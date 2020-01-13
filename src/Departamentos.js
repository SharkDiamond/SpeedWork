import React, { Component } from 'react';

import axios from "axios";

export default class Departametos extends Component {


constructor(){


super();



this.state={



}


}



  
    render() {

return (

            <div className="container-fluid  ">


<div className="row m-3" >


<div className="col-8 ">

<table class="table fondoBarra">
  <thead>
    <tr>
      <th scope="col" className="text-white">ID</th>
      <th scope="col" className="text-white">Nombre</th>
      <th scope="col" className="text-white">Fecha</th>
      <th scope="col" className="text-white">Cliente</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" Style="color:orange;">1</th>
      <td className="text-primary">Mark</td>
      <td className="text-primary">Otto</td>
      <td className="text-primary">@mdo</td>
    </tr>
    <tr>
      <th scope="row" Style="color:orange;">2</th>
      <td className="text-primary">Jacob</td>
      <td className="text-primary">Thornton</td>
      <td className="text-primary">@fat</td>
    </tr>
    <tr>
      <th scope="row" Style="color:orange;">3</th>
      <td className="text-primary">Larry</td>
      <td className="text-primary">the Bird</td>
      <td className="text-primary">@twitter</td>
    </tr>
  </tbody>
</table>




</div>




<div className="col-4 fondoBarra">

<form className="text-center mt-3">

<input type="text" placeholder="Buscar Departameto" className="mb-2 mt-2 mr-2"/>

<input type="submit" value="Buscar" />
</form>


<div className="bg-white  rounded p-1 text-center mt-3 mb-2">

<h1 className="d-inline mr-4 " >Instalaciones</h1>


<h1 className="d-inline fondoBarra  colorVerde rounded">30</h1>


</div>



<div className="bg-white  rounded p-1 text-center mt-3 mb-2">

<h1 className="d-inline mr-4" >Torres</h1>


<h1 className="d-inline  fondoBarra  colorVerde rounded">300</h1>


</div>


<div className="bg-white rounded p-1 text-center mt-3 mb-2">

<h1 className="d-inline mr-4 " >Bases</h1>


<h1 className="d-inline bg-black  fondoBarra  colorVerde rounded">30</h1>


</div>




</div>








</div>


            </div>
      

      )  
    }




}
   

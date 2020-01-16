import React, { Component } from 'react';

import axios from "axios";
import Lista from "./Lista";

export default class Departametos extends Component {


constructor(){


super();



this.state={

id:[],
nombre:[],
fecha:[]

}


}



  
    render() {

return (

            <div className="container-fluid ">


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
  </tbody>
</table>



</div>




<Lista/>









</div>


            </div>
      

      )  
    }




}
   

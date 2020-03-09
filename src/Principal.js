import React, { Component } from 'react'

import InformeG from "./InformeG";
import PUsuario from "./PUsuario";
import ReportesDia from "./ReportesDia";
import RedesSociales from "./RedesSociales";
import Barra from "./Barra";


export default class Principal extends Component {
    render() {


if (localStorage.getItem("Usuario")) {

  return (
      <div className="container-fluid">

        <Barra/>


            <br/>

            <br/>

            <br/>

            <br/>

            <br/>

            <br/>

            <br/>


          <div className="row  ml-3 mb-3 mr-3  justify-content-center">

<div className="col-8">

<InformeG/>


</div>


<div className="col-1">

<RedesSociales/>


</div>


</div>

<div className="row m-3 justify-content-center">

<div className="col-4">
<ReportesDia/>
</div>

<div className="col-4">

<PUsuario/>

</div>



<div className="col-1">

</div>



<div>




</div>


</div>


      </div>
  )




}



if (localStorage.getItem("Usuario")==undefined) {

return(

  <div className="fondo">


  <h1 className="text-center font-weight-bold display-1">PAGINA NO ENCONTRADA</h1>

  </div>



)



}



    }
}

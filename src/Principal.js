import React, { Component } from 'react'

import InformeG from "./InformeG";
import PUsuario from "./PUsuario";
import ReportesDia from "./ReportesDia";
import RedesSociales from "./RedesSociales";
export default class Principal extends Component {
    render() {
        return (
            <div className="container-fluid">
                

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
}

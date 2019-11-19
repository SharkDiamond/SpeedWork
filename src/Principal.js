import React, { Component } from 'react'

import InformeG from "./InformeG";
import PUsuario from "./PUsuario";
import ReportesDia from "./ReportesDia";

export default class Principal extends Component {
    render() {
        return (
            <div className="container-fluid">
                

                <div className="row m-3">

   


<div className="col-8">


<InformeG/>


</div>
   
<div className="col-4">
<PUsuario/>
<br/>
<ReportesDia/>
</div>

  
    </div>

<div className="row m-3">

<div className="col-8">

</div>

<div className="col-4">





</div>




<div>




</div>


</div>






            </div>
        )
    }
}

import React, { Component } from 'react';
import dia from "./imagenes/dia.png";
import Iclientes from "./Iclientes.js";
import vip from "./imagenes/vip.png";
import tienda from "./imagenes/tienda.png";
import casa from "./imagenes/casa.png";
import Miniperfil from "./Miniperfil.js";

export default class Clientes extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
tipoCliente:"VIP",
primera:"fondominibarra",
segunda:"",
tercera:""


    }
    
    
    }
    

    /*


<div className="col-4">
<Iclientes Titulo="Comerciales" Cantidad={800}/>
</div>

<div className="col-4">
<Iclientes Titulo="Residenciales" Cantidad={4000}/>
</div>

</div>


<img src={vip} width="200px" heigh="200px" className="mr-1"/>

<img src={tienda} width="200px" heigh="200px" className="mr-1"/>

<img src={casa} width="200px" heigh="200px" />





*/

cambiacliente=(etiqueta)=>{

if (etiqueta.target.id==="VIP") {

this.setState({

tipoCliente:etiqueta.target.id,
primera:"fondominibarra",
segunda:"",
tercera:""

})



}


else if (etiqueta.target.id==="Comercial") {


this.setState({

tipoCliente:etiqueta.target.id,
primera:"",
segunda:"fondominibarra",
tercera:""

})



}

else if (etiqueta.target.id==="Residencial") {


this.setState({

tipoCliente:etiqueta.target.id,
primera:"",
segunda:"",
tercera:"fondominibarra"

})



}





}



   
    render() {

return (

            <div className="container border p-3 rounded">




<div className="row p-3 fondoBarra rounded">


<div className="col-2 rounded p-3 ">
<div className="text-center">



<img src={vip} width="80px" heigh="80px" className={this.state.primera} id="VIP" onClick={this.cambiacliente}/>
     

<img src={tienda} width="80px" heigh="80px" className={this.state.segunda} id="Comercial" onClick={this.cambiacliente}/>

     

<img src={casa} width="80px" heigh="80px" className={this.state.tercera} id="Residencial" onClick={this.cambiacliente}/>

   </div>
</div>




<div className="col-6 fondoBarra text-center  rounded  p-3 border">


<h1 className="text-white font-weight-bold mt-3">Cantidad Total De Clientes</h1>
<h1 className="text-white">500</h1>

<h1 className="text-white font-weight-bold">Clientes Cancelados</h1>

<h1 className="text-white ">200</h1>



</div>


<div className="col-4  ">
<br/>
<Iclientes Titulo={this.state.tipoCliente} />

</div>


     </div>
      



<div className="row  mt-4 rounded justify-content-center">



<div className="col-6 fondoBarra rounded">
<br/>

<h1 className="text-center display-4 text-white ">Resultados</h1>
<br/>
<br/>
<br/>

<br/>

</div>


<div className="col-4  pt-3 cajaminip rounded fondoBarra">

<Miniperfil/>


</div>


</div>






            </div>
      

      )  
    }




}

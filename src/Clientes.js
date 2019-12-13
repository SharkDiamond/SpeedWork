import React, { Component } from 'react';
import dia from "./imagenes/dia.png";
import Iclientes from "./Iclientes.js";
import vip from "./imagenes/vip.png";
import tienda from "./imagenes/tienda.png";
import casa from "./imagenes/casa.png";

export default class Clientes extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
    

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


   
    render() {

return (

            <div className="container border p-3 rounded">




<div className="row p-3 fondoBarra rounded">


<div className="col-2 bg-dark rounded p-3">
<div className="text-center">
<img src={vip} width="80px" heigh="80px" className=""/>
     

<img src={tienda} width="80px" heigh="80px" className=""/>

     

<img src={casa} width="80px" heigh="80px" />

   </div>
</div>



<div className="col-4 bg-danger ">
<br/>
<Iclientes Titulo="VIP" Cantidad={500}/>
</div>


<div className="col-6 fondoBarra text-center p-2 rounded bg-primary">


</div>

     </div>
      



<div className="row fondoBarra mt-4 rounded">

<div className="col-12">
<br/>

<h1 className="text-center display-4 text-white">Perfil</h1>
<br/>
<br/>
<br/>

<br/>

</div>


</div>






            </div>
      

      )  
    }




}
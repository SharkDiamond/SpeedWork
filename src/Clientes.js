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

*/


   
    render() {

return (

            <div className="container border p-2">


<div className="row p-3">


<div className="col-8 fondoBarra text-center p-2">

<img src={vip} width="200px" heigh="200px" className="mr-1"/>

<img src={tienda} width="200px" heigh="200px" className="mr-1"/>

<img src={casa} width="200px" heigh="200px" />

</div>



<div className="col-4">
<Iclientes Titulo="VIP" Cantidad={500}/>
</div>


     </div>
      
            </div>
      

      )  
    }




}
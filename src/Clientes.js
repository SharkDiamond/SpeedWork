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
tercera:"",
primerafila:false,
segundafila:false,
veri:"col-4  pt-3 cajaminip rounded fondoBarra d-none"


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

});


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






ver=(e)=>{

//quesevea col-4  pt-3 cajaminip rounded fondoBarra

var segundacolumna=document.getElementById("perfil");

var componente=document.getElementById("componenteperfil");


if (this.state.segundafila==false) {

this.setState({


segundafila:true,
veri:"quitar"

})


segundacolumna.className="quesevea col-4  pt-3 cajaminip rounded fondoBarra";


setTimeout(()=>{


componente.className="";


},300);



}

else if (this.state.segundafila==true) {


this.setState({


segundafila:false


})





componente.className="d-none";



segundacolumna.className="quitar";








}





}



ver2=()=>{

var fila=document.getElementById("resultado");



if (this.state.primerafila==false) {

this.setState({


primerafila:true


})


fila.className="quesevea col-6 fondoBarra rounded";




}


if (this.state.primerafila==true) {

this.setState({


primerafila:false


})


fila.className=" quitar";

}



}



   
    render() {

return (

            <div className="container  p-3 rounded">




<div className="row p-3 fondoBarra rounded">


<div className="col-2 rounded p-3 ">
<div className="text-center">



<img src={vip} width="80px" heigh="80px" className={this.state.primera} id="VIP" onClick={this.cambiacliente}/>
     

<img src={tienda} width="80px" heigh="80px" className={this.state.segunda} id="Comercial" onClick={this.cambiacliente}/>

     

<img src={casa} width="80px" heigh="80px" className={this.state.tercera} id="Residencial" onClick={this.cambiacliente}/>

   </div>
</div>




<div className="col-6 fondoBarra text-center  rounded  p-3 border">


<h1 className="text-white font-weight-bold mt-3" >Cantidad Total De Clientes</h1>
<h1 className="text-white">500</h1>

<h1 className="text-white font-weight-bold">Clientes Cancelados</h1>

<h1 className="text-white ">200</h1>



</div>


<div className="col-4  ">
<br/>
<Iclientes Titulo={this.state.tipoCliente} pasafuncion={this.ver2}/>

</div>


     </div>
      



<div className="row  mt-4 rounded justify-content-center">



<div className="quitar" id="resultado">
<br/>

<h1 className="text-center display-4 text-white font-weight-bold">Resultados</h1>
<br/>

<ul><li className="text-warning h4 font-weight-bold" onClick={this.ver}>Medical Cannbis</li></ul>

<br/>

</div>


<div className="quitar"  id="perfil">
<div className="d-none" id="componenteperfil">
<Miniperfil  />
</div>

</div>


</div>






            </div>
      

      )  
    }




}

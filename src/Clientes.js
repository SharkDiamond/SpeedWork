import React, { Component } from 'react';
import dia from "./imagenes/dia.png";
import Iclientes from "./Iclientes.js";
import vip from "./imagenes/vip.png";
import tienda from "./imagenes/tienda.png";
import casa from "./imagenes/casa.png";
import Miniperfil from "./Miniperfil.js";
import axios from "axios";



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
veri:"col-4  pt-3 cajaminip rounded fondoBarra d-none",
cantidad:0,
cancelados:0,
resultadosbusqueda:[],
perfiles:null


    }
    
    
//CODIGO PARA PODER USAR THIS EN LOS METODOS

this.PEDIR=this.PEDIR.bind(this);
this.ObteniendoResultados=this.ObteniendoResultados.bind(this);
this.ver=this.ver.bind(this);


    }
    


//METODO PARA PEDIR  LOS DATOS DE LAS CANTIDADES DE CLIENTES TANTO ACTIVOS COMO CANCELADOS

PEDIR(tipo){

switch(tipo){

case "VIP":

axios.get('http://localhost:8080/restback/index.php/Peticion/ObtenerClientesVip?format=json').then((respuesta)=>{



this.setState({

cantidad:respuesta.data.CANTIDAD,
cancelados:respuesta.data.CANCELADOS




})



}).catch((error)=>{



alert("ERROR");


}




);

break;

case "Comercial":


axios.get('http://localhost:8080/restback/index.php/Peticion/ObtenerClientesComerciales?format=json').then((respuesta)=>{



this.setState({

cantidad:respuesta.data.CANTIDAD,
cancelados:respuesta.data.CANCELADOS




})



}).catch((error)=>{



alert("ERROR");


}




);

break;


case "Residencial":

axios.get('http://localhost:8080/restback/index.php/Peticion/ObtenerClientesResidenciales?format=json').then((respuesta)=>{



this.setState({

cantidad:respuesta.data.CANTIDAD,
cancelados:respuesta.data.CANCELADOS




})




}).catch((error)=>{



alert("ERROR");


}




);



break;



}




}

//METODO  QUE SE EJECUTA LUEGO DE QUE SE RENDERICE EL COMPONENTE FATA EL ASYNC Y EL AWAIT

componentDidMount(){


axios.get('http://localhost:8080/restback/index.php/Peticion/ObtenerClientesVip?format=json').then((respuesta)=>{



this.setState({

cantidad:respuesta.data.CANTIDAD,
cancelados:respuesta.data.CANCELADOS




})




}).catch((error)=>{



alert("ERROR");


}




);



}


ObteniendoResultados(result){



this.setState({


resultadosbusqueda:result


});


}


cambiacliente=(etiqueta)=>{

if (etiqueta.target.id==="VIP") {

this.setState({

tipoCliente:etiqueta.target.id,
primera:"fondominibarra",
segunda:"",
tercera:""

});

this.PEDIR(etiqueta.target.id);


console.log(this.state.cantidad);


}



else if (etiqueta.target.id==="Comercial") {


this.setState({

tipoCliente:etiqueta.target.id,
primera:"",
segunda:"fondominibarra",
tercera:""

})


this.PEDIR(etiqueta.target.id);


console.log(this.state.cantidad);


}

else if (etiqueta.target.id==="Residencial") {


this.setState({

tipoCliente:etiqueta.target.id,
primera:"",
segunda:"",
tercera:"fondominibarra"

})




this.PEDIR(etiqueta.target.id);


}





}

//METODO QUE SE EJECUTA CUANDO SE HACE CLICK SOBRE UN ELEMENTO DE LA LISTA

clienteElegido=(e)=>{

   


    this.setState({


        perfiles:e.target.id
        
        })
        
        
        
        console.log(this.state.perfiles);
        
        this.ver();



}




ver(e){

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







}



ver2=()=>{

var fila=document.getElementById("resultado");



if (this.state.primerafila==false) {

this.setState({


primerafila:true


})


fila.className="quesevea col-6 fondoBarra rounded";




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
<h1 className="text-white">{this.state.cantidad}</h1>

<h1 className="text-white font-weight-bold">Clientes Cancelados</h1>

<h1 className="text-white ">{this.state.cancelados}</h1>



</div>


<div className="col-4  ">
<br/>
<Iclientes Titulo={this.state.tipoCliente} pasafuncion={this.ver2} enviarResultados={this.ObteniendoResultados}/>

</div>


     </div>
      



<div className="row  mt-4 rounded justify-content-center">



<div className="quitar" id="resultado">

<br/>

<h1 className="text-center display-4 text-white font-weight-bold">Resultados</h1>
<br/>

<ul className="">

{

this.state.resultadosbusqueda.map((elementos)=>{

if (elementos=="No Hay Resultados") {


return <li className="text-danger h4 font-weight-bold">No hay resultado</li>

}

 return  <li className=" colorVerde h4 font-weight-bold border-right border-success" onMouseEnter={this.clienteElegido} id={elementos.idClientes}>{elementos.Nombre}</li>



})

}

</ul>


<br/>

</div>


<div className="quitar"  id="perfil">
<div className="d-none" id="componenteperfil">
<Miniperfil  idFiltro={this.state.perfiles}/>
</div>

</div>


</div>






            </div>
      

      )  
    }




}

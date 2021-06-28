
import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {toast} from "react-toastify";
import {Ip} from "./Ip";



export default class Reporte extends Component  {

constructor(){
  toast.configure();
super();

this.state={

FechaC:"",
Nombre:"",
Comentarios:[],
describe:"",
ac:null,
cerradooabierto:""


}

this.Peticion=this.Peticion.bind(this);

this.AsignarDatos=this.AsignarDatos.bind(this);
this.MostrarAbiertoOCerrado=this.MostrarAbiertoOCerrado.bind(this);
this.PeticionComentarios=this.PeticionComentarios.bind(this);



}

AsignarDatos(etiqueta){

const valor=etiqueta.target.value;
this.setState({

describe:valor



})




}

MostrarAbiertoOCerrado(){

if (this.state.ac==1) {

this.setState({

cerradooabierto:"Cerrar"


})


} else if(this.state.ac==0){
this.setState({

cerradooabierto:"Abrir"


})

}

}


AbrirOCerrarReporte=()=>{

if(this.state.ac==true) {

axios.post("http://"+Ip+":8081/DepCANTD/OpenOrCloseReport",{cambia:false,reporte:this.props.idbusqueda}).then((respuesta)=>{

this.setState({
ac:false

});


this.MostrarAbiertoOCerrado();

this.props.actualizaLista();

}).catch((error)=>{

//SI OCURRE UN PROBLEMA

console.log(error);
});


} else {


axios.post("http://"+Ip+":8081/DepCANTD/OpenOrCloseReport",{cambia:true,reporte:this.props.idbusqueda}).then((respuesta)=>{


this.MostrarAbiertoOCerrado();

this.setState({
ac:true

});

this.MostrarAbiertoOCerrado();
this.props.actualizaLista();

}).catch((error)=>{

//SI OCURRE UN PROBLEMA


console.log(error);
});



}

}

enviaComentario= (e)=>{

e.preventDefault();


axios.post("http://"+Ip+":8081/Commentarys",{comentario:this.state.describe,reporte:this.props.idbusqueda,usuario:localStorage.getItem("Usuario")}).then((respuesta)=>{


this.PeticionComentarios(this.props.idbusqueda);


toast.success(respuesta.data);


}).catch((error)=>{

//SI OCURRE UN PROBLEMA


console.log("error en envia comentario",error);
});





}


Peticion(Dato){         

axios.post("http://"+Ip+":8081/DepCANTD/Report",{idReporte:Dato}).then((respuesta)=>{

//SI TODO SALE BIEN

let newString=respuesta.data.FechaCreacion.replace("T"," ");

let newString2=newString.replace("Z"," ");

this.setState({

Nombre:respuesta.data.NombreReporte,
FechaC:newString2,
ac:respuesta.data.Estado


});






this.MostrarAbiertoOCerrado();


}).catch((error)=>{

//SI OCURRE UN PROBLEMA

//alert("problemas");
console.log(error);
});


this.PeticionComentarios(Dato);


}

PeticionComentarios=(Dato)=>{
  
axios.get("http://"+Ip+":8081/Departments/Comentarios/"+Dato).then((respuesta)=>{

  //SI TODO SALE BIEN
  
  
  this.setState({
  
  Comentarios:respuesta.data
  
  });
  
  console.log(this.state.Comentarios);
  
  }).catch((error)=>{
  
  //SI OCURRE UN PROBLEMA
  
  alert(Dato,"problemas comentarios");
  
  });
  
}



componentDidUpdate(prevProps, prevState){

if (this.props.idbusqueda!==prevProps.idbusqueda) {

  
	this.Peticion(this.props.idbusqueda);



}





}


componentWillMount(){

if (this.props.idbusqueda!=null) {
  this.Peticion(this.props.idbusqueda);
}
  

 

}



render(){



if (this.props.ver===true) {



  return (


<div className="fondoBarra rounded p-3">

<h1 className="mr-3" align="right" Style="color:white;">{this.state.FechaC}</h1>

<h1 className="display-4 text-primary mb-4" align="center">{this.state.Nombre}</h1>


{

this.state.Comentarios.map((elemento)=>{

  let newString=elemento.FechaCreacion.replace("T"," ");

  let newString2=newString.replace("Z"," ");
  

return <div className="bg-white p-3 m-3 rounded"><h4 className="d-block">{elemento.DescripcionComentarios}</h4><p className="font-weight-bold d-inline">{elemento.Creador}  </p><p className="d-inline">{newString2}</p></div>

})

}


<div className="fondoBarra p-3 rounded">
<form onSubmit={this.enviaComentario} className="d-inline">
<textarea name="message" rows="5" cols="90"  onChange={this.AsignarDatos} className="ml-3" required></textarea>

<input type="submit" className="btn bg-white ml-3 mt-2 " value="Enviar"  />



</form>


<button className="btn bg-white ml-3 mt-2" onClick={this.AbrirOCerrarReporte}>{this.state.cerradooabierto}</button>


</div>

</div>


  );


}


if (this.props.ver===false) {



  return (


<div className="d-none">



</div>


  );


}



}


}

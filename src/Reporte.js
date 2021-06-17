
import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {toast} from "react-toastify";
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


  let contador=0;
if(this.state.ac==true) {

axios.post("http://localhost:8080/restback/index.php/Departamentos/AbirCerrarReporte",{cambia:false,reporte:this.props.idbusqueda}).then((respuesta)=>{

  console.log("test2");


this.setState({
ac:false

})
this.MostrarAbiertoOCerrado();

this.props.actualizaLista();

}).catch((error)=>{

//SI OCURRE UN PROBLEMA

console.log(error);
});


} else {


axios.post("http://localhost:8080/restback/index.php/Departamentos/AbirCerrarReporte",{cambia:true,reporte:this.props.idbusqueda}).then((respuesta)=>{


this.MostrarAbiertoOCerrado();

this.setState({
ac:true

})
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


axios.post("http://localhost:8081/Commentarys",{comentario:this.state.describe,reporte:this.props.idbusqueda,usuario:localStorage.getItem("Usuario")}).then((respuesta)=>{


this.PeticionComentarios(this.props.idbusqueda);


toast.success(respuesta.data);


}).catch((error)=>{

//SI OCURRE UN PROBLEMA


console.log("error en envia comentario",error);
});





}


Peticion(Dato){         

axios.post("http://localhost:8080/restback/index.php/Departamentos/TituloReporte",{IDentificador:Dato}).then((respuesta)=>{

//SI TODO SALE BIEN


respuesta.data.map((elemento)=>{

this.setState({

Nombre:elemento.NombreReporte,
FechaC:elemento.FechaCreacion,
ac:elemento.Estado


});


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
  
axios.get("http://localhost:8081/Commentarys/"+Dato).then((respuesta)=>{

  //SI TODO SALE BIEN
  console.log("Test",respuesta);
  
  this.setState({
  
  Comentarios:respuesta.data
  
  });
  
  
  
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


  this.Peticion(this.props.idbusqueda);

 



}



render(){



if (this.props.ver===true) {



  return (


<div className="fondoBarra rounded p-3">

<h1 className="mr-3" align="right" Style="color:white;">{this.state.FechaC}</h1>

<h1 className="display-4 text-primary mb-4" align="center">{this.state.Nombre}</h1>


{

this.state.Comentarios.map((elemento)=>{


return <div className="bg-white p-3 m-3 rounded"><h4 className="d-block">{elemento.DescripcionComentarios}</h4><p className="font-weight-bold d-inline">{elemento.Creador}  </p><p className="d-inline">{elemento.FechaCreacion}</p></div>

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

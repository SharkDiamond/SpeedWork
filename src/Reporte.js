
import React, { Component } from 'react';
import './App.css';
import axios from "axios";

export default class Reporte extends Component  {
  
constructor(){

super();

this.state={

FechaC:"",
Nombre:"",
Comentarios:[],
describe:""



}

this.Peticion=this.Peticion.bind(this);
//this.enviaComentario=this.enviaComentario.bind(this);
this.AsignarDatos=this.AsignarDatos.bind(this);
}

AsignarDatos(etiqueta){

const valor=etiqueta.target.value;
this.setState({

describe:valor



})

console.log(this.state.describe);


}


enviaComentario= async (e)=>{

e.preventDefault();
await axios.post("http://localhost:8080/restback/index.php/Departamentos/CrearComentario",{comentario:this.state.describe}).then((respuesta)=>{
alert("se ejecuto");

console.log(respuesta);


}).catch((error)=>{

//SI OCURRE UN PROBLEMA

alert("problemas");
console.log(error);
});

}


Peticion(Dato){



axios.post("http://localhost:8080/restback/index.php/Departamentos/TituloReporte",{IDentificador:Dato}).then((respuesta)=>{

//SI TODO SALE BIEN





respuesta.data.map((elemento)=>{

this.setState({

Nombre:elemento.NombreReporte,
FechaC:elemento.FechaCreacion


})


});

console.log(respuesta.data.NombreReporte);


}).catch((error)=>{

//SI OCURRE UN PROBLEMA

alert("problemas");
console.log(error);
});


axios.post("http://localhost:8080/restback/index.php/Departamentos/Comentarios",{IDentificador:Dato}).then((respuesta)=>{

//SI TODO SALE BIEN


this.setState({

Comentarios:respuesta.data

})

console.table(this.state.Comentarios);

console.log();


}).catch((error)=>{

//SI OCURRE UN PROBLEMA

alert("problemas");
console.log(error);
});




}

componentDidUpdate(prevProps, prevState){

if (this.props.idbusqueda!==prevProps.idbusqueda) {

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


return <div className="bg-white p-3 m-3 rounded"><h4 className="d-block">{elemento.DescripcionComentarios}</h4><p className="font-weight-bold d-inline">{elemento.Creador}  </p><p className="d-inline">{elemento.FechaCreacion}</p></div>

})

}


<div className="fondoBarra p-3 rounded">
<form onSubmit={this.enviaComentario}>
<textarea name="message" rows="5" cols="90"  onChange={this.AsignarDatos} className="ml-3"></textarea>

<input type="submit" className="btn bg-white ml-3 mt-2" value="Enviar"  />
</form>


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

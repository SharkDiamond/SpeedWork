
import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Reporte from "./Reporte";
export default class Lista extends Component  {
  
constructor(){

super();

this.state={


Datos:[],
elegido:"",
Mostrar:true,
crear:""


}

 this.Envia=this.Envia.bind(this);
this.actua=this.actua.bind(this);
this.AsignarDatos=this.AsignarDatos.bind(this);
}




Envia(e){



this.props.actualizatabla(e.target.id);




}

 actua(){
axios.get("http://localhost:8080/restback/index.php/Departamentos/DepartamentosListado?format=json")
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


Datos:response.data


})
console.table(this.state.Datos);

  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    //alert(error);
  });


}

  componentDidMount(){
axios.get("http://localhost:8080/restback/index.php/Departamentos/DepartamentosListado?format=json")
  .then((response) => {
    //RESPUESTA SI TODO SALE BIEN


this.setState({


Datos:response.data


})
console.table(this.state.Datos);

  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    //alert(error);
  });


} 
    
mostrarFormulario=()=>{

if (this.state.Mostrar) {

this.setState({


Mostrar:false

})

} else {

this.setState({


Mostrar:true

})


}



}


AsignarDatos(etiqueta){

const valor=etiqueta.target.value;
this.setState({

crear:valor



})

console.log(this.state.describe);


}


EnviarFormulario= async (e)=>{
 e.preventDefault();

await axios.post("http://localhost:8080/restback/index.php/Departamentos/CrearDepartamento",{Nombre:this.state.crear}).then((response) => {
    //RESPUESTA SI TODO SALE BIEN

alert(response.data);

  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
alert("problemas");
    console.log(error);
    //alert(error);
  });



}


render(){

if (this.state.Mostrar==true) {
  return (
 
<div className=" col-4">
<div className="fondoBarra p-3 rounded">

<div className="text-center"><h1 className="font-weight-bold text-primary d-inline">Departamentos</h1><button className="ml-2 btn btn-light font-weight-bold subebotonlista" onClick={this.mostrarFormulario}>+</button></div>

{
this.state.Datos.map(Elementos => {
  
return(
<div className="bg-white  rounded p-1 text-center mt-3 mb-2" key={Elementos[0].NombreDepartamento}>

<h1 className="d-inline mr-4 " onMouseEnter={this.Envia} id={Elementos[0].idDepartamento}>{Elementos[0].NombreDepartamento}</h1>


<h1 className="d-inline fondoBarra  colorVerde rounded" >{Elementos[0].Cantidad}</h1>


</div>
)

  
})

}

<Reporte ver={false} actualizaLista={this.actua()}/>


</div>
</div>


  );
}

else{

return(


<div className=" col-4">
<div className="fondoBarra p-3 rounded">

<div className="text-center mb-2"><h1 className="font-weight-bold text-primary d-inline">Departamentos</h1><button className="ml-2 btn  btn-light font-weight-bold subebotonlista" onClick={this.mostrarFormulario}>-</button></div>

<form className="text-center" onSubmit={this.EnviarFormulario}>

<input type="text" placeholder="Nombre" onChange={this.AsignarDatos}/>
<br/>
<br/>
<input type="submit" className="btn bg-success" value="Crear" />


</form>

</div>
</div>
  );


}

}


}







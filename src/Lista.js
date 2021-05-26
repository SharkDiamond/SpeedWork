import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Reporte from "./Reporte";
import {Ip} from "./Ip";
import {toast} from "react-toastify";


export default class Lista extends Component  {
  
constructor(){

    toast.configure();


super();

this.state={

Datos:[],
elegido:"",
Mostrar:1,
crear:"",
eleccion:"Clientes"


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


  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    //alert(error);
  });


} 
    
mostrarFormulario=(e)=>{



if (this.state.Mostrar==1) {

this.setState({


Mostrar:e.target.id

})

} else if(this.state.Mostrar==2){

this.setState({


Mostrar:1

})


}


else if(this.state.Mostrar==3){

this.setState({


Mostrar:1

})


}



}


AsignarDatos(etiqueta){

const valor=etiqueta.target.value;


this.setState({

crear:valor



})




}


cambia=(etiqueta)=>{

this.setState({


eleccion:etiqueta.target.value

})


}



EnviarFormulario=  (e)=>{
 e.preventDefault();

    axios.post("http://"+Ip+":8081/Departments/"+this.state.crear).then((response) => {

    //RESPUESTA SI TODO SALE BIEN
    toast.success("Departamento "+ this.state.crear +" "+ response.data.Respuesta);

  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
      console.log();

      toast.error(error.response.data.Errors[0]);

    //alert(error);
  });

}


EnviarFormularioReporte= async (e)=>{
 e.preventDefault();

await axios.post("http://localhost:8080/restback/index.php/Departamentos/CrearReporte",{Nombre:this.state.crear,Departamento:this.state.eleccion}).then((response) => {
    //RESPUESTA SI TODO SALE BIEN

alert(response.data);

  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
alert("problemas");
    console.log(error);

  });



}



render(){

if (this.state.Mostrar==1) {
  return (
 
<div className=" col-4">
<div className="fondoBarra p-3 rounded">

<div className="text-center"><h1 className="font-weight-bold text-primary d-inline">Departamentos</h1>
<button className="ml-2 btn btn-light font-weight-bold subebotonlista" id={2} onClick={this.mostrarFormulario} >D</button>
<button className="ml-2 btn btn-light font-weight-bold subebotonlista" id={3} onClick={this.mostrarFormulario} >R</button></div>

{
this.state.Datos.map(Elementos => {
  
return(
<div className="bg-white  rounded p-1 text-center mt-3 mb-2" key={Elementos[0].NombreDepartamento}>

<h1 className="d-inline mr-4 " onClick={this.Envia} id={Elementos[0].idDepartamento}>{Elementos[0].NombreDepartamento}</h1>


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

else if(this.state.Mostrar==2){

return(


<div className=" col-4">
<div className="fondoBarra p-3 rounded">

<div className="text-center mb-2"><h1 className="font-weight-bold text-primary d-inline">Departamentos</h1><button className="ml-2 btn  btn-light font-weight-bold subebotonlista" onClick={this.mostrarFormulario}>-</button></div>

<form className="text-center" id="" onSubmit={this.EnviarFormulario}>

<input type="text" placeholder="Nombre" onChange={this.AsignarDatos} required/>
<br/>
<br/>
<input type="submit" className="btn bg-success" value="Crear" />


</form>

</div>
</div>
  );


}


else if(this.state.Mostrar==3){

return(


<div className=" col-4">
<div className="fondoBarra p-3 rounded">

<div className="text-center mb-2"><h1 className="font-weight-bold colorVerde d-inline">Nuevo Reporte</h1><button className="ml-2 btn  btn-light font-weight-bold subebotonlista" onClick={this.mostrarFormulario}>-</button></div>

<form className="text-center" id="" onSubmit={this.EnviarFormularioReporte}>

<input type="text" placeholder="Nombre" onChange={this.AsignarDatos} required/>
<br/>
<br/>


<select value={this.state.eleccion} onChange={this.cambia}>
{
this.state.Datos.map(Elementos => {
  
return(
<option className="d-block"  id={Elementos[0].idDepartamento} value={Elementos[0].NombreDepartamento}>{Elementos[0].NombreDepartamento}</option>


)

  
})

}
</select>

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







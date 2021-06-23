import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Reporte from "./Reporte";
import {Ip} from "./Ip";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

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
this.pruebas=this.pruebas.bind(this);
}


Envia(e){

this.props.actualizatabla(e.target.id);

}




 actua(){

  //BUG LOOP INFINITO SE REPITE MUCHAS

  //FALTA PASAR AL NUEVO BACK-END
axios.get("http://"+Ip+":8081/Commentarys/list").then((response) => {
    //RESPUESTA SI TODO SALE BIEN
    
this.setState({

Datos:response.data


});



  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
    
  });

  
}

componentDidMount(){
  console.log("se ejecuta");
    
axios.get("http://"+Ip+":8081/Commentarys/list").then((response) => {
    //RESPUESTA SI TODO SALE BIEN

this.setState({


Datos:response.data


});





  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR

    console.log(error);
   
  });


  console.log("estado", this.state.Datos);


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

this.actua();



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

});


}



EnviarFormulario=(e)=>{
 
  e.preventDefault();

  axios.post("http://"+Ip+":8081/Departments/"+this.state.crear).then((response) => {

    //RESPUESTA SI TODO SALE BIEN
    toast.success("Departamento "+ this.state.crear +" "+ response.data.Respuesta);

  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
     
      toast.error(error.response.data.Errors[0]);

    //alert(error);
  });

}


EnviarFormularioReporte=(e)=>{

    e.preventDefault();
  
 let prueba=this.state.Datos.find(elemento=>elemento.NombreDepartamento===this.state.eleccion);
  
 axios.post("http://"+Ip+":8081/Reports/"+prueba.idDepartamento+"/"+this.state.crear).then((response) => {

    //RESPUESTA SI TODO SALE BIEN
    toast.success(this.state.crear +" "+ response.data.Respuesta);

  })
  .catch((error) => {
//RESPUESTA SI HAY ALGUN ERROR
      toast.error(error.response.data.Errors[0]);
  });

}

pruebas(){}

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
<div className="bg-white  rounded p-1 text-center mt-3 mb-2" key={Elementos.NombreDepartamento}>

<Link to={"#"+Elementos.idDepartamento}><h1 className="d-inline mr-4 " onClick={this.Envia} id={Elementos.idDepartamento}>{Elementos.NombreDepartamento}</h1></Link>


<h1 className="d-inline fondoBarra  colorVerde rounded cantidad" >{}</h1>


</div>
)

  
})


}

<Reporte ver={false} actualizaLista={this.pruebas()}/>


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

<form className="text-center"  onSubmit={this.EnviarFormularioReporte}>

<input type="text" placeholder="Nombre" onChange={this.AsignarDatos} required/>
<br/>
<br/>
<select value={this.state.eleccion} onChange={this.cambia}>
{
  
this.state.Datos.map(Elementos => {
 
return(
<option className="d-block"  id={Elementos.idDepartamento} value={Elementos.NombreDepartamento}>{Elementos.NombreDepartamento}</option>


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







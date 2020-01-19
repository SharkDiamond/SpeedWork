
import React, { Component } from 'react';
import './App.css';
import axios from "axios";

export default class Lista extends Component  {
  
constructor(){

super();

this.state={


Datos:[],
elegido:""


}

 this.Envia=this.Envia.bind(this);

}




Envia(e){



this.setState({

elegido:e.target.id


})

this.props.actualizatabla(this.state.elegido);

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
    alert(error);
  });


} 
    



render(){


  return (
 
   
<div className="fondoBarra col-4">

<form className="text-center mt-3">

<input type="text" placeholder="Buscar Departameto" className="mb-2 mt-2 mr-2"/>

<input type="submit" value="Buscar" />
</form>

{
this.state.Datos.map(function (Elementos) {
  
return(
<div className="bg-white  rounded p-1 text-center mt-3 mb-2"  id={Elementos.NombreDepartamento}>

<h1 className="d-inline mr-4 " >{Elementos[0].NombreDepartamento}</h1>


<h1 className="d-inline fondoBarra  colorVerde rounded" >{Elementos[0].Cantidad}</h1>


</div>
)

  
})

}





</div>


  );

}


}







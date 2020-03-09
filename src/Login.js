import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";


export default class Clientes extends Component {


constructor(){
super();


this.state={

Usuario:"",
Contraseña:"",
pasaste:false


}




}

asignaValor = (etiqueta) => {


this.setState({

[etiqueta.target.name]:etiqueta.target.value


})


}

Enviar=(e) => {

e.preventDefault();

axios.post("http://localhost:8080/restback/index.php/Clientes/ValidarUsuarios",{Usuario:this.state.Usuario,Contraseña:this.state.Contraseña}).then( (respuesta) => {

console.log("se envio");

if(respuesta.data==true) {

localStorage.setItem("Usuario",this.state.Usuario);

alert("Bienvenido");

this.setState({

pasaste:respuesta.data


})


}

else {

alert("USUARIO O CONTRASEÑA INCONRRECTO");

console.log("se envio" + respuesta.data);
}



} ).catch( (Error) => {

console.log(Error);

} )


}








render(){

if (this.state.pasaste==false) {

  return (

  <div class="d-flex align-items-center justify-content-center container" Style="height: 100vh;">

    <div class="row   rounded justify-content-center fondoBarra" Style="padding:60px;">

    <div class="col-12">



    <h1 class="text-center text-white font-weight-bold" Style="font-family:arial;">SpeedWork</h1>

    <form onSubmit={this.Enviar}>

    <input type="text"  class="m-3" placeholder="Usuario" name="Usuario" onChange={this.asignaValor} required/>

    <br />

    <input type="password"   class="m-3" placeholder="Contraseña" name="Contraseña" onChange={this.asignaValor} required/>


    <br />



    <input type="submit"  name="" id="" class="m-3 btn bg-white" value="Acceder" />




    </form>



    </div>

    </div>

    </div>

  )



}



else if(this.state.pasaste==true){

return (
<div>
<Redirect to="/Principal" />
  </div>
)





}




}




}

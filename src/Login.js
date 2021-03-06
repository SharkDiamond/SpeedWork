import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Ip} from "./Ip";


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

});


}

  Enviar=(e) => {

  e.preventDefault();

    axios.post("http://"+Ip+":8081/Users",{User:this.state.Usuario,Password:this.state.Contraseña}).then( (respuesta) => {


  if(respuesta.data.happen==true) {

    toast.success("¡Bienvenido "+this.state.Usuario + "!");

    localStorage.setItem("Usuario",this.state.Usuario);

    this.setState({

      pasaste:respuesta.data.happen

});


}

  else toast.error("Contraseña Incorrecta!");

  }).catch( (error) => {


    const [E1,E2]=error.response.data.Errors;

    console.log(error.response.data.Errors);

      toast.error(E1,E2);


});


  }



  render(){


  toast.configure();


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

              <input type="submit"  name="" id="" class="m-3 btn bg-white" value="Acceder"  />



              </form>




            </div>

          </div>

        </div>

      )



}

    else if(this.state.pasaste==true){

      return(
        <div>
        <Redirect to="/Principal"/>
        </div>
      );

}

  }

}
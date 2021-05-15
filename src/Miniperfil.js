import React, { Component } from 'react';


import axios from "axios";

export default class Miniperfil extends Component {




constructor(){
    super();

    this.state={
   numero:null,
   nombre:"",
Direccion:"",
dr:[]
    }
    this.imprime=this.imprime.bind(this);

    }


     imprime(Nuevo){

    console.log("SE EJECUTA IMPRIME EN MINIPERFIL",this.props.informationCliente);

//SI TODO SALE BIEN
this.setState({

dr:this.props.informationCliente

})


this.state.dr.forEach(element => {

if (Nuevo==element.idClientes){

    this.setState({

        nombre:element.Nombre,
        Direccion:element.Direccion,
        numero:element.Telefono

    });




}


});

//setTimeout(20,this.imprime());


}


//COLOCAR EL METODO DE ACTUALIZACION


//RECIBIENDO LA NUEVA PROPIEDAD
componentWillReceiveProps(nextProps){

this.imprime(nextProps.idFiltro);

}


    render() {

return (

            <div className="" align="center">

<div class="card  mb-3 minip bg-white"  onClick={this.imprime}>
  <div class="card-header bg-transparent border-primary"><h3 className="font-weight-bold">{this.state.nombre}</h3></div>
  <div class="card-body text-success">
    <h5 class="card-title font-weight-bold text-primary">Numeros De Telefono</h5>
    <p class="card-text text-dark font-weight-bold" >{this.state.numero}</p>
      <h5 class="card-title font-weight-bold text-primary">Direccion</h5>
    <p class="card-text text-dark font-weight-bold">{this.state.Direccion}</p>

  </div>

</div>
            </div>


      )
    }




}

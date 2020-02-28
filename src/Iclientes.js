import React, { Component } from 'react';


import axios from "axios";

export default class Iclientes extends Component {
   
   
   

constructor(){
    super();
    
    this.state={
    eleccion:"ID",
    datobusqueda:"",
cliente:1,



    }
    
this.AsignarDatos=this.AsignarDatos.bind(this);
   

    }
    
//Para lo del placesholder
cambia=(etiqueta)=>{

this.setState({


eleccion:etiqueta.target.value

})


}


//ASIGNAR AL ESTADO EL VALOR DEL FORMULARIO

AsignarDatos(etiqueta){

const valor=etiqueta.target.value;
this.setState({

datobusqueda:valor



})




}

componentWillReceiveProps(nextProps){

    if(nextProps.Titulo==="VIP"){


        this.setState({
        
        cliente:1
        
        
        })
        
        
        }
        
        else if(nextProps.Titulo==="Comercial"){
        
        this.setState({
        
        cliente:2
       
        
        }) 
        
        
        }
        
        else if(nextProps.Titulo==="Residencial"){ 
        
        this.setState({
        
        cliente:3
        
        
        }) 
        
        
        }
        

}


onSubmit= async (e)=>{

this.props.pasafuncion();
e.preventDefault();

await axios.post("http://localhost:8080/restback/index.php/Clientes/Resultados",{
Tipo:this.state.cliente,
dato:this.state.datobusqueda,
campo:this.state.eleccion

}).then((respuesta)=>{

//SI TODO SALE BIEN

if (respuesta.data) {


this.props.enviarResultados(respuesta.data);


} 

else {

var nhr=["No Hay Resultados"];


this.props.enviarResultados(nhr);




}


}).catch((error)=>{

//SI OCURRE UN PROBLEMA

alert("problemas");
console.log(error);
});

}



   
    render() {


if (this.props.crearClienteoBuscar==1) {
 
return (
 <div className="mb-4 container">


<div className="row fondoBarra rounded">

<div className="col-12 ">  


<h1 className="text-white letra1 p-2 text-center font-weight-bold">{this.props.Titulo}</h1>




<form className="mb-1 mt-1 text-center" onSubmit={this.onSubmit}>


<input type="text" placeholder={this.state.eleccion} id="datobusqueda" name="datobusqueda" onChange={this.AsignarDatos} value={this.state.datobusqueda} required/> 
<br/>
<br/>
<select className="seleccion" onClick={this.cambia} id="filtrobusqueda" name="filtrobusqueda">
<option value="ID">ID</option>

<option value="Nombre">Nombre</option>

<option value="Telefono">Telefono</option>
</select>



<br/>}

<input type="submit" placeholder="Buscar" value="Buscar" className="mt-3 bg-success btn"  />

</form>


<h1 className="text-white letra1 h1 text-center">{this.props.Cantidad}</h1>






</div>







</div>


            </div>
      


  )  






}      
    

if (this.props.crearClienteoBuscar==2) {

return(
 <div className="fondoBarra col-11 p-2 rounded" >

<form className="text-center">
<h1 className="colorVerde font-weight-bold">Clientes</h1>
<input type="text"  placeholder="Nombre"/>
<br/>
<br/>
<input type="text"  placeholder="Apellido"/>
<br/>
<br/>
<input type="text"  placeholder="Direccion"/>
<br/>
<br/>
<input type="number"  placeholder="Telefono"/>
<br/>
<br/>
<input type="text"  placeholder="Correo Electronico"/>
<br/>
<br/>
<select className="mb-3">
<option>Residencial</option>
<option>Comercial</option>
<option>VIP</option>
</select>
<br/>
<input type="submit" value="Crear" />

</form>
</div>
)




}


    }




}

import React, { Component } from 'react'
import "./App.css";
export default class MD extends Component {
    
    
    
    
    render() {
       
       
       
       if (this.props.muestra==1) {
           
        return (
            <div className="container-fluid">
               
<h1 className="letrageneral display-4 font-weight-bold d-inline">Clientes</h1>

<button className="btn bg-white boton float-right" id={0} onClick={this.props.enviaFuncion}>Volver</button>


<br/>
<br/>

<div className="row justify-content-center">




<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Enero}</p>
<p className="text-white font-weight-bold">Enero</p>
</div>


<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Febrero}</p>
<p className="text-white font-weight-bold">Febrero</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Marzo}</p>
<p className="text-white font-weight-bold">Marzo</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Abril}</p>
<p className="text-white font-weight-bold">Abril</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Mayo}</p>
<p className="text-white font-weight-bold">Mayo</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Junio}</p>
<p className="text-white font-weight-bold">Junio</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Julio}</p>
<p className="text-white font-weight-bold">Julio</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Agosto}</p>
<p className="text-white font-weight-bold">Agosto</p>
</div>


<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Septiembre}</p>
<p className="text-white font-weight-bold">Septiembre</p>
</div>

<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Octubre}</p>
<p className="text-white font-weight-bold">Octubre</p>
</div>




</div>


<div className="row align-items-end izquierda">

<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Noviembre}</p>
<p className="text-white  font-weight-bold">Noviembre</p>
</div>


<div className="col-2">
<p className="text-white">{this.props.EnviaDatos.Diciembre}</p>
<p className="text-white font-weight-bold">Diciembre</p>
</div>



</div>

            </div>
        )

       }
       
       
       else if(this.props.muestra==2) {
           
        return (
            <div className="container-fluid">
                 
<h1 className="letrageneral display-4 font-weight-bold d-inline">Reportes</h1>

<button className="btn bg-white boton float-right" id={0} onClick={this.props.enviaFuncion}>Volver</button>


<br/>
<br/>

<div className="row justify-content-center">



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Enero}</p>
<p className="text-white font-weight-bold">Enero</p>
</div>


<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Febrero}</p>
<p className="text-white font-weight-bold">Febrero</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Marzo}</p>
<p className="text-white font-weight-bold">Marzo</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Abril}</p>
<p className="text-white font-weight-bold">Abril</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Mayo}</p>
<p className="text-white font-weight-bold">Mayo</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Junio}</p>
<p className="text-white font-weight-bold">Junio</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Julio}</p>
<p className="text-white font-weight-bold">Julio</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Agosto}</p>
<p className="text-white font-weight-bold">Agosto</p>
</div>


<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Septiembre}</p>
<p className="text-white font-weight-bold">Septiembre</p>
</div>

<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Octubre}</p>
<p className="text-white font-weight-bold">Octubre</p>
</div>




</div>


<div className="row align-items-end izquierda">

<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Noviembre}</p>
<p className="text-white  font-weight-bold">Noviembre</p>
</div>


<div className="col-2">
<p className="text-white">{this.props.EnviaDatos.Diciembre}</p>
<p className="text-white font-weight-bold">Diciembre</p>
</div>


</div>



            </div>
        )

       }
       
 
       else if(this.props.muestra==3) {
           
        return (
            <div className="container-fluid">
                
 
<h1 className="letrageneral display-4 font-weight-bold d-inline">Visitas</h1>

<button className="btn bg-white boton float-right" id={0} onClick={this.props.enviaFuncion}>Volver</button>


<br/>
<br/>

<div className="row justify-content-center">



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Enero}</p>
<p className="text-white font-weight-bold">Enero</p>
</div>


<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Febrero}</p>
<p className="text-white font-weight-bold">Febrero</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Marzo}</p>
<p className="text-white font-weight-bold">Marzo</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Abril}</p>
<p className="text-white font-weight-bold">Abril</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Mayo}</p>
<p className="text-white font-weight-bold">Mayo</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Junio}</p>
<p className="text-white font-weight-bold">Junio</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Julio}</p>
<p className="text-white font-weight-bold">Julio</p>
</div>



<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Agosto}</p>
<p className="text-white font-weight-bold">Agosto</p>
</div>


<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Septiembre}</p>
<p className="text-white font-weight-bold">Septiembre</p>
</div>

<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Octubre}</p>
<p className="text-white font-weight-bold">Octubre</p>
</div>




</div>


<div className="row align-items-end izquierda">

<div className="col-2 mr-2">
<p className="text-white">{this.props.EnviaDatos.Noviembre}</p>
<p className="text-white  font-weight-bold">Noviembre</p>
</div>


<div className="col-2">
<p className="text-white">{this.props.EnviaDatos.Diciembre}</p>
<p className="text-white font-weight-bold">Diciembre</p>
</div>

</div>


            </div>
        )

       }





    }
}

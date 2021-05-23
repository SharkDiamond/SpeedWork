import React, { Component } from 'react';
import axios from "axios";
import { Link} from "react-router-dom";
import {toast} from "react-toastify";


export default class Iclientes extends Component {

    constructor(){
    toast.configure();
        super();

        const  [nodefinido,dato,campo,clientType]=window.location.hash.split("#",4);

        //COLOCAR UN CONDICIONAL POR SI VIENEN VACIOS


        console.log(window.location.href);
       // http://localhost:3000/Clientes/data

        //STATE SEGUN LA URL
        if (window.location.href!=="http://localhost:3000/Clientes/data"){

            let r1=""+campo;
            let r2=""+dato;
            let r3=parseInt(clientType);


            this.state={

                eleccion:r1,
                datobusqueda:r2,
                cliente:r3,
                uri:"./Clientes/data"

            }




        }

        else{

            this.state={

                eleccion:"Nombre",
                datobusqueda:"",
                cliente:1,
                uri:"./Clientes/data"

            }

        }




        this.AsignarDatos=this.AsignarDatos.bind(this);

    }


    onSubmit=(e)=>{

        this.props.pasafuncion();

        e.preventDefault();

        axios.post("http://localhost:8081/SearchClients/search",{
            Tipo:this.state.cliente,
            dato:this.state.datobusqueda,
            campo:this.state.eleccion
        }).then((respuesta)=>{

            //SI TODO SALE BIEN

            if (respuesta.data.Clients) {

                this.props.enviarResultados(respuesta.data.Clients);

                toast.success(respuesta.data.Clients.length+" Resultados Encontrados");

            }

            else {

                var nhr=["No Hay Resultados"];

                toast.error("No Hay Resultados");

                this.props.enviarResultados(nhr);

            }


        }).catch(error  => toast.info(error.response.data.Errors[0]));

    }



    componentDidMount() {

        if (window.location.href!=="http://localhost:3000/Clientes/data") document.getElementById("SD").click();

    }

//Para lo del placesholder
    cambia=(etiqueta)=>{

        this.setState({

            eleccion:etiqueta.target.value

        });


}


//ASIGNAR AL ESTADO EL VALOR DEL FORMULARIO

    AsignarDatos(etiqueta){

        const valor=etiqueta.target.value;

        this.setState({

            datobusqueda:valor

});


}


    componentWillReceiveProps(nextProps){

        if(nextProps.Titulo==="VIP"){

            this.setState({

                cliente:1

            });

        }

        else if(nextProps.Titulo==="Comercial"){

             this.setState({

                 cliente:2

             });

        }

        else if(nextProps.Titulo==="Residencial"){

            this.setState({

                 cliente:3

            });

        }
        

    }




   
    render() {

        //RENDERIZADO DE BUSQUEDA
        if (this.props.crearClienteoBuscar==1) {
 
            return (

                <div className="mb-4 container">

                <div className="row fondoBarra rounded">

    <div className="col-12 ">


    <h1 className="text-white letra1 p-2 text-center font-weight-bold">{this.props.Titulo}</h1>




    <form className="mb-1 mt-1 text-center">


    <input type="text" placeholder={this.state.eleccion} id="datobusqueda" name="datobusqueda" onChange={this.AsignarDatos} value={this.state.datobusqueda} required/>
    <br/>
    <br/>
    <select className="seleccion" onClick={this.cambia} id="filtrobusqueda" name="filtrobusqueda" >

    <option value="ID" selected={this.state.eleccion=="ID" ? true : false }>ID</option>

    <option value="Nombre" selected={this.state.eleccion=="Nombre" ? true : false}>Nombre</option>

    <option value="Telefono" selected={this.state.eleccion=="Telefono" ? true : false}>Telefono</option>
    </select>



    <br/>}

        <span onClick={this.onSubmit}><Link to={"#"+this.state.datobusqueda+"#"+this.state.eleccion+"#"+this.state.cliente}><input id="SD" type="submit" placeholder="Buscar" value="Buscar" className="mt-3 bg-success btn"/></Link ></span>

    </form>


    <h1 className="text-white letra1 h1 text-center">{this.props.Cantidad}</h1>






    </div>







    </div>


                </div>



  )  






}      
    
        //RENDERIZADO DE CLIENTES
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
<input type="text"  placeholder="SDASD"/>
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

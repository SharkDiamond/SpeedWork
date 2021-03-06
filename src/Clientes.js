import React, { Component } from 'react';
import Iclientes from "./Iclientes.js";
import vip from "./imagenes/vip.png";
import tienda from "./imagenes/tienda.png";
import casa from "./imagenes/casa.png";
import Miniperfil from "./Miniperfil.js";
import axios from "axios";
import './App.css';
import ParteMediaClientes from "./ParteMediaClientes";
import Barra from "./Barra.js";
import {Link,useParams} from "react-router-dom";
import {Ip} from "./Ip";



export default class Clientes extends Component {

    constructor(){

        super();

        let typeClient=window.location.href.length-1;

        let ClientsType={
            '1':"VIP",
            '2':"Comercial",
            '3':"Residencial"

        }
        
        this.state={
            //"fondominibarra"
            tipoCliente:window.location.href[typeClient]!=='a' ? ClientsType[window.location.href[typeClient]] : 'VIP',
            primera:window.location.href[typeClient]=='a' || '1' ? "fondominibarra" : '',
            segunda:window.location.href[typeClient]=='2'  ? "fondominibarra" : '',
            tercera:window.location.href[typeClient]=="3"  ? "fondominibarra" : '',
            primerafila:false,
            segundafila:false,
            veri:"col-4  pt-3 cajaminip rounded fondoBarra d-none",
            cantidad:0,
            cancelados:0,
            resultadosbusqueda:[],
            perfiles:null,
            BOC:false

    }


    


//CODIGO PARA PODER USAR THIS EN LOS METODOS

        this.PEDIR=this.PEDIR.bind(this);
        this.ObteniendoResultados=this.ObteniendoResultados.bind(this);
        this.ver=this.ver.bind(this);


    }

//METODO PARA PEDIR  LOS DATOS DE LAS CANTIDADES DE CLIENTES TANTO ACTIVOS COMO CANCELADOS

    PEDIR(tipo){

        switch(tipo){

            case "VIP":

                axios.post("http://"+Ip+":8081/amountClients/amount",{Type:1}).then((respuesta)=>{

                this.setState({

                    cantidad:respuesta.data.amountClients,
                    cancelados:respuesta.data.cancelClients

                    })



                }).catch((error)=>{

                    alert("ERROR");


                    }

                    );

            break;

            case "Comercial":


                axios.post("http://"+Ip+":8081/amountClients/amount",{Type:2}).then((respuesta)=>{

                    this.setState({

                        cantidad:respuesta.data.amountClients,
                        cancelados:respuesta.data.cancelClients


                    })



                }).catch((error)=>{

                    alert("ERROR");


                }


                );

            break;


            case "Residencial":

                axios.post("http://"+Ip+":8081/amountClients/amount",{Type:3}).then((respuesta)=>{



                    this.setState({

                        cantidad:respuesta.data.amountClients,
                        cancelados:respuesta.data.cancelClients

                    })




                }).catch((error)=>{

                        alert("ERROR");


                    }


                    );



            break;

            default:
                
            alert("Ningun Caso");

}




}

//METODO  QUE SE EJECUTA LUEGO DE QUE SE RENDERICE EL COMPONENTE FATA EL ASYNC Y EL AWAIT

    componentDidMount(){

        axios.post("http://"+Ip+":8081/amountClients/amount",{Type:1}).then((respuesta)=>{

            this.setState({

                cantidad:respuesta.data.amountClients,
                cancelados:respuesta.data.cancelClients
            });

        }).catch((error)=>{

            alert("ERROR");

        }

        );


    }


    ObteniendoResultados(result){


        let encuentra=window.location.href;
        
        let indice=0;

for (let index = 0; index < encuentra.length; index++) {
   
   if (encuentra[index]=="-") {
       
    indice=index;

    break;

   }
    
}


        this.setState({

            resultadosbusqueda:result


        });

        if ( window.location.href[indice]=="-"){
            
            //#35

            let y;
            //ONE DIGIT NUMBER   #37
            if (window.location.href[indice+2]=="#") {

                let p1=indice+1;
                let p2=indice+2;


                y=parseInt(window.location.href.slice(p1,p2));
                  //  36
                this.setState({

                    resultadosbusqueda:result,
                    perfiles:y

                });

                this.ver();

            }

            //TWO DIGIT NUMBER
            else  if (window.location.href[indice+3]=="#") {

                let p1=indice+1;
                let p2=indice+3;

               y=parseInt(window.location.href.slice(p1,p2));

                this.setState({

                    resultadosbusqueda:result,
                    perfiles:y

                });


                this.ver();


            }

            //THREE DIGIT NUMBER
            else  if (window.location.href[indice+4]=="#") {

                let p1=indice+1;
                let p2=indice+4;

                y=parseInt(window.location.href.slice(p1,p2));

                this.setState({

                    resultadosbusqueda:result,
                    perfiles:y

                });


                this.ver();


            }

            //FOUR DIGIT NUMBER
            else  if (window.location.href[indice+5]=="#") {

                let p1=indice+1;
                let p2=indice+5;

                y=parseInt(window.location.href.slice(p1,p2));

                this.setState({

                    resultadosbusqueda:result,
                    perfiles:y

                });


                this.ver();


            }

        }

else{}

    }


    cambiacliente=(etiqueta)=>{

        if (etiqueta.target.id==="VIP") {

            this.setState({

                tipoCliente:etiqueta.target.id,
                primera:"fondominibarra",
                segunda:"",
                tercera:""

        });

            this.PEDIR(etiqueta.target.id);

}

        else if (etiqueta.target.id==="Comercial") {


            this.setState({

                tipoCliente:etiqueta.target.id,
                primera:"",
                segunda:"fondominibarra",
                tercera:""

            })


            this.PEDIR(etiqueta.target.id);


}

        else if (etiqueta.target.id==="Residencial") {


            this.setState({

                tipoCliente:etiqueta.target.id,
                primera:"",
                segunda:"",
                tercera:"fondominibarra"

            })




        this.PEDIR(etiqueta.target.id);


}





}

//METODO QUE SE EJECUTA CUANDO SE HACE CLICK SOBRE UN ELEMENTO DE LA LISTA

    clienteElegido=(e)=>{

        this.setState({

            perfiles:e.target.id

        })

        this.ver();

}


    ver(){

//quesevea col-4  pt-3 cajaminip rounded fondoBarra

        var segundacolumna=document.getElementById("perfil");

        var componente=document.getElementById("componenteperfil");


        if (this.state.segundafila===false) {

            this.setState({

                segundafila:true,
                veri:"quitar"

            })


        segundacolumna.className="quesevea col-4  pt-3 cajaminip rounded fondoBarra";

            setTimeout(()=>{

            componente.className="";

        },300);



        }

    }



    ver2=()=>{

        var fila=document.getElementById("resultado");

        if (this.state.primerafila===false) {

            this.setState({

                primerafila:true

            })


            fila.className="quesevea col-6 fondoBarra rounded";

}




}


    CambiarAbuscarOCrear=()=>{


        if (this.state.BOC==true) {
            
            this.setState({

                BOC:false

            })

            if (this.state.tipoCliente=="Residencial") {
                
                this.PEDIR("Residencial");

            }

            if (this.state.tipoCliente=="Comercial") {

                this.PEDIR("Comercial");

            }

            if (this.state.tipoCliente=="VIP") {

                this.PEDIR("VIP");

            }



        }


        if (this.state.BOC==false) {

            this.setState({

                BOC:true


            })


        }



    }





    render() {


        if (localStorage.getItem("Usuario")) {


            return (

              <div className="container  p-3 rounded">

                <Barra/>


                <br/>

                <br/>

                <br/>

                <br/>

                <br/>

                <br/>

                <br/>

  <div className="row p-3 fondoBarra rounded "  Style="height:300px">


  <div className="col-2 rounded p-3 ">
  <div className="text-center">

  <img src={vip} width="80px" heigh="80px" className={this.state.primera} alt="" id="VIP" onClick={this.cambiacliente}/>


  <img src={tienda} width="80px" heigh="80px" className={this.state.segunda} alt="" id="Comercial" onClick={this.cambiacliente}/>



  <img src={casa} width="80px" heigh="80px" className={this.state.tercera} alt="" id="Residencial" onClick={this.cambiacliente}/>

     </div>
  </div>




  <div className="col-6 fondoBarra text-center  rounded  p-3 border " Style="height:270px">



  <button className="btn bg-white ml-2 rounded-circle mb-4" Style=" position:absolute; left:500px; top:3px;" onClick={this.CambiarAbuscarOCrear}>+</button>


  <ParteMediaClientes crearOver={this.state.BOC} cantidad={this.state.cantidad} cancelados={this.state.cancelados} />


  </div>


  <div className="col-4">

  <div>
  <br/>

  <Iclientes crearClienteoBuscar={1} Titulo={this.state.tipoCliente} pasafuncion={this.ver2} enviarResultados={this.ObteniendoResultados}/>
  </div>

  </div>


       </div>




  <div className="row  mt-4 rounded justify-content-center">



  <div className="quitar" id="resultado">

  <br/>

  <h1 className="text-center display-4 text-white font-weight-bold">Resultados</h1>
  <br/>

<ul className="">

  {

  this.state.resultadosbusqueda.map((elementos)=>{

  if (elementos==="No Hay Resultados") {

  return <li className="text-danger h4 font-weight-bold">No hay resultado</li>

  }

   return  <Link to={"-"+this.state.perfiles+window.location.hash} className="quitarHi"><li className=" colorVerde h4 font-weight-bold border-right border-success " onClick={this.clienteElegido} id={elementos.idClientes} >{elementos.Nombre}</li></Link>

  })

  }

  </ul>


  <br/>

  </div>


  <div className="quitar"  id="perfil">
  <div className="d-none" id="componenteperfil">
  <Miniperfil  idFiltro={this.state.perfiles} informationCliente={this.state.resultadosbusqueda}/>
  </div>

  </div>


  </div>






              </div>


        )






}


if (localStorage.getItem("Usuario")==undefined) {

return(

<div>


<h1 className="text-center font-weight-bold display-1">Pagina No Encontrada</h1>


</div>



)



}



    }




}

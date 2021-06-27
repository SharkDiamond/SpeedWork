import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Reporte from "./Reporte";
import {Ip} from "./Ip";
import {toast} from "react-toastify";
import {Bar,Pie} from "react-chartjs-2";


export default class Grafica extends Component  {

    constructor(){

        super();

        this.state={

        }

    }

    render(){

        const data = {

            labels: [this.props.DataGrafict[0].Mes,this.props.DataGrafict[1].Mes,this.props.DataGrafict[2].Mes,this.props.DataGrafict[3].Mes,this.props.DataGrafict[4].Mes,this.props.DataGrafict[5].Mes,this.props.DataGrafict[6].Mes,this.props.DataGrafict[7].Mes,this.props.DataGrafict[8].Mes,this.props.DataGrafict[9].Mes,this.props.DataGrafict[10].Mes,this.props.DataGrafict[11].Mes],

            datasets: [
                {
                    label: 'Cantidad de Clientes',

                    data: [this.props.DataGrafict[0].Cantidad,this.props.DataGrafict[1].Cantidad,this.props.DataGrafict[2].Cantidad,this.props.DataGrafict[3].Cantidad,this.props.DataGrafict[4].Cantidad,this.props.DataGrafict[5].Cantidad,this.props.DataGrafict[6].Cantidad,this.props.DataGrafict[7].Cantidad,this.props.DataGrafict[8].Cantidad,this.props.DataGrafict[9].Cantidad,this.props.DataGrafict[10].Cantidad,this.props.DataGrafict[11].Cantidad],
                    backgroundColor: [
                        'rgb(120,140,139)',
                        'rgb(171,200,198)',
                        'rgb(215,213,200)',
                        'rgb(255,120,65)',
                        'rgb(0,186,201)',
                        'rgb(0,119,149)',

                        'rgb(16,215,209)',
                        'rgb(255,253,253)',
                        'rgb(246,31,42)',
                        'rgb(234,250,7)',
                        'rgb(34,99,241)',
                        'rgb(105,255,182)'

                    ],
                    borderColor: [
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                    ],

                    borderWidth: 1,
                },
            ],
        };

        const data2 = {

            labels: [this.props.DataGrafict[0].Mes,this.props.DataGrafict[1].Mes,this.props.DataGrafict[2].Mes,this.props.DataGrafict[3].Mes,this.props.DataGrafict[4].Mes,this.props.DataGrafict[5].Mes,this.props.DataGrafict[6].Mes,this.props.DataGrafict[7].Mes,this.props.DataGrafict[8].Mes,this.props.DataGrafict[9].Mes,this.props.DataGrafict[10].Mes,this.props.DataGrafict[11].Mes],

            datasets: [
                {
                    label: 'Cantidad de Clientes',

                    data: [this.props.DataGrafict[0].Cantidad,this.props.DataGrafict[1].Cantidad,this.props.DataGrafict[2].Cantidad,this.props.DataGrafict[3].Cantidad,this.props.DataGrafict[4].Cantidad,this.props.DataGrafict[5].Cantidad,this.props.DataGrafict[6].Cantidad,this.props.DataGrafict[7].Cantidad,this.props.DataGrafict[8].Cantidad,this.props.DataGrafict[9].Cantidad,this.props.DataGrafict[10].Cantidad,this.props.DataGrafict[11].Cantidad],
                    backgroundColor: [
                        'rgb(0,186,201)',
                        'rgb(0,186,201)',
                        'rgb(0,186,201)',
                        'rgb(0,186,201)',
                        'rgb(0,186,201)',
                        'rgb(0,186,201)',

                        'rgb(0,186,201)',
                        'rgb(0,186,201)',
                        'rgb(0,186,201)',
                        'rgb(0,186,201)',
                        'rgb(0,186,201)',
                        'rgb(0,186,201)'

                    ],
                    borderColor: [
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                        'rgb(9,9,9)',
                    ],

                    borderWidth: 1,
                },
            ],
        };


        const options = {
            color:'rgb(0,0,0)',
            scales: {

                yAxes: [
                    {
                        ticks: {
                            beginAtZero: false,
                        },
                    },
                ],
            },
            };

        const options2 = {
            color:'rgb(0,0,0)',
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: false,

                        },
                    },
                ],
            },
            };

            return (

          <div className="row bg-white rounded m-1">


              <div className="col-5 ">
                  <canvas width="0" height="0"></canvas>
                  <Pie data={data} options={options2} />

              </div>
              <div className="col-7 tama bg-white">
                  <h1 className="tama2  font-weight-bold mt-4">Grafica de Barras</h1>
                  <Bar data={data2} options={options}/>


              </div>


                  <div className="col-6 pb-2">

                      <button className="float-right btn btn-dark rounded " onClick={this.props.back}>Volver</button>
                  </div>






          </div>


            )
    }




}
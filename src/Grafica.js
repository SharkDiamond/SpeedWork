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

            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],

            datasets: [
                {
                    label: 'Cantidad de Clientes',

                    data: [44, 100, 37, 54, 28, 34,44,35,65,30,50,60],
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

            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],

            datasets: [
                {
                    label: 'Cantidad de Clientes',

                    data: [44, 100, 37, 54, 28, 34,44,35,65,30,50,60],
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

                      <button className="float-right btn btn-dark rounded ">Volver</button>
                  </div>






          </div>


            )
    }




}
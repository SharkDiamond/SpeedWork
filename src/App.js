import React from 'react';

import './App.css';
import Barra from "./Barra";
import Principal from "./Principal";
import Clientes from "./Clientes";

import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <div className="fondo">
    <Router>
  <Barra/>

 
    <br/>

    <br/>

    <br/>

    <br/>

    <br/>

    <br/>

    <br/>

    

<Route path="/" exact component={Principal}/>

<Route path="/Clientes" exact component={Clientes}/>

    </Router>
  










    </div>
  );
}

export default App;

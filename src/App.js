import React from 'react';

import './App.css';
import Barra from "./Barra";
import Principal from "./Principal";
import Clientes from "./Clientes";
import Departamentos from "./Departamentos";
import Crear from "./Crear";
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

<Route path="/Departamentos" exact component={Departamentos}/>
<Route path="/Agenda" exact component={Departamentos}/>
<Route path="/Reportes" exact component={Departamentos}/>
<Route path="/Crear" exact component={Crear}/>
    </Router>
  










    </div>
  );
}

export default App;

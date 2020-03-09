import React from 'react';

import './App.css';
import Barra from "./Barra";
import Principal from "./Principal";
import Clientes from "./Clientes";
import Departamentos from "./Departamentos";
import Crear from "./Crear";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login.js";


function App() {

  return (
    <div className="fondo">
    <Router>


<Route path="/" exact component={Login}/>
<Route path="/Principal" exact component={Principal}/>
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

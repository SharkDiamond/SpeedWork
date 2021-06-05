import React from 'react';

import './App.css';

import Principal from "./Principal";
import Clientes from "./Clientes";
import Departamentos from "./Departamentos";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login.js";


function App() {

  return (
    <div className="fondo">
    <Router>


<Route path="/" exact component={Login}/>
<Route  path="/Principal" exact component={Principal}/>
<Route  path="/Clientes/:data" exact component={Clientes}/>
<Route  path="/Departamentos/:nombre" exact component={Departamentos}/>
<Route path="/Agenda" exact component={Departamentos}/>
<Route path="/Reportes" exact component={Departamentos}/>


    </Router>



    </div>
  );
}

export default App;

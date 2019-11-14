import React, { Component,useState } from 'react';
import './App.css';

import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


export default class Barra extends Component {

  

  render() {

        return (
            <div className="p-3 container-fluid fondoBarra text-center">
 
<a className="d-inline m-3 letra">Clientes</a>

<a className="d-inline m-3 letra">Departamentos</a>


<a className="d-inline m-3 letra">Reportes</a>



<a className="d-inline m-3 letra">Circuitos</a>


      </div>
        )
    }
}

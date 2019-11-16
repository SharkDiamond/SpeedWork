import React from 'react';

import './App.css';
import Barra from "./Barra";
import InformeG from "./InformeG";
import PUsuario from "./PUsuario";
function App() {
  return (
    <div className="fondo">
    
    <Barra/>

    <br/>
    <br/>
    <div className="row m-3">

   


<div className="col-8">


<InformeG/>


</div>
   
<div className="col-4">
<PUsuario/>
</div>

  
    </div>






    </div>
  );
}

export default App;

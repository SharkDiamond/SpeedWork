<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


     require APPPATH . 'libraries/REST_Controller.php';

class Peticion extends REST_Controller {


   public function __construct() {
               parent::__construct();
              // $this->load->model('user_model');
    

//CARGO LA CONEXION
    $this->load->database();
       }  







  public function General_get(){
      //GENERO LA CONSULA PARA OBTENER TODOS LOS CLIENTES
$consulta1=$this->db->query("select * from Clientes");
  
  //GENERO LA CONSULTA PARA OBTENER TODOS LOS REPORTESS
$consulta2=$this->db->query("select * from Reportes");

  //GENERO LA CONSULTA PARA OBTENER TODOS LOS TICKET QUE PERTENEZCAN AL DEPARTAMENTO DE VISITAS ES DECIR LAS VISITAS
$consulta3=$this->db->query("select * from Reportes where PertenenciaDepartamento=1");

//GUARDO EN UN ARREGLO CUANTAS FILAS TRAJO LA COLUMNA
$resultado = array('CLIENTES' => $consulta1->num_rows(),"REPORTES"=>$consulta2->num_rows(),"VISITAS"=>$consulta3->num_rows());
           

//RESPONDO LA SOLUCITUD
           $this->response($resultado); 


//CIERRO LA CONEXION
           $this->db->close();
       }
   


public function ClientesEnMes_get(){

for ($i=1; $i<=12; $i++) { 


$consulta=$this->db->query("select * from Clientes where MONTH(FechaCreacionPerfil)=" . $i . " and EstadoCliente=true");


$valorarreglo=$i-1;

$MESESVALORES[$valorarreglo]=$consulta->num_rows();


}

$MESES = array('Enero'=>$MESESVALORES[0],"Febrero"=>$MESESVALORES[1],"Marzo"=>$MESESVALORES[2],"Abril"=>$MESESVALORES[3],"Mayo"=>$MESESVALORES[4],"Junio"=>$MESESVALORES[5],"Julio"=>$MESESVALORES[6],"Agosto"=>$MESESVALORES[7],"Septiembre"=>$MESESVALORES[8],"Octubre"=>$MESESVALORES[9],"Noviembre"=>$MESESVALORES[10],"Diciembre"=>$MESESVALORES[11]);

$this->response($MESES);


}

public function ObtenerClientesVip_get(){



$CantidadClientesVip=$this->db->query("select * from Clientes where Tipo=1");

$CantidadClientesVipCancelados=$this->db->query("select * from Clientes where EstadoCliente=false and Tipo=1");


$datos= array('CANTIDAD' => $CantidadClientesVip->num_rows(),'CANCELADOS' => $CantidadClientesVipCancelados->num_rows());

$this->response($datos);


//CIERRO LA CONEXION
           $this->db->close();

}


public function ObtenerClientesComerciales_get(){



$CantidadClientesComerciales=$this->db->query("select * from Clientes where Tipo=2");

$CantidadClientesComercialesCancelados=$this->db->query("select * from Clientes where EstadoCliente=false and Tipo=2");


$datos= array('CANTIDAD' => $CantidadClientesComerciales->num_rows(),'CANCELADOS' => $CantidadClientesComercialesCancelados->num_rows());

$this->response($datos);


//CIERRO LA CONEXION
           $this->db->close();

}


public function ObtenerClientesResidenciales_get(){



$CantidadClientesResidenciales=$this->db->query("select * from Clientes where Tipo=3");

$CantidadClientesResidencialesCancelados=$this->db->query("select * from Clientes where EstadoCliente=false and Tipo=3");


$datos= array('CANTIDAD' =>$CantidadClientesResidenciales->num_rows(),'CANCELADOS' => $CantidadClientesResidencialesCancelados->num_rows());

$this->response($datos);



//CIERRO LA CONEXION
           $this->db->close();

}




}

<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


require APPPATH . 'libraries/REST_Controller.php';




class Clientes extends REST_Controller {



   public function __construct() {
               parent::__construct();
              // $this->load->model('user_model');
    

//CARGO LA CONEXION
    $this->load->database();



       }  


private $Buscar;

 public function setBuscar($valor){
	
$this->Buscar=$valor;


}


public function getBuscar(){
	
	return $this->Buscar;
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


public function ObtenerClientesVip_get(){



$CantidadClientesVip=$this->db->query("select * from Clientes where Tipo=1");

$CantidadClientesVipCancelados=$this->db->query("select * from Clientes where EstadoCliente=false and Tipo=1");


$datos= array('CANTIDAD' => $CantidadClientesVip->num_rows(),'CANCELADOS' => $CantidadClientesVipCancelados->num_rows());

$this->response($datos);


//CIERRO LA CONEXION
           $this->db->close();

}





public function prueba_get(){


$valores;

$cuenta=0;


foreach ($consulta->result_array() as  $valor) {

$valores[$cuenta]= $valor["Nombre"];

$cuenta++;

}

$this->response($valores);



}





public function Resultados_post(){

$datos = json_decode(file_get_contents("php://input"), true); 


$entrada = $datos['dato']; 

$campo=$datos["campo"];

$TipoDeCliente=$datos["Tipo"];

switch ($campo) {
  case 'Nombre':
  
$consulta=$this->db->query("select * from Clientes where Nombre like" . "'" . $entrada . "%' and Tipo=" . $TipoDeCliente);

    break;
  
case 'ID':
 $consulta=$this->db->query("select * from Clientes where IdClientes=" . "'" . $entrada . "' and Tipo=" . $TipoDeCliente);
  break;

case 'Telefono':
$consulta=$this->db->query("select * from Clientes where Telefono like" . "'" . $entrada . "%' and Tipo=" . $TipoDeCliente);
  break;



  default:
    # code...
    break;
}

$r;

if ($consulta->num_rows()>0) {
 $r=true;
$this->response($consulta->result());


}

else{

$r=false;

$this->response($r);




}


}



}


?>

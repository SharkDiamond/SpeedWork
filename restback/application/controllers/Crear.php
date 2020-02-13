<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


require APPPATH . 'libraries/REST_Controller.php';




class Crear extends REST_Controller {



   public function __construct() {
               parent::__construct();
      
//CARGO LA BASE DE DATOS
    $this->load->database();



       }


public function CrearCliente_post(){




}


public function CrearReporte_post(){




}

public function CrearDepartamento_post(){


$datos = json_decode(file_get_contents("php://input"), true); 
/*
$Existe=$this->db->query("select * from Departamentos where NombreDepartamento=" . $datos["Nombre"]);


if ($Existe->num_rows()==1) {

$this->response("Departamento ya existe no se puede volver a crear");

} else {


$data = array(
	'idDepartamento'=>'',
        'NombreDepartamento'=>'' . $datos["Nombre"]
);

$this->db->insert('Departamentos', $data);

*/
}




}

}




?>

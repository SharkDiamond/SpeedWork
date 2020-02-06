<?php
defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');


require APPPATH . 'libraries/REST_Controller.php';




class Departamentos extends REST_Controller {



   public function __construct() {
               parent::__construct();
      
//CARGO LA BASE DE DATOS
    $this->load->database();



       }  



public function DepartamentosListado_get(){

$IDS = $this->db->query("select idDepartamento from Departamentos");

$cuenta=0;


$RESULTADOS;


foreach ($IDS->result_array() as $row){
   
$Nombrecantidad=$this->db->query("select NombreDepartamento,  count(NombreReporte) as Cantidad,idDepartamento from Departamentos inner join Reportes on Departamentos.idDepartamento=Reportes.PertenenciaDepartamento where idDepartamento=" . $row["idDepartamento"]);

$RESULTADOS[$cuenta]=$Nombrecantidad->result();

$cuenta=$cuenta+1;

}


$this->response($RESULTADOS);


$this->db->close();

}


public function EnviarDatos_post(){



$datos = json_decode(file_get_contents("php://input"), true); 



$NombreDepartamento = $datos['numero']; 

$CONSULTA = $this->db->query("select * from Reportes where PertenenciaDepartamento=" . $NombreDepartamento . " and Estado=true");


$this->response($CONSULTA->result());


$this->db->close();

}
public function TituloReporte_post(){



$datos = json_decode(file_get_contents("php://input"), true); 

$CONSULTA = $this->db->query("select NombreReporte,FechaCreacion from Reportes where idReporte=" . $datos["IDentificador"]);


$this->response($CONSULTA->result());

$this->db->close();


}













   }
?>

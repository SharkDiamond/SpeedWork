<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Validaciones  extends CI_Controller {

  
    function __construct()
    {
        parent::__construct();
        $this->load->helper('form');
        $this->load->helper('url');

//CARGO LA CONEXION
    $this->load->database();


    }


        public function index() {


                $this->load->view('Login.php');
        }


   public function valida() {

   $this->load->library('form_validation');

 //$this->load->helper(array('form', 'http://localhost:8080/restback/index.php/Validaciones'));



  $datos = json_decode(file_get_contents("php://input"), true); 



$this->form_validation->set_rules('XZR', 'Username',  array('required'),array( 'required' => 'No Ingreso El Usuario'));
$this->form_validation->set_rules('XQR', 'Password',  array('required'),array( 'required' => 'No Ingreso La Contraseña'));



  if ($this->form_validation->run() == FALSE) {

  	//VUELVE AL LOGIN SI LAS VALIDACIONES FALLAN
                        $this->load->view('Login.php');
                }
                
                else{

                 //ENTRA AQUI SI LAS VALIDACIONESS SON CORRECTAS

$u=$this->input->post("XZR");
$c=$this->input->post("XQR");

$Consulta=$this->db->query("select * from Usuarios where NombreUsuario=" . "'" . $u . "' " . "and Contraseña=" . "'" . $c . "'" );

if ($Consulta->num_rows()>0) {

echo "ENTRASTE";

}



else{


echo "NO ENTRASTE";

}
                       //LO QUE PASA SI LAS VALIDACIONES FUNCIONAN
                }


        }
}







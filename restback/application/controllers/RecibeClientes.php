<?php
defined('BASEPATH') OR exit('No direct script access allowed');


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');




class RecibeClientes extends CI_Controller {




   public function __construct() {
               parent::__construct();
              // $this->load->model('user_model');
    

//CARGO LA CONEXION
    $this->load->database();



       }





       public function buscar(){
       
$this->db->query("delete from Clientes where Nombre=" . "'" . $this->post->("datobusqueda") . "'");


         }  


}

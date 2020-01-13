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




   }
?>

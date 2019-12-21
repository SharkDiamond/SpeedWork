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

       }  




  public function i_get(){
           $r = array('a' => 50,"b"=>40,"c"=>1000);
           $this->response($r); 
       }
   


public function obtencantidad_get(){

$cantidad=array("Reportes"=>55,"Visitas"=>33,"");





}




}

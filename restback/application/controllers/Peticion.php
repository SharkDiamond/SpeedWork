<?php
defined('BASEPATH') OR exit('No direct script access allowed');


//require APPPATH. 'libraries/REST_controller.php';
     require APPPATH . 'libraries/REST_Controller.php';

class Peticion extends REST_Controller {


   public function __construct() {
               parent::__construct();
              // $this->load->model('user_model');

       }  


  public function i_get(){
           $r = array('a' => 1,"b"=>2,"c"=>3);
           $this->response($r); 
       }
   


public function obtencantidad_get(){

$cantidad=array("Reportes"=>55,"Visitas"=>33,"");





}




}

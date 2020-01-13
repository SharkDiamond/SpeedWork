
<?php
  defined('BASEPATH') OR exit('No direct script access allowed');
  ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>SpeedWork</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<link href="https://fonts.googleapis.com/css?family=Enriqueta&display=swap" rel="stylesheet">


    <style type="text/css">
body {
    background: #1CD8D2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #93EDC7, #1CD8D2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #93EDC7, #1CD8D2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  


 }


.fondo{


padding:60px;


background: #283048; 

}

.total{
   
   
    height: 100vh;

}





</style>


</head>
<body>


<div class="  total d-flex align-items-center justify-content-center">



<div class="row  fondo rounded justify-content-center">


<div class="col-12">



<h1 class="text-center text-white font-weight-bold" style="font-family:arial;">SpeedWork</h1>


<?php echo form_open('http://localhost:8080/restback/index.php/Validaciones/valida'); ?>


<input type="text" name="XZR"  class="m-3" placeholder="Usuario">

<br>

<input type="password" name="XQR"  class="m-3" placeholder="Contraseña">


<br>


<h5  style="font-family:arial; font-weight: bold; color: #f2472e" align="center"><?php echo validation_errors();?></h5>



<input type="submit"  name="" id="" class="mt-2 mr-3 ml-3 mb-3  btn bg-white" value="Acceder">



</form>


</div>

</div>






<br>
<br>
<br>

</div>


</body>
</html>

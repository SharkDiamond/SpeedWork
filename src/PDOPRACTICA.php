<?php 

try {
	


$Base =new PDO("mysql:host=localhost; dbname=Usuarios","root","iveth2020");

$consulta="select * from Usuario";







} catch (PDOException $e) {
	$e->getMessage();
}

?>
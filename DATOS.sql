-- MySQL dump 10.16  Distrib 10.1.13-MariaDB, for Linux (i686)
--
-- Host: localhost    Database: SpeedWork
-- ------------------------------------------------------
-- Server version	10.1.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Clientes`
--

DROP TABLE IF EXISTS `Clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Clientes` (
  `idClientes` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(85) NOT NULL,
  `Apellido` varchar(85) DEFAULT NULL,
  `Direccion` varchar(90) NOT NULL,
  `Telefono` varchar(90) NOT NULL,
  `CorreoElectronico` varchar(90) NOT NULL,
  `Tipo` int(11) NOT NULL,
  `FechaCreacionPerfil` date NOT NULL,
  `EstadoCliente` tinyint(1) NOT NULL,
  PRIMARY KEY (`idClientes`),
  KEY `Tipo` (`Tipo`),
  CONSTRAINT `Clientes_ibfk_1` FOREIGN KEY (`Tipo`) REFERENCES `TipoCliente` (`idTipoCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clientes`
--

LOCK TABLES `Clientes` WRITE;
/*!40000 ALTER TABLE `Clientes` DISABLE KEYS */;
INSERT INTO `Clientes` VALUES (1,'Gabriel','Arispe','Calle Carvajal casa 14-60 centro','8565677','gabrielarispe24@gmail.com',3,'2020-01-20',1),(2,'Sergio','Sanchez','Urbanizacion Alto Barinas Norte','645678931','sergiosanchez@gmail.com',3,'2020-02-20',1),(3,'Janmarie','Lopez','Calle Humacao secto Obelizco','5868456','lopezjanma@gmail.com',2,'2020-03-12',1),(4,'Janmarie','L','Calle roberto suarez','2344567','pumagaraje@gmail.com',1,'2020-04-23',1),(5,'EL Sazon',NULL,'Centro Comercial las delicias','47485924','sazon@hotmail.com',2,'2020-05-15',1),(6,'Liberty Express',NULL,'Centro Avenida 24 de diciembre','4748245','express@gmail.com',1,'2020-06-13',1),(7,'Cristian','Ferrer','Urbanizacion Los Azules','7489245','ferrer@gmail.com',3,'2020-07-18',1),(8,'Luna','Azuaje','Avenida Olimpia Sector Centro','74595769','luna123@gmail.com',3,'2020-08-26',1),(9,'Ferreteria TodoMachete',NULL,'Centro Comercial Cima Alta','64828459','todo@hotmail.com',1,'2020-09-01',1),(10,'Los Paseos44',NULL,'Edificion Roble11','3435657','44paseos@gmail.com',2,'2020-10-16',1),(11,'David','Sanchez','Ciudad Varyna Casa d-39','63845378','sanchezdavid44@gmail.com',3,'2020-11-19',1),(12,'Licencia California',NULL,'Avenida los caobos casa-3','5676578','calilicencia@gmail.com',1,'2020-12-19',1);
/*!40000 ALTER TABLE `Clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comentarios`
--

DROP TABLE IF EXISTS `Comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comentarios` (
  `NumeroComentario` int(11) NOT NULL AUTO_INCREMENT,
  `DescripcionComentarios` varchar(500) NOT NULL,
  `FechaCreacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `Creador` varchar(45) NOT NULL,
  `NumeroReporte` int(11) NOT NULL,
  PRIMARY KEY (`NumeroComentario`),
  KEY `NumeroReporte` (`NumeroReporte`),
  KEY `Creador` (`Creador`),
  CONSTRAINT `Comentarios_ibfk_1` FOREIGN KEY (`NumeroReporte`) REFERENCES `Reportes` (`idReporte`),
  CONSTRAINT `Comentarios_ibfk_2` FOREIGN KEY (`Creador`) REFERENCES `Usuarios` (`NombreUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comentarios`
--

LOCK TABLES `Comentarios` WRITE;
/*!40000 ALTER TABLE `Comentarios` DISABLE KEYS */;
INSERT INTO `Comentarios` VALUES (4,'Mala se?al se remite a visita','2020-05-16 00:00:00','Gabriel1722',1),(5,'Cliente visitado se alineo la antena se dejo con se?al de -66 dbm','2020-05-16 00:00:00','Gabriel1722',1),(8,'Problemas serios de capacidad','2020-02-10 00:01:53','Gabriel1722',1),(9,'dfnsdfnsfin','2020-02-10 00:08:24','Gabriel1722',1),(10,'ME llamo gabriel','0000-00-00 00:00:00','Gabriel1722',1),(11,'$datos[\"comentario\"]','0000-00-00 00:00:00','Gabriel1722',1),(12,'ME llamo jose','0000-00-00 00:00:00','Gabriel1722',1),(13,'ME llamo jose','0000-00-00 00:00:00','Gabriel1722',1),(14,'ME llamo josejndfdnfjdf','0000-00-00 00:00:00','Gabriel1722',1),(15,'Se realizo ts con el cliente y el servicio subio\n','0000-00-00 00:00:00','Gabriel1722',1),(16,'SDSDS','0000-00-00 00:00:00','Gabriel1722',1),(17,'no y que','0000-00-00 00:00:00','Gabriel1722',1),(18,'dfdfdfdf','0000-00-00 00:00:00','Gabriel1722',1),(19,'DFDFDFF','0000-00-00 00:00:00','Gabriel1722',1),(20,'DFSFSDFDSF','0000-00-00 00:00:00','Gabriel1722',1),(21,'FDFDFF','2017-07-05 00:00:00','Gabriel1722',1),(22,'cvcvcvcv','0000-00-00 00:00:00','Gabriel1722',1),(23,'cvcv','0000-00-00 00:00:00','Gabriel1722',1),(24,'xxxxxxxxxxxxxxxxxxxxxxxxxxx','0000-00-00 00:00:00','Gabriel1722',1),(25,'aaaaaaaaaaaaaaaaaaaaaaaaaa','0000-00-00 00:00:00','Gabriel1722',1),(26,'wwwwwwwwwwwwwwwwww','0000-00-00 00:00:00','Gabriel1722',1),(27,'rrrrrrrrrrrrrrrrrrr','0000-00-00 00:00:00','Gabriel1722',1),(28,'idnfdifndifd','2020-02-10 01:08:37','Gabriel1722',1);
/*!40000 ALTER TABLE `Comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Departamentos`
--

DROP TABLE IF EXISTS `Departamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Departamentos` (
  `idDepartamento` int(11) NOT NULL AUTO_INCREMENT,
  `NombreDepartamento` varchar(45) NOT NULL,
  PRIMARY KEY (`idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departamentos`
--

LOCK TABLES `Departamentos` WRITE;
/*!40000 ALTER TABLE `Departamentos` DISABLE KEYS */;
INSERT INTO `Departamentos` VALUES (1,'Visitas'),(2,'Clientes'),(4,'Instalaciones');
/*!40000 ALTER TABLE `Departamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reportes`
--

DROP TABLE IF EXISTS `Reportes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reportes` (
  `idReporte` int(11) NOT NULL AUTO_INCREMENT,
  `NombreReporte` varchar(60) NOT NULL,
  `Estado` tinyint(1) NOT NULL,
  `FechaCreacion` datetime NOT NULL,
  `PertenenciaDepartamento` int(11) NOT NULL,
  `RfCliente` int(11) NOT NULL,
  PRIMARY KEY (`idReporte`),
  KEY `PertenenciaDepartamento` (`PertenenciaDepartamento`),
  KEY `RfCliente` (`RfCliente`),
  CONSTRAINT `Reportes_ibfk_1` FOREIGN KEY (`PertenenciaDepartamento`) REFERENCES `Departamentos` (`idDepartamento`),
  CONSTRAINT `Reportes_ibfk_2` FOREIGN KEY (`RfCliente`) REFERENCES `Clientes` (`idClientes`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reportes`
--

LOCK TABLES `Reportes` WRITE;
/*!40000 ALTER TABLE `Reportes` DISABLE KEYS */;
INSERT INTO `Reportes` VALUES (1,'SIn servicio Guayama',1,'2020-02-17 00:00:00',1,1);
/*!40000 ALTER TABLE `Reportes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TipoCliente`
--

DROP TABLE IF EXISTS `TipoCliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TipoCliente` (
  `idTipoCliente` int(11) NOT NULL AUTO_INCREMENT,
  `DefinicionTipo` varchar(45) NOT NULL,
  PRIMARY KEY (`idTipoCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TipoCliente`
--

LOCK TABLES `TipoCliente` WRITE;
/*!40000 ALTER TABLE `TipoCliente` DISABLE KEYS */;
INSERT INTO `TipoCliente` VALUES (1,'VIP'),(2,'Comercial'),(3,'Residencial');
/*!40000 ALTER TABLE `TipoCliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TipoUsuarios`
--

DROP TABLE IF EXISTS `TipoUsuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TipoUsuarios` (
  `idTipoUsuario` int(11) NOT NULL,
  `DescripcionTipo` varchar(45) NOT NULL,
  PRIMARY KEY (`idTipoUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TipoUsuarios`
--

LOCK TABLES `TipoUsuarios` WRITE;
/*!40000 ALTER TABLE `TipoUsuarios` DISABLE KEYS */;
INSERT INTO `TipoUsuarios` VALUES (1,'Administrador'),(2,'Normal');
/*!40000 ALTER TABLE `TipoUsuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuarios` (
  `IdUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `NombreUsuario` varchar(45) NOT NULL,
  `Contraseña` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `TipoDeUsuario` int(11) NOT NULL,
  `Sexo` varchar(1) NOT NULL,
  PRIMARY KEY (`NombreUsuario`),
  UNIQUE KEY `id` (`IdUsuario`),
  KEY `Tipo` (`TipoDeUsuario`),
  CONSTRAINT `Usuarios_ibfk_1` FOREIGN KEY (`TipoDeUsuario`) REFERENCES `TipoUsuarios` (`idTipoUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'Gabriel1722','wwwaaa12','Gabriel','Arispe',1,'M');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-10  1:11:20

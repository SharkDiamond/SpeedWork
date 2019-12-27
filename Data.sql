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
INSERT INTO `Clientes` VALUES (1,'Gabriel','Arispe','Calle Carvajal casa 14-60 centro','8565677','gabrielarispe24@gmail.com',3,'2020-01-20',1),(2,'Sergio','Sanchez','Urbanizacion Alto Barinas Norte','645678931','sergiosanchez@gmail.com',3,'2020-02-20',1),(3,'Janmarie','Lopez','Calle Humacao secto Obelizco','5868456','lopezjanma@gmail.com',2,'2020-03-12',1),(4,'Janmarie','L','Calle roberto suarez','2344567','pumagaraje@gmail.com',1,'2020-04-23',1),(5,'EL Sazon',NULL,'Centro Comercial las delicias','47485924','sazon@hotmail.com',2,'2020-05-15',1),(6,'Liberty Express',NULL,'Centro Avenida 24 de diciembre','4748245','express@gmail.com',1,'2020-06-13',1),(7,'Cristian','Ferrer','Urbanizacion Los Azules','7489245','ferrer@gmail.com',3,'2020-07-18',1),(8,'Luna','Azuaje','Avenida Olimpia Sector Centro','74595769','luna123@gmail.com',3,'2020-08-26',1),(9,'Ferreteria TodoMachete',NULL,'Centro Comercial Cima Alta','64828459','todo@hotmail.com',1,'2020-09-01',1),(10,'Los Paseos44',NULL,'Edificion Roble11','3435657','44paseos@gmail.com',2,'2020-10-16',1),(11,'David','Sanchez','Ciudad Varyna Casa d-39','63845378','sanchezdavid44@gmail.com',3,'2020-11-19',1),(12,'Roberto','Suarez','Calle Merida casa 34','74353596','SuarezRobeto@gmail.com',3,'2020-12-20',1);
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
  `DescripcionComentario` varchar(500) NOT NULL,
  `FechaCreacion` datetime NOT NULL,
  `Creador` varchar(45) NOT NULL,
  PRIMARY KEY (`NumeroComentario`),
  KEY `Creador` (`Creador`),
  CONSTRAINT `Comentarios_ibfk_1` FOREIGN KEY (`Creador`) REFERENCES `Usuarios` (`NombreUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comentarios`
--

LOCK TABLES `Comentarios` WRITE;
/*!40000 ALTER TABLE `Comentarios` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departamentos`
--

LOCK TABLES `Departamentos` WRITE;
/*!40000 ALTER TABLE `Departamentos` DISABLE KEYS */;
INSERT INTO `Departamentos` VALUES (1,'Visitas'),(2,'Clientes');
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
  `ComentariosUsuarios` int(11) NOT NULL,
  `RfCliente` int(11) DEFAULT NULL,
  PRIMARY KEY (`idReporte`),
  KEY `PertenenciaDepartamento` (`PertenenciaDepartamento`),
  KEY `ComentariosUsuarios` (`ComentariosUsuarios`),
  KEY `RfCliente` (`RfCliente`),
  CONSTRAINT `Reportes_ibfk_1` FOREIGN KEY (`PertenenciaDepartamento`) REFERENCES `Departamentos` (`idDepartamento`),
  CONSTRAINT `Reportes_ibfk_2` FOREIGN KEY (`ComentariosUsuarios`) REFERENCES `Comentarios` (`NumeroComentario`),
  CONSTRAINT `Reportes_ibfk_3` FOREIGN KEY (`RfCliente`) REFERENCES `Clientes` (`idClientes`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reportes`
--

LOCK TABLES `Reportes` WRITE;
/*!40000 ALTER TABLE `Reportes` DISABLE KEYS */;
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
  `NombreUsuario` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `Correo` varchar(80) NOT NULL,
  `Edad` int(11) NOT NULL,
  `Contraseña` varchar(45) NOT NULL,
  `TipoUsuario` int(11) NOT NULL,
  PRIMARY KEY (`NombreUsuario`),
  KEY `TipoUsuario` (`TipoUsuario`),
  CONSTRAINT `Usuarios_ibfk_1` FOREIGN KEY (`TipoUsuario`) REFERENCES `TipoUsuarios` (`idTipoUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES ('Franco456','Franco','Angel','gabiarispe@gmail.com',20,'vuela33',1),('Gabriel1722','Gabriel','Arispe','gabrielarispe24@gmail.com',20,'tiburon69',2);
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

-- Dump completed on 2019-12-27 11:58:11

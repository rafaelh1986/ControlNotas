-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para notasbd
CREATE DATABASE IF NOT EXISTS `notasbd` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `notasBD`;

-- Volcando estructura para tabla notasbd.tblpersona
CREATE TABLE IF NOT EXISTS `tblPersona` (
  `ci` varchar(15) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `direccion` varchar(30) NOT NULL,
  PRIMARY KEY (`ci`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla notasbd.tblestudiante
CREATE TABLE IF NOT EXISTS `tblEstudiante` (
  `rude` varchar(20) NOT NULL,
  `observaciones` varchar(30) DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  `ciPersona` varchar(15) NOT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  KEY `ciPersona` (`ciPersona`),
  CONSTRAINT `tblestudiante_ibfk_1` FOREIGN KEY (`ciPersona`) REFERENCES `tblPersona` (`ci`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla notasbd.tbltutor
CREATE TABLE IF NOT EXISTS `tblTutor` (
  `correo` varchar(20) DEFAULT NULL,
  `ciPersona` varchar(15) DEFAULT NULL,
  `ciEstudiante` varchar(15) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  KEY `ciPersona` (`ciPersona`),
  KEY `ciEstudiante` (`ciEstudiante`),
  CONSTRAINT `tbltutor_ibfk_1` FOREIGN KEY (`ciPersona`) REFERENCES `tblPersona` (`ci`),
  CONSTRAINT `tbltutor_ibfk_2` FOREIGN KEY (`ciEstudiante`) REFERENCES `tblEstudiante` (`ciPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla notasbd.tblprofesor
CREATE TABLE IF NOT EXISTS `tblProfesor` (
  `categoria` varchar(15) NOT NULL,
  `salario` float DEFAULT NULL,
  `especialidad` varchar(20) NOT NULL,
  `ciPersona` varchar(15) NOT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  KEY `ciPersona` (`ciPersona`),
  CONSTRAINT `tblprofesor_ibfk_1` FOREIGN KEY (`ciPersona`) REFERENCES `tblPersona` (`ci`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla notasbd.tblgrupo
CREATE TABLE IF NOT EXISTS `tblGrupo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nivel` varchar(20) NOT NULL,
  `descripcion` varchar(10) NOT NULL,
  `paralelo` varchar(5) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla notasbd.tblmateria
CREATE TABLE IF NOT EXISTS `tblMateria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) NOT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla notasbd.tblgrupomateria
CREATE TABLE IF NOT EXISTS `tblGrupoMateria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `observaciones` varchar(20) DEFAULT NULL,
  `idGrupo` int(11) DEFAULT NULL,
  `idMateria` int(11) DEFAULT NULL,
  `ciProfesor` varchar(15) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idGrupo` (`idGrupo`),
  KEY `idMateria` (`idMateria`),
  KEY `ciProfesor` (`ciProfesor`),
  CONSTRAINT `tblgrupomateria_ibfk_1` FOREIGN KEY (`idGrupo`) REFERENCES `tblGrupo` (`id`),
  CONSTRAINT `tblgrupomateria_ibfk_2` FOREIGN KEY (`idMateria`) REFERENCES `tblMateria` (`id`),
  CONSTRAINT `tblgrupomateria_ibfk_3` FOREIGN KEY (`ciProfesor`) REFERENCES `tblProfesor` (`ciPersona`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla notasbd.tblestudiantegrupo
CREATE TABLE IF NOT EXISTS `tblEstudianteGrupo` (
  `gestion` varchar(10) DEFAULT NULL,
  `ciEstudiante` varchar(15) DEFAULT NULL,
  `idGrupo` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  KEY `ciEstudiante` (`ciEstudiante`),
  KEY `idGrupo` (`idGrupo`),
  CONSTRAINT `tblestudiantegrupo_ibfk_1` FOREIGN KEY (`ciEstudiante`) REFERENCES `tblEstudiante` (`ciPersona`),
  CONSTRAINT `tblestudiantegrupo_ibfk_2` FOREIGN KEY (`idGrupo`) REFERENCES `tblGrupo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla notasbd.tblactividad
CREATE TABLE IF NOT EXISTS `tblActividad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(30) DEFAULT NULL,
  `puntaje` float DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `idGrupoMateria` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idGrupoMateria` (`idGrupoMateria`),
  CONSTRAINT `tblactividad_ibfk_1` FOREIGN KEY (`idGrupoMateria`) REFERENCES `tblGrupoMateria` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=LATIN1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla notasbd.tblestudianteactividad
CREATE TABLE IF NOT EXISTS `tblEstudianteActividad` (
  `promedio` float DEFAULT NULL,
  `Observaciones` varchar(30) DEFAULT NULL,
  `ciEstudiante` varchar(15) DEFAULT NULL,
  `idActividad` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  KEY `ciEstudiante` (`ciEstudiante`),
  KEY `idActividad` (`idActividad`),
  CONSTRAINT `tblestudianteactividad_ibfk_1` FOREIGN KEY (`ciEstudiante`) REFERENCES `tblEstudiante` (`ciPersona`),
  CONSTRAINT `tblestudianteactividad_ibfk_2` FOREIGN KEY (`idActividad`) REFERENCES `tblActividad` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=LATIN1;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

-- --------------------------------------------------------
-- Host:                         remotemysql.com
-- Versión del servidor:         8.0.13-4 - Percona Server (GPL), Release '4', Revision 'f0a32b8'
-- SO del servidor:              debian-linux-gnu
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para ichSCkKVhV
CREATE DATABASE IF NOT EXISTS `ichSCkKVhV` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `ichSCkKVhV`;

-- Volcando estructura para tabla ichSCkKVhV.tblPersona
CREATE TABLE IF NOT EXISTS `tblPersona` (
  `ci` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(25) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `apellidos` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `direccion` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ci`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ichSCkKVhV.tblProfesor
CREATE TABLE IF NOT EXISTS `tblProfesor` (
  `categoria` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `salario` float DEFAULT NULL,
  `especialidad` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `ciPersona` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ciPersona`),
  CONSTRAINT `tblProfesor_ibfk_1` FOREIGN KEY (`ciPersona`) REFERENCES `tblPersona` (`ci`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ichSCkKVhV.tblEstudiante
CREATE TABLE IF NOT EXISTS `tblEstudiante` (
  `rude` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `observaciones` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fechaNac` date DEFAULT NULL,
  `ciPersona` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ciPersona`),
  CONSTRAINT `tblEstudiante_ibfk_1` FOREIGN KEY (`ciPersona`) REFERENCES `tblPersona` (`ci`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ichSCkKVhV.tblTutor
CREATE TABLE IF NOT EXISTS `tblTutor` (
  `correo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ciPersona` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ciEstudiante` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  KEY `ciPersona` (`ciPersona`),
  KEY `ciEstudiante` (`ciEstudiante`),
  CONSTRAINT `tblTutor_ibfk_1` FOREIGN KEY (`ciPersona`) REFERENCES `tblPersona` (`ci`),
  CONSTRAINT `tblTutor_ibfk_2` FOREIGN KEY (`ciEstudiante`) REFERENCES `tblEstudiante` (`cipersona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ichSCkKVhV.tblActividad
CREATE TABLE IF NOT EXISTS `tblActividad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `puntaje` float DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `idGrupoMateria` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idGrupoMateria` (`idGrupoMateria`),
  CONSTRAINT `tblActividad_ibfk_1` FOREIGN KEY (`idGrupoMateria`) REFERENCES `tblGrupoMateria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ichSCkKVhV.tblGrupo
CREATE TABLE IF NOT EXISTS `tblGrupo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nivel` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `paralelo` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ichSCkKVhV.tblMateria
CREATE TABLE IF NOT EXISTS `tblMateria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ichSCkKVhV.tblEstudianteActividad
CREATE TABLE IF NOT EXISTS `tblEstudianteActividad` (
  `promedio` float DEFAULT NULL,
  `Observaciones` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ciEstudiante` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `idActividad` int(11) NOT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ciEstudiante`,`idActividad`),
  KEY `tblEstudianteActividad_ibfk_2` (`idActividad`),
  KEY `tblEstudianteActividad_ibfk_1` (`ciEstudiante`),
  CONSTRAINT `tblEstudianteActividad_ibfk_1` FOREIGN KEY (`ciEstudiante`) REFERENCES `tblEstudiante` (`cipersona`),
  CONSTRAINT `tblEstudianteActividad_ibfk_2` FOREIGN KEY (`idActividad`) REFERENCES `tblActividad` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ichSCkKVhV.tblEstudianteGrupo
CREATE TABLE IF NOT EXISTS `tblEstudianteGrupo` (
  `gestion` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `ciEstudiante` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `idGrupo` int(11) NOT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`gestion`,`ciEstudiante`,`idGrupo`),
  KEY `tblEstudianteGrupo_ibfk_1` (`ciEstudiante`),
  KEY `tblEstudianteGrupo_ibfk_2` (`idGrupo`),
  CONSTRAINT `tblEstudianteGrupo_ibfk_1` FOREIGN KEY (`ciEstudiante`) REFERENCES `tblEstudiante` (`cipersona`),
  CONSTRAINT `tblEstudianteGrupo_ibfk_2` FOREIGN KEY (`idGrupo`) REFERENCES `tblGrupo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ichSCkKVhV.tblGrupoMateria
CREATE TABLE IF NOT EXISTS `tblGrupoMateria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `observaciones` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idGrupo` int(11) DEFAULT NULL,
  `idMateria` int(11) DEFAULT NULL,
  `ciProfesor` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idGrupo` (`idGrupo`),
  KEY `idMateria` (`idMateria`),
  KEY `ciProfesor` (`ciProfesor`),
  CONSTRAINT `tblGrupoMateria_ibfk_1` FOREIGN KEY (`idGrupo`) REFERENCES `tblGrupo` (`id`),
  CONSTRAINT `tblGrupoMateria_ibfk_2` FOREIGN KEY (`idMateria`) REFERENCES `tblMateria` (`id`),
  CONSTRAINT `tblGrupoMateria_ibfk_3` FOREIGN KEY (`ciProfesor`) REFERENCES `tblProfesor` (`cipersona`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

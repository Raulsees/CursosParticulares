-- --------------------------------------------------------
-- Host:                         rds-formateca.cswnrgsa7kml.us-east-1.rds.amazonaws.com
-- Versión del servidor:         8.0.40 - Source distribution
-- SO del servidor:              Linux
-- HeidiSQL Versión:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para formateca
CREATE DATABASE IF NOT EXISTS `formateca` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `formateca`;

-- Volcando estructura para tabla formateca.alumnos
CREATE TABLE IF NOT EXISTS `alumnos` (
  `id_alumno` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `dni` varchar(30) NOT NULL,
  PRIMARY KEY (`id_alumno`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `dni` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla formateca.centros
CREATE TABLE IF NOT EXISTS `centros` (
  `id_centro` int NOT NULL AUTO_INCREMENT,
  `direccion` varchar(50) NOT NULL,
  PRIMARY KEY (`id_centro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla formateca.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id_curso` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `duracion` varchar(30) NOT NULL,
  `precio` int NOT NULL DEFAULT (0),
  `id_centro` int NOT NULL,
  PRIMARY KEY (`id_curso`),
  KEY `id_centro` (`id_centro`),
  CONSTRAINT `FK_id_centro` FOREIGN KEY (`id_centro`) REFERENCES `centros` (`id_centro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla formateca.imparten
CREATE TABLE IF NOT EXISTS `imparten` (
  `id_imparten` int NOT NULL AUTO_INCREMENT,
  `id_profesor` int NOT NULL,
  `id_curso` int NOT NULL,
  PRIMARY KEY (`id_imparten`),
  KEY `id_profesor` (`id_profesor`),
  KEY `id_curso` (`id_curso`),
  CONSTRAINT `FK_id_curso` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`),
  CONSTRAINT `FK_id_profesor` FOREIGN KEY (`id_profesor`) REFERENCES `profesores` (`id_profesor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla formateca.inscriben
CREATE TABLE IF NOT EXISTS `inscriben` (
  `id_inscripcion` int NOT NULL AUTO_INCREMENT,
  `id_alumno` int NOT NULL,
  `id_curso` int NOT NULL,
  PRIMARY KEY (`id_inscripcion`),
  KEY `FK1_id_alumno` (`id_alumno`),
  KEY `FK2_id_curso` (`id_curso`),
  CONSTRAINT `FK1_id_alumno` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id_alumno`),
  CONSTRAINT `FK2_id_curso` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla formateca.profesores
CREATE TABLE IF NOT EXISTS `profesores` (
  `id_profesor` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `rama_conocimiento` varchar(30) NOT NULL,
  PRIMARY KEY (`id_profesor`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

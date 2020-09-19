CREATE DATABASE notasBD;
USE notasBD;

CREATE TABLE tblPersona(
	ci VARCHAR(15) PRIMARY KEY NOT NULL,
	nombre VARCHAR(25) NOT NULL,
	apellidos VARCHAR(30) NOT NULL,
	telefono VARCHAR(10),
	direccion VARCHAR(30) NOT NULL 
);

CREATE TABLE tblEstudiante(
	rude VARCHAR(20) NOT NULL,
	observaciones VARCHAR(30),
	fechaNac DATE,
	ciPersona VARCHAR(15) NOT NULL,
	estado BOOLEAN,
	foreign KEY (ciPersona) REFERENCES tblPersona(ci) 
);

CREATE TABLE tblTutor(
	correo VARCHAR(20),
	ciPersona VARCHAR(15),
	ciEstudiante VARCHAR(15),
	estado BOOLEAN,	
	foreign KEY (ciPersona) REFERENCES tblPersona(ci),
	foreign KEY (ciEstudiante) REFERENCES tblEstudiante(ciPersona)
);

CREATE TABLE tblProfesor(
	categoria VARCHAR(15) NOT NULL,
	salario FLOAT,
	especialidad VARCHAR(20) NOT NULL,
	ciPersona VARCHAR(15) NOT NULL,
	estado BOOLEAN,
	foreign KEY (ciPersona) REFERENCES tblPersona(ci)
);

CREATE TABLE tblGrupo(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nivel VARCHAR(20) NOT NULL,
	descripccion VARCHAR(10) NOT NULL,
	ciProfesor VARCHAR(15),
	estado BOOLEAN,
	foreign KEY (ciProfesor) REFERENCES tblProfesor(ciPersona)
);

CREATE TABLE tblMateria(
	id INT AUTO_INCREMENT PRIMARY KEY,
	descripcion VARCHAR(20) NOT NULL,
	paralelo VARCHAR(10) NOT NULL,
	estado BOOLEAN
);

CREATE TABLE tblGrupoMateria(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	observaciones VARCHAR(20),
	idGrupo INT,
	idMateria INT,
	estado BOOLEAN,
	ciProfesor VARCHAR(15),
	FOREIGN KEY(idGrupo) REFERENCES tblGrupo(id),
	FOREIGN KEY(idMateria) REFERENCES tblMateria(id),
	FOREIGN KEY(ciProfesor) REFERENCES tblprofesor(ciPersona)
);

CREATE TABLE tblEstudianteGrupo(
	gestion VARCHAR(10),
	ciEstudiante VARCHAR(15),
	idGrupo INT,
	estado BOOLEAN,
	FOREIGN KEY(ciEstudiante) REFERENCES tblEstudiante(ciPersona),
	FOREIGN KEY(idGrupo) REFERENCES tblGrupo(id)
);

CREATE TABLE tblActividad(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	descripcion VARCHAR(30),
	puntaje FLOAT,
	fecha DATE,
	idGrupoMateria INT,
	estado BOOLEAN,
	FOREIGN KEY(idGrupoMateria) REFERENCES tblgrupomateria(id)
);

CREATE TABLE tblEstudianteActividad(
	promedio FLOAT,
	Observaciones VARCHAR(30),
	ciEstudiante VARCHAR(15),
	idActividad INT,
	estado BOOLEAN,
	FOREIGN KEY(ciEstudiante) REFERENCES tblEstudiante(ciPersona),
	FOREIGN KEY(idActividad) REFERENCES tblActividad(id)
);

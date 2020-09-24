define({ "api": [
  {
    "type": "delete",
    "url": "/actividad/:id",
    "title": "DELETE ACTIVIDAD",
    "name": "DeleteActividad",
    "group": "Actividad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la Actividad.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Actividad eliminada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Actividad.php",
    "groupTitle": "Actividad"
  },
  {
    "type": "get",
    "url": "/actividad",
    "title": "GET ACTIVIDADES",
    "name": "GetActividad",
    "group": "Actividad",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Identificador de actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.descripcion",
            "description": "<p>Nombre de la actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "data.puntaje",
            "description": "<p>Nota de la actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.fecha",
            "description": "<p>Fecha de realización de la actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idgrupomateria",
            "description": "<p>Identificador de la tabla GrupoMateria</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de la Actividad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": [\n               {\n                   \"id\": \"1\",\n                   \"descripcion\": \"1er Examen\",\n                   \"puntaje\": \"80\",\n                   \"Fecha\": \"2020-02-12\",\n                   \"estado\": \"1\"\n                }\n           ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Actividad.php",
    "groupTitle": "Actividad"
  },
  {
    "type": "get",
    "url": "/actividad/:id",
    "title": "GET ACTIVIDAD ID",
    "name": "GetActividadID",
    "group": "Actividad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la Actividad.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Identificador de actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.descripcion",
            "description": "<p>Nombre de la actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "data.puntaje",
            "description": "<p>Nota de la actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.fecha",
            "description": "<p>Fecha de realización de la actividad</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.idgrupomateria",
            "description": "<p>Identificador de la tabla GrupoMateria</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de la Actividad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": {\n              \"id\": \"1\",\n              \"descripcion\": \"1er Examen\",\n              \"puntaje\": \"80\",\n              \"Fecha\": \"2020-02-12\",\n              \"estado\": \"1\"\n           }    \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Actividad.php",
    "groupTitle": "Actividad"
  },
  {
    "type": "post",
    "url": "/actividad/",
    "title": "POST ACTIVIDAD",
    "name": "PostActividad",
    "group": "Actividad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;descripcion&quot;: &quot;2do Examen&quot;, &quot;puntaje&quot;: &quot;70&quot;, &quot;precio&quot;: &quot;60&quot;, &quot;fecha&quot;: &quot;2020-03-14&quot;, &quot;idgrupomateria&quot;: &quot;1&quot;, &quot;estado&quot;:&quot;1&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Actividad creada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Actividad.php",
    "groupTitle": "Actividad"
  },
  {
    "type": "put",
    "url": "/actividad/:id",
    "title": "PUT ACTIVIDAD",
    "name": "PutActividad",
    "group": "Actividad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la Actividad.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;descripcion&quot;: &quot;2do Examen&quot;, &quot;puntaje&quot;: &quot;80&quot;, &quot;fecha&quot;: &quot;2020-03-14&quot;, &quot;idgrupomateria&quot;: &quot;1&quot;, &quot;estado&quot;:&quot;1&quot;, }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Actividad modificada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Actividad.php",
    "groupTitle": "Actividad"
  },
  {
    "type": "delete",
    "url": "/estudiante/:id",
    "title": "DELETE ESTUDIANTE",
    "name": "DeleteEstudiante",
    "group": "Estudiante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la Estudiante.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Estudiante eliminado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Estudiante.php",
    "groupTitle": "Estudiante"
  },
  {
    "type": "get",
    "url": "/estudiante",
    "title": "GET ESTUDIANTES",
    "name": "GetEstudiante",
    "group": "Estudiante",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.rude",
            "description": "<p>Identificador de estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.observacion",
            "description": "<p>Observacion del estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.fechanac",
            "description": "<p>Fecha de Nacimiento del estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cipersona",
            "description": "<p>Cedula de Identidad del estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado del estudiante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": [\n               {\n                   \"rude\": \"1354\",\n                   \"observacion\": \" \",\n                   \"fechanac\": \"1998-10-04\",\n                   \"cipersona\": \"3211234\",\n                   \"estado\": \"1\"\n                }\n           ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Estudiante.php",
    "groupTitle": "Estudiante"
  },
  {
    "type": "get",
    "url": "/estudiante/:ci",
    "title": "GET ESTUDIANTE CI",
    "name": "Get_ESTUDIANTE_CI",
    "group": "Estudiante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la Estudiante.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.rude",
            "description": "<p>Identificador de estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.observacion",
            "description": "<p>Observacion del estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.fechanac",
            "description": "<p>Fecha de Nacimiento del estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.cipersona",
            "description": "<p>Cedula de Identidad del estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado del estudiante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": {\n             \t\t \"rude\": \"1354\",\n                   \"observacion\": \" \",\n                   \"fechanac\": \"1998-10-04\",\n                   \"cipersona\": \"3211234\",\n                   \"estado\": \"1\"\n           }    \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Estudiante.php",
    "groupTitle": "Estudiante"
  },
  {
    "type": "delete",
    "url": "/estudiantegrupo/:ci/:id/:gestion",
    "title": "DELETE ESTUDIANTE GRUPO",
    "name": "DeleteEstudianteGrupo",
    "group": "EstudianteGrupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Cedula de Identidad del Estudiante.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la gestión.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gestion",
            "description": "<p>Identificador del Grupo.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Actividad eliminada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteGrupo.php",
    "groupTitle": "EstudianteGrupo"
  },
  {
    "type": "get",
    "url": "/estuduantegrupo",
    "title": "GET ESTUDIANTE GRUPO",
    "name": "GetEstudianteGrupo",
    "group": "EstudianteGrupo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla estuduantegrupo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gestion",
            "description": "<p>Identificación de la gestión</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ciEstudiante",
            "description": "<p>Cedula de Identidad del Estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.idGrupo",
            "description": "<p>Identificador del Grupo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de EstudianteGrupo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n      \"status\": \"success\",\n      \"code\": 200,\n      \"data\": [\n              \t{\n\t\t\t\t\t\t\"gestion\": \"2020\",\n\t\t\t\t\t\t\"ciEstudiante\": \"345666\",\n\t\t\t\t\t\t\"idGrupo\": \"2\",\n\t\t\t\t\t\t\"estado\": \"1\"\n\t\t\t\t\t}\n              ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteGrupo.php",
    "groupTitle": "EstudianteGrupo"
  },
  {
    "type": "get",
    "url": "/estudiantegrupo/:ci/:id/:gestion",
    "title": "GET ESTUDIANTE GRUPO CI,ID,GESTION",
    "name": "GetEstudianteGrupoID",
    "group": "EstudianteGrupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Cedula de Identidad del Estudiante.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la gestión.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gestion",
            "description": "<p>Identificador del Grupo.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla estuduantegrupo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.gestion",
            "description": "<p>Identificación de la gestión.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ciEstudiante",
            "description": "<p>Cedula de Identidad del Estudiante.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.idGrupo",
            "description": "<p>Identificador del Grupo.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de EstudianteGrupo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n      \"status\": \"success\",\n      \"code\": 200,\n      \"data\":{\n\t\t\t\t\t\"gestion\": \"2020\",\n       \t\t\t\"ciEstudiante\": \"3444231\",\n       \t\t\t\"idGrupo\": \"2\",\n       \t\t\t\"estado\": \"1\"\n\t\t\t\t}\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteGrupo.php",
    "groupTitle": "EstudianteGrupo"
  },
  {
    "type": "post",
    "url": "/estudiantegrupo/",
    "title": "POST ESTUDIANTE GRUPO",
    "name": "PostEstudianteGrupo",
    "group": "EstudianteGrupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;gestion&quot;: &quot;2020&quot;, &quot;cidestudiante&quot;: &quot;345666&quot;, &quot;idgrupo&quot;: &quot;2&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"EstudianteGrupo creado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteGrupo.php",
    "groupTitle": "EstudianteGrupo"
  },
  {
    "type": "put",
    "url": "/estudiantegrupo/:ci/:id/:gestion",
    "title": "PUT ESTUDIANTE GRUPO",
    "name": "PutEstudianteGrupo",
    "group": "EstudianteGrupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Cedula de Identidad del Estudiante.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la gestión.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gestion",
            "description": "<p>Identificador del Grupo.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;estado&quot;: &quot;0&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"EstudianteGrupo modificado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteGrupo.php",
    "groupTitle": "EstudianteGrupo"
  },
  {
    "type": "post",
    "url": "/estudiante/",
    "title": "POST ESTUDIANTE",
    "name": "PostEstudiante",
    "group": "Estudiante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;rude&quot;: &quot;1354&quot;, &quot;observacion&quot;: &quot; &quot;, &quot;fechanac&quot;: &quot;1998-10-04&quot;, &quot;cipersona&quot;: &quot;3211234&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Estudiante creado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Estudiante.php",
    "groupTitle": "Estudiante"
  },
  {
    "type": "put",
    "url": "/estudiante/:id",
    "title": "PUT ESTUDIANTE",
    "name": "PutEstudiante",
    "group": "Estudiante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la Estudiante.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;rude&quot;: &quot;1354&quot;, &quot;observacion&quot;: &quot; &quot;, &quot;fechanac&quot;: &quot;1998-10-04&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Estudiante modificado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Estudiante.php",
    "groupTitle": "Estudiante"
  },
  {
    "type": "delete",
    "url": "/grupo/:id",
    "title": "DELETE GRUPO",
    "name": "DeleteGrupo",
    "group": "Grupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la Actividad.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Grupo eliminado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Grupo.php",
    "groupTitle": "Grupo"
  },
  {
    "type": "get",
    "url": "/grupo",
    "title": "GET GRUPO",
    "name": "GetGrupo",
    "group": "Grupo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla grupo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Identificador del grupo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nivel",
            "description": "<p>Nivel del grupo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.paralelo",
            "description": "<p>Identificación del paralelo del grupo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de la Actividad</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": [\n           \t{\n       \t\t\t\"id\": \"4\",\n       \t\t\t\"nivel\": \"Secundaria\",\n       \t\t\t\"descripcion\": \"5to\",\n       \t\t\t\"paralelo\": \"A\",\n       \t\t\t\"estado\": \"1\"\n  \t\t\t}\n           ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Grupo.php",
    "groupTitle": "Grupo"
  },
  {
    "type": "get",
    "url": "/grupo/:id",
    "title": "GET GRUPO ID",
    "name": "GetGrupoID",
    "group": "Grupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación del Grupo.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla grupo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>Identificador del grupo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nivel",
            "description": "<p>Nivel del grupo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.paralelo",
            "description": "<p>Identificación del paralelo del grupo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado del Grupo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   \t{\n  \t\t\"status\": \"success\",\n  \t\t\"code\": 200,\n  \t\t\"data\": {\n      \t\t\t\t\"id\": \"3\",\n      \t\t\t\t\"nivel\": \"Secundaria\",\n      \t\t\t\t\"descripcion\": \"6to\",\n      \t\t\t\t\"paralelo\": \"B\",\n      \t\t\t\t\"estado\": \"1\"\n  \t\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Grupo.php",
    "groupTitle": "Grupo"
  },
  {
    "type": "post",
    "url": "/grupo/",
    "title": "POST GRUPO",
    "name": "PostGRUPO",
    "group": "Grupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;nivel&quot;: &quot;Secundaria&quot;, &quot;descripcion&quot;: &quot;5to&quot;, &quot;paralelo&quot;: &quot;A&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Grupo creado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Grupo.php",
    "groupTitle": "Grupo"
  },
  {
    "type": "put",
    "url": "/grupo/:id",
    "title": "PUT GRUPO",
    "name": "PutGrupo",
    "group": "Grupo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la Actividad.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;nivel&quot;: &quot;Secundaria&quot;, &quot;descripcion&quot;: &quot;6to&quot;, &quot;paralelo&quot;: &quot;B&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Grupo modificado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Grupo.php",
    "groupTitle": "Grupo"
  },
  {
    "type": "delete",
    "url": "/tutor/:ci",
    "title": "DELETE TUTOR",
    "name": "DeleteTutor",
    "group": "Tutor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Identificación de la Tutor.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Tutor eliminado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Tutor.php",
    "groupTitle": "Tutor"
  },
  {
    "type": "get",
    "url": "/tutor",
    "title": "GET TUTOR",
    "name": "GetTutor",
    "group": "Tutor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla tutor</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.correo",
            "description": "<p>correo electronico del tutor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ciPersona",
            "description": "<p>Cedula de Identidad del tutor</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "data.ciEstudiante",
            "description": "<p>Cedula de Identidad del Estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado del Tutor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": [\n               {\n                      \"correo\": \"lorena.sanchez@gmail.com\",\n       \t\t\t\t    \"ciPersona\": \"6545454\",\n         \t\t\t\t\"ciEstudiante\": \"1232345\",\n         \t\t\t\t\"estado\": \"1\"\n                }\n           ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Tutor.php",
    "groupTitle": "Tutor"
  },
  {
    "type": "get",
    "url": "/tutor/:ci",
    "title": "GET TUTOR CI",
    "name": "GetTutorCI",
    "group": "Tutor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Cedula de Identidad del Tutor.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Datos sacados de la tabla tutor</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.correo",
            "description": "<p>correo electronico del tutor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ciPersona",
            "description": "<p>Cedula de Identidad del tutor</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "data.ciEstudiante",
            "description": "<p>Cedula de Identidad del Estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado del Tutor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": {\n             \t\"correo\": \"lorena.sanchez@gmail.com\",\n       \t\t\t\"ciPersona\": \"6545454\",\n         \t\t\"ciEstudiante\": \"1232345\",\n         \t\t\"estado\": \"1\"\n           }    \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Tutor.php",
    "groupTitle": "Tutor"
  },
  {
    "type": "post",
    "url": "/tutor/",
    "title": "POST TUTOR",
    "name": "PostTutor",
    "group": "Tutor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;correo&quot;: &quot;lorena.sanchez@gmail.com&quot;, &quot;ciPersona&quot;: &quot;6545454&quot;, &quot;ciEstudiante&quot;: &quot;1232345&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Tutor creado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Tutor.php",
    "groupTitle": "Tutor"
  },
  {
    "type": "put",
    "url": "/tutor/:ci",
    "title": "PUT TUTOR",
    "name": "PutTutor",
    "group": "Tutor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Identificación del Tutor.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;correo&quot;: &quot;lorena.sanchez@gmail.com&quot;, &quot;ciEstudiante&quot;: &quot;1232345&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de respuesta</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Codigo de servidor http</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de exito</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Tutor modificado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Tutor.php",
    "groupTitle": "Tutor"
  }
] });

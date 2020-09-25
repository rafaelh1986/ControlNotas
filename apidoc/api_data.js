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
            "description": "<p>Datos sacados de la tabla tblActividad</p>"
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
            "description": "<p>Identificador de la tabla tblActividad</p>"
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
            "description": "<p>Datos sacados de la tabla tblActividad</p>"
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
            "description": "<p>Identificador de GrupoMateria</p>"
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
    "url": "/estudianteactividad/:ci/:id",
    "title": "DELETE ESTUDIANTE ACTIVIDAD",
    "name": "DeleteEstudianteActividad",
    "group": "EstudianteActividad",
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
            "description": "<p>Identificador de Actividad.</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"EstudianteActividad eliminada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteActividad.php",
    "groupTitle": "EstudianteActividad"
  },
  {
    "type": "get",
    "url": "/estuduanteactividad",
    "title": "GET ESTUDIANTE ACTIVIDAD",
    "name": "GetEstudianteActividad",
    "group": "EstudianteActividad",
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
            "description": "<p>Datos sacados de la tabla rblEstudianteactividad</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "data.promedio",
            "description": "<p>Nota del Estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.observaciones",
            "description": "<p>Observacion del Estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.ciEstudiante",
            "description": "<p>Cedula de Identidad del Estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.idActividad",
            "description": "<p>Identificador de la Actividad</p>"
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
          "content": "    HTTP/1.1 200 OK\n   {\n      \"status\": \"success\",\n      \"code\": 200,\n      \"data\": [\n              \t{\n\t\t\t\t\t\t\"promedio\": \"58\",\n                        \"observaciones\": \"Bueno\",\n\t\t\t\t\t\t\"ciEstudiante\": \"345666\",\n\t\t\t\t\t\t\"idActividad\": \"2\",\n\t\t\t\t\t\t\"estado\": \"1\"\n\t\t\t\t\t}\n              ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteActividad.php",
    "groupTitle": "EstudianteActividad"
  },
  {
    "type": "get",
    "url": "/estudianteactividad/:ci/:id",
    "title": "GET ESTUDIANTE ACTIVIDAD CI,ID",
    "name": "GetEstudianteActividadID",
    "group": "EstudianteActividad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Cedula  Cedula de Identidad del Estudiante.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador de Actividad.</p>"
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
            "description": "<p>Datos sacados de la tabla tblEstuduantegrupo.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "data.promedio",
            "description": "<p>Nota del Estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.observaciones",
            "description": "<p>Observacion del Estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.ciEstudiante",
            "description": "<p>Cedula de Identidad del Estudiante</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.idActividad",
            "description": "<p>Identificador de la Actividad</p>"
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
          "content": "    HTTP/1.1 200 OK\n   {\n      \"status\": \"success\",\n      \"code\": 200,\n      \"data\":{\n\t\t\t\t\t    \"promedio\": \"87\",\n                        \"observaciones\": \"Bueno\",\n\t\t\t\t\t\t\"ciEstudiante\": \"345656\",\n\t\t\t\t\t\t\"idActividad\": \"2\",\n\t\t\t\t\t\t\"estado\": \"1\"\n\t\t\t\t}\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteActividad.php",
    "groupTitle": "EstudianteActividad"
  },
  {
    "type": "post",
    "url": "/estudianteactividad/",
    "title": "POST ESTUDIANTE ACTIVIDAD",
    "name": "PostEstudianteActividad",
    "group": "EstudianteActividad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;promedio&quot;: &quot;96&quot;, &quot;observaciones&quot;: &quot;Muy bueno&quot;, &quot;ciEstudiante&quot;: &quot;3458656&quot;, &quot;idActividad&quot;: &quot;2&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"EstudianteActividad creado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteActividad.php",
    "groupTitle": "EstudianteActividad"
  },
  {
    "type": "put",
    "url": "/estudianteactividad/:ci/:id",
    "title": "PUT ESTUDIANTE ACTIVIDAD",
    "name": "PutEstudianteActividad",
    "group": "EstudianteActividad",
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
            "description": "<p>Identificador de Actividad.</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"EstudianteActividad modificado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/EstudianteActividad.php",
    "groupTitle": "EstudianteActividad"
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
            "description": "<p>Datos sacados de la tabla tblEstudiante</p>"
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
            "description": "<p>Datos sacados de la tabla tblEstudiante</p>"
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
            "description": "<p>Datos sacados de la tabla tblEstuduantegrupo</p>"
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
            "description": "<p>Datos sacados de la tabla tblEstuduantegrupo.</p>"
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
            "description": "<p>Datos sacados de la tabla tblGrupo</p>"
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
            "description": "<p>Datos sacados de la tabla tblGrupo</p>"
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
    "type": "delete",
    "url": "/grupomateria/Id",
    "title": "DELETE GRUPO MATERIA",
    "name": "DeleteGrupoMateria",
    "group": "GrupoMateria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación del GrupoMateria.</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"GrupoMateria eliminada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/GrupoMateria.php",
    "groupTitle": "GrupoMateria"
  },
  {
    "type": "get",
    "url": "/grupomateria",
    "title": "GET GRUPO MATERIA",
    "name": "GetGrupoMateria",
    "group": "GrupoMateria",
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
            "description": "<p>Datos sacados de la tabla tblGrupoMateria</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.id",
            "description": "<p>identificador primario de la tabla tblGrupoColumna</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.observaciones",
            "description": "<p>datos relevantes</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.idGrupo",
            "description": "<p>llave foranea de la tabla tblGrupo</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.idMateria",
            "description": "<p>llave foranea de la tabla tblmateria</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.ciProfesor",
            "description": "<p>llave foranea de la tabla tblProfesor por numero de carnet</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de la tabla tblMateria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": [\n             \t\t  {\n                   \t\"id\": \"6\",\n                         \"observaciones\": \"Ninguna\",\n                         \"idGrupo\": \"4\",\n                         \"idMateria\": \"1\",\n                         \"ciProfesor\": \"5443331\",\n                         \"estado\": \"1\"\n              \t  }\n           ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/GrupoMateria.php",
    "groupTitle": "GrupoMateria"
  },
  {
    "type": "get",
    "url": "/grupomateria/:Id",
    "title": "GET GRUPO MATERIA",
    "name": "GetGrupoMateriaID",
    "group": "GrupoMateria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de GrupoMateria.</p>"
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
            "description": "<p>Datos sacados de la tabla tblGrupoMateria</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.id",
            "description": "<p>identificador primario de la tabla tblGrupoMateria</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.observaciones",
            "description": "<p>datos relevantes</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.idGrupo",
            "description": "<p>llave foranea de la tabla tblGrupo</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.idMateria",
            "description": "<p>llave foranea de la tabla tblmateria</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.ciProfesor",
            "description": "<p>llave foranea de la tabla tblProfesor por numero de carnet</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de la tabla tblMateria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": {\n              \"id\": \"2\",\n                 \"observaciones\": \"Ninguna\",\n                 \"idGrupo\": \"5\",\n                 \"idMateria\": \"7\",\n                 \"ciProfesor\": \"2\",\n                 \"estado\": \"1\"\n           }    \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/GrupoMateria.php",
    "groupTitle": "GrupoMateria"
  },
  {
    "type": "post",
    "url": "/grupomateria",
    "title": "POST GRUPO MATERIA",
    "name": "PostGrupoMateria",
    "group": "GrupoMateria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ { &quot;observaciones&quot;: &quot;Ninguna&quot;, &quot;idGrupo&quot;: &quot;5&quot;, &quot;idMateria&quot;: &quot;8&quot;, &quot;ciProfesor&quot;: &quot;3&quot;, &quot;estado&quot;: &quot;1&quot; } }</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"GrupoMateria creado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/GrupoMateria.php",
    "groupTitle": "GrupoMateria"
  },
  {
    "type": "put",
    "url": "/grupomateria/:Id",
    "title": "PUT GRUPO MATERIA",
    "name": "PutGrupoMateria",
    "group": "GrupoMateria",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de GrupoMateria.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;observaciones&quot;: &quot;Ninguna&quot;, &quot;idGrupo&quot;: &quot;5&quot;, &quot;idMateria&quot;: &quot;8&quot;, &quot;ciProfesor&quot;: &quot;3&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"GrupoMateria modificado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/GrupoMateria.php",
    "groupTitle": "GrupoMateria"
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
    "url": "/materia/Id",
    "title": "DELETE MATERIA",
    "name": "DeleteMateria",
    "group": "Materia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de la Materia.</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Materia eliminada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/materia.php",
    "groupTitle": "Materia"
  },
  {
    "type": "get",
    "url": "/materia/:id",
    "title": "GET MATERIA ID",
    "name": "GetMateriaID",
    "group": "Materia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de Materia.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
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
            "description": "<p>Datos sacados de la tabla tblMateria</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>identificador primario de la tabla</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "data.Descripcion",
            "description": "<p>Nombre de la materia</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de la Materia</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": {\n              \"id\": \"2\",\n                 \"descripcion\": \"Fisica\",\n                 \"estado\": \"1\"\n           }    \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/materia.php",
    "groupTitle": "Materia"
  },
  {
    "type": "post",
    "url": "/materia",
    "title": "POST MATERIA",
    "name": "PostMateria",
    "group": "Materia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{</p> <pre><code>\t\t\t\t\t\t&quot;descripcion&quot;: &quot;Psicologia 2&quot;, \t\t\t\t\t\t&quot;estado&quot;: &quot;1&quot; \t\t\t\t \t\t\t\t\t }</code></pre>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Materia creada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/materia.php",
    "groupTitle": "Materia"
  },
  {
    "type": "put",
    "url": "/materia/:id",
    "title": "PUT MATERIA",
    "name": "PutMateria",
    "group": "Materia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificación de materia.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;descripcion&quot;: &quot;Artes Plasticas&quot;, &quot;estado&quot;:&quot;1&quot; }</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Materia modificado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/materia.php",
    "groupTitle": "Materia"
  },
  {
    "type": "delete",
    "url": "/persona/:ci",
    "title": "DELETE PERSONA",
    "name": "DeletePersona",
    "group": "Persona",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Identificación de la Persona.</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Persona eliminado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Persona.php",
    "groupTitle": "Persona"
  },
  {
    "type": "get",
    "url": "/persona",
    "title": "GET PERSONA",
    "name": "GetPersona",
    "group": "Persona",
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
            "description": "<p>Datos sacados de la tabla tblPersona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ciPersona",
            "description": "<p>Cedula de Identidad de la Persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nombre",
            "description": "<p>Nombre de la Persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.apellidos",
            "description": "<p>Apellidos de la Persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.telefono",
            "description": "<p>Telefono de la Persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.direccion",
            "description": "<p>Direccion de la Persona</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n      \"status\": \"success\",\n      \"code\": 200,\n      \"data\": [\n                  {\n                         \"ciPersona\": \"6545454\",\n          \t\t\t\t\"nombre\": \"lucia\",\n          \t\t\t\t\"apellidos\": \"vega\",\n\t\t\t\t\t\t\t\"telefono\": \"987458\",\n\t\t\t\t\t\t\t\"direccion\": \"c/hamacas\"\n                   }\n              ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Persona.php",
    "groupTitle": "Persona"
  },
  {
    "type": "get",
    "url": "/persona/:ci",
    "title": "GET PERSONA CI",
    "name": "GetPersonaCI",
    "group": "Persona",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Cedula de Identidad de la Persona.</p>"
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
            "description": "<p>Datos sacados de la tabla tblPersona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ciPersona",
            "description": "<p>Cedula de Identidad del persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nombre",
            "description": "<p>Nombre de la Persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.apellidos",
            "description": "<p>Apellidos de la Persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.telefono",
            "description": "<p>Telefono de la Persona</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.direccion",
            "description": "<p>Direccion de la Persona</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n      \"status\": \"success\",\n      \"code\": 200,\n      \"data\": {\n                \t\"ciPersona\": \"6545454\",\n          \t\t\"nombre\": \"lucia\",\n          \t\t\"apellidos\": \"vega\",\n\t\t\t\t\t\"telefono\": \"987458\",\n\t\t\t\t\t\"direccion\": \"c/hamacas\"\n              }    \n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Persona.php",
    "groupTitle": "Persona"
  },
  {
    "type": "post",
    "url": "/persona/",
    "title": "POST PERSONA",
    "name": "PostPersona",
    "group": "Persona",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;ciPersona&quot;: &quot;6545454&quot;, &quot;nombre&quot;: &quot;lucia&quot;, &quot;apellidos&quot;: &quot;vega&quot;, &quot;telefono&quot;: &quot;987458&quot;, &quot;direccion&quot;: &quot;c/hamacas&quot; }</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Persona creada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Persona.php",
    "groupTitle": "Persona"
  },
  {
    "type": "put",
    "url": "/persona/:ci",
    "title": "PUT PERSONA",
    "name": "PutPersona",
    "group": "Persona",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ci",
            "description": "<p>Identificación de la Persona.</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;ciPersona&quot;: &quot;6545454&quot;, &quot;nombre&quot;: &quot;lucia&quot;, &quot;apellidos&quot;: &quot;vega&quot;, &quot;telefono&quot;: &quot;987458&quot;, &quot;direccion&quot;: &quot;c/hamacas&quot; }</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Persona modificada correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/Persona.php",
    "groupTitle": "Persona"
  },
  {
    "type": "delete",
    "url": "/profesor/id",
    "title": "DELETE PROFESOR",
    "name": "DeleteProfesor",
    "group": "Profesor",
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Profesor eliminado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/profesor.php",
    "groupTitle": "Profesor"
  },
  {
    "type": "get",
    "url": "/profesor",
    "title": "GET PROFESOR",
    "name": "GetProfesor",
    "group": "Profesor",
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
            "description": "<p>Datos sacados de la tabla tblProfesor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.Categoria",
            "description": "<p>rango del profesor</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "data.Salario",
            "description": "<p>remuneración económica</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.Especialidad",
            "description": "<p>Materia que imparte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ciPersona",
            "description": "<p>Carnet de identidad, llave foranea</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de la tabla tblProfesor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": [\n             \t\t  {\n                   \t\"categoria\": \"Primaria\",\n         \t\t\t\t\"salario\": \"3000\",\n         \t\t\t\t\"especialidad\": \"matematicas\",\n         \t\t\t\t\"ciPersona\": \"1\",\n         \t\t\t\t\"estado\": \"1\"\n              \t  }\n           ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/profesor.php",
    "groupTitle": "Profesor"
  },
  {
    "type": "get",
    "url": "/profesor/:id",
    "title": "GET PROFESOR ID",
    "name": "GetProfesorID",
    "group": "Profesor",
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
            "description": "<p>Datos sacados de la tabla tblProfesor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.Categoria",
            "description": "<p>rango del profesor</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "data.Salario",
            "description": "<p>remuneración económica</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.Especialidad",
            "description": "<p>Materia que imparte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.ciPersona",
            "description": "<p>Carnet de identidad, llave foranea</p>"
          },
          {
            "group": "Success 200",
            "type": "Tinyind",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de la tabla tblProfesor</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": {\n              \"status\": \"success\",\n \t\t\t\t\"code\": 200,\n \t\t\t\t\"data\": {\n    \t\t\t\t\"categoria\": \"Primaria\",\n     \t\t\t\"salario\": \"1000\",\n     \t\t\t\"especialidad\": \"matefacil\",\n     \t\t\t\"ciPersona\": \"3\",\n     \t\t\t\"estado\": \"1\"\n           }    \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/profesor.php",
    "groupTitle": "Profesor"
  },
  {
    "type": "post",
    "url": "/profesor",
    "title": "POST PROFESOR",
    "name": "PostProfesor",
    "group": "Profesor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{</p> <pre><code>\t\t\t\t\t\t&quot;categoria&quot;: &quot;E5&quot;, \t\t\t\t\t\t&quot;salario&quot;: &quot;4000&quot;, \t\t\t\t\t\t&quot;especialidad&quot;: &quot;Matematicas&quot;, \t\t\t\t\t\t&quot;ciPersona&quot;: &quot;4455217&quot;, \t\t\t\t\t\t&quot;estado&quot;: &quot;1&quot; \t\t\t\t\t }</code></pre>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Profesor creado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/profesor.php",
    "groupTitle": "Profesor"
  },
  {
    "type": "put",
    "url": "/profesor/:id",
    "title": "PUT PROFESOR",
    "name": "PutProfesor",
    "group": "Profesor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "jsonConsumo",
            "description": "<p>{ &quot;categoria&quot;: &quot;Primaria&quot;, &quot;salario&quot;: &quot;3000&quot;, &quot;especialidad&quot;: &quot;matematicas&quot;, &quot;ciPersona&quot;: &quot;3&quot;, &quot;estado&quot;: &quot;1&quot; }</p>"
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
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"message\": \"Profesor modificado correctamente\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/profesor.php",
    "groupTitle": "Profesor"
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
            "description": "<p>Datos sacados de la tabla tblTutor</p>"
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
            "description": "<p>Datos sacados de la tabla tblTutor</p>"
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
  },
  {
    "type": "get",
    "url": "/materia",
    "title": "GET MATERIA",
    "name": "GetMateria",
    "group": "materia",
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
            "description": "<p>Datos sacados de la tabla tblMateria</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>identificador primario de la tabla</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "data.Descripcion",
            "description": "<p>Nombre de la materia</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.estado",
            "description": "<p>Estado de la Materia</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n   \"code\": 200,\n   \"data\": [\n             \t\t  {\n                   \t\"id\": \"8\",\n                         \"descripcion\": \"Artes Plasticas\",\n                         \"estado\": \"1\"\n              \t  }\n           ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "servicios/materia.php",
    "groupTitle": "materia"
  }
] });

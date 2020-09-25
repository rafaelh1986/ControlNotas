 /**
 * @api {get} /estuduanteactividad GET ESTUDIANTE ACTIVIDAD
 * @apiName GetEstudianteActividad
 * @apiGroup EstudianteActividad
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla estudianteactividad
 *
 * @apiSuccess {Float} data.promedio Nota del Estudiante
 * @apiSuccess {String} data.observaciones Observacion del Estudiante 
 * @apiSuccess {Number} data.ciEstudiante Cedula de Identidad del Estudiante
 * @apiSuccess {Number} data.idActividad Identificador de la Actividad
 * @apiSuccess {Boolean} data.estado Estado de EstudianteGrupo
 *   
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *               	{
 *						"promedio": "58",
                        "observaciones": "Bueno",
 *						"ciEstudiante": "345666",
 *						"idActividad": "2",
 *						"estado": "1"
 *					}
 *               ]
 *    }
 */
 
 /**
 * @api {get} /estudianteactividad/:ci/:id GET ESTUDIANTE ACTIVIDAD CI,ID
 * @apiName GetEstudianteActividadID
 * @apiGroup EstudianteActividad
 *
 * @apiParam {Number} ci Cedula  Cedula de Identidad del Estudiante.
 * @apiParam {Number} id Identificador de Actividad.
 *
 * @apiSuccess {String} status Estado de respuesta. 
 * @apiSuccess {Number} code  Codigo de servidor http.
 * @apiSuccess {String} data Datos sacados de la tabla estuduantegrupo.
 *
 * @apiSuccess {Float} data.promedio  Nota del Estudiante 
 * @apiSuccess {String} data.observaciones Observacion del Estudiante
 * @apiSuccess {Number} data.ciEstudiante Cedula de Identidad del Estudiante
 * @apiSuccess {Number} data.idActividad Identificador de la Actividad
 * @apiSuccess {Boolean} data.estado Estado de EstudianteGrupo
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data":{
 *					    "promedio": "87",
                        "observaciones": "Bueno",
 *						"ciEstudiante": "345656",
 *						"idActividad": "2",
 *						"estado": "1"
 *				}
 *    }
 */
 
 /**
 * @api {post} /estudianteactividad/ POST ESTUDIANTE ACTIVIDAD
 * @apiName PostEstudianteActividad
 * @apiGroup EstudianteActividad
 *
 * @apiParam jsonConsumo {
 *							"promedio": "96",
 *                          "observaciones": "Muy bueno",
 *						    "ciEstudiante": "3458656",
 *						    "idActividad": "2",
 *						    "estado": "1"
 *						 }
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} message Mensaje de exito
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "message": "EstudianteActividad creado correctamente"
 *    }
 */
 
 /**
 * @api {put} /estudianteactividad/:ci/:id PUT ESTUDIANTE ACTIVIDAD
 * @apiName PutEstudianteActividad
 * @apiGroup EstudianteActividad
 *
 * @apiParam {Number} ci Cedula de Identidad del Estudiante.
 * @apiParam {Number} id Identificador de Actividad.
 *
 * @apiParam jsonConsumo {
 *							"estado": "0"
 *						 }
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} message Mensaje de exito
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "message": "EstudianteActividad modificado correctamente"
 *    }
 */
 
 /**
 * @api {delete} /estudianteactividad/:ci/:id DELETE ESTUDIANTE ACTIVIDAD
 * @apiName DeleteEstudianteActividad
 * @apiGroup EstudianteActividad
 *
 * @apiParam {Number} ci Cedula de Identidad del Estudiante.
 * @apiParam {Number} id Identificador de Actividad.
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} message Mensaje de exito
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "message": "EstudianteActividad eliminada correctamente"
 *    }
 */
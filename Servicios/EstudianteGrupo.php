 /**
 * @api {get} /estuduantegrupo GET ESTUDIANTE GRUPO
 * @apiName GetEstudianteGrupo
 * @apiGroup EstudianteGrupo
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla estuduantegrupo
 *
 * @apiSuccess {String} data.gestion Identificación de la gestión
 * @apiSuccess {String} data.ciEstudiante Cedula de Identidad del Estudiante
 * @apiSuccess {Number} data.idGrupo Identificador del Grupo
 * @apiSuccess {Boolean} data.estado Estado de EstudianteGrupo
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *               	{
 *						"gestion": "2020",
 *						"ciEstudiante": "345666",
 *						"idGrupo": "2",
 *						"estado": "1"
 *					}
 *               ]
 *    }
 */
 
 /**
 * @api {get} /estudiantegrupo/:ci/:id/:gestion GET ESTUDIANTE GRUPO CI,ID,GESTION
 * @apiName GetEstudianteGrupoID
 * @apiGroup EstudianteGrupo
 *
 * @apiParam {Number} ci Cedula de Identidad del Estudiante.
 * @apiParam {Number} id Identificación de la gestión.
 * @apiParam {Number} gestion Identificador del Grupo.
 *
 * @apiSuccess {String} status Estado de respuesta. 
 * @apiSuccess {Number} code  Codigo de servidor http.
 * @apiSuccess {String} data Datos sacados de la tabla estuduantegrupo.
 *
 * @apiSuccess {String} data.gestion Identificación de la gestión.
 * @apiSuccess {String} data.ciEstudiante Cedula de Identidad del Estudiante.
 * @apiSuccess {Number} data.idGrupo Identificador del Grupo.
 * @apiSuccess {Boolean} data.estado Estado de EstudianteGrupo.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data":{
 *					"gestion": "2020",
 *        			"ciEstudiante": "3444231",
 *        			"idGrupo": "2",
 *        			"estado": "1"
 *				}
 *    }
 */
 
 /**
 * @api {post} /estudiantegrupo/ POST ESTUDIANTE GRUPO
 * @apiName PostEstudianteGrupo
 * @apiGroup EstudianteGrupo
 *
 * @apiParam jsonConsumo {
 *							"gestion": "2020",
 *							"cidestudiante": "345666",
 *							"idgrupo": "2",
 *							"estado": "1"
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
 *       "message": "EstudianteGrupo creado correctamente"
 *    }
 */
 
 /**
 * @api {put} /estudiantegrupo/:ci/:id/:gestion PUT ESTUDIANTE GRUPO
 * @apiName PutEstudianteGrupo
 * @apiGroup EstudianteGrupo
 *
 * @apiParam {Number} ci Cedula de Identidad del Estudiante.
 * @apiParam {Number} id Identificación de la gestión.
 * @apiParam {Number} gestion Identificador del Grupo.
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
 *       "message": "EstudianteGrupo modificado correctamente"
 *    }
 */
 
 /**
 * @api {delete} /estudiantegrupo/:ci/:id/:gestion DELETE ESTUDIANTE GRUPO
 * @apiName DeleteEstudianteGrupo
 * @apiGroup EstudianteGrupo
 *
 * @apiParam {Number} ci Cedula de Identidad del Estudiante.
 * @apiParam {Number} id Identificación de la gestión.
 * @apiParam {Number} gestion Identificador del Grupo.
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
 *       "message": "Actividad eliminada correctamente"
 *    }
 */
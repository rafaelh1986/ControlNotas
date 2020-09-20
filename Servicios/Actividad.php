 /**
 * @api {get} /actividad GET ACTIVIDADES
 * @apiName GetActividad
 * @apiGroup Actividad
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla actividad
 *
 * @apiSuccess {Number} data.id Identificador de actividad
 * @apiSuccess {String} data.descripcion Nombre de la actividad
 * @apiSuccess {Float} data.puntaje Nota de la actividad
 * @apiSuccess {Date} data.fecha Fecha de realización de la actividad
 * @apiSuccess {String} data.idgrupomateria Identificador de la tabla GrupoMateria
 * @apiSuccess {Boolean} data.estado Estado de la Actividad
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *                   {
 *                       "id": "1",
 *                       "descripcion": "1er Examen",
 *                       "puntaje": "80",
 *                       "Fecha": "2020-02-12",
 *                       "estado": "1"
 *                    }
 *               ]
 *    }
 */
 
 /**
 * @api {get} /actividad/:id GET ACTIVIDAD ID
 * @apiName GetActividadID
 * @apiGroup Actividad
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla actividad
 *
 * @apiSuccess {Number} data.id Identificador de actividad
 * @apiSuccess {String} data.descripcion Nombre de la actividad
 * @apiSuccess {Float} data.puntaje Nota de la actividad
 * @apiSuccess {Date} data.fecha Fecha de realización de la actividad
 * @apiSuccess {String} data.idgrupomateria Identificador de la tabla GrupoMateria
 * @apiSuccess {Boolean} data.estado Estado de la Actividad
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": {
 *                  "id": "1",
 *                  "descripcion": "1er Examen",
 *                  "puntaje": "80",
 *                  "Fecha": "2020-02-12",
 *                  "estado": "1"
 *               }    
 *    }
 */
 
 /**
 * @api {post} /actividad/ POST ACTIVIDADES
 * @apiName PostActividad
 * @apiGroup Actividad
 *
 * @apiParam jsonConsumo {
							"descripcion": "2do Examen", 
							"puntaje": "70", 
							"precio": "60", 
							"fecha": "2020-03-14",
							"idgrupomateria": "1",
							"estado":"1"
						 }
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {Object} data Mensaje de exito
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "message": "Actividad creada correctamente"
 *    }
 */
 
 /**
 * @api {put} /actividad/:id PUT ACTIVIDADES
 * @apiName PuttActividad
 * @apiGroup Actividad
 *
 * @apiParam jsonConsumo {
							"descripcion": "2do Examen", 
							"puntaje": "80", 
							"fecha": "2020-03-14",
							"idgrupomateria": "1",
							"estado":"1",
						 }
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {Object} data Mensaje de exito
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "message": "Actividad modificada correctamente"
 *    }
 */
 
 /**
 * @api {delete} /actividad/:id DELETE ACTIVIDADES
 * @apiName DeleteActividad
 * @apiGroup Actividad
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {Object} data Mensaje de exito
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "message": "Actividad eliminada correctamente"
 *    }
 */
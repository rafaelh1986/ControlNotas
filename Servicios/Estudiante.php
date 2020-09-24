 /**
 * @api {get} /estudiante GET ESTUDIANTES
 * @apiName GetEstudiante
 * @apiGroup Estudiante
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla estudiante
 *
 * @apiSuccess {Number} data.rude Identificador de estudiante
 * @apiSuccess {String} data.observacion Observacion del estudiante
 * @apiSuccess {Date} data.fechanac Fecha de Nacimiento del estudiante
 * @apiSuccess {Number} data.cipersona Cedula de Identidad del estudiante
 * @apiSuccess {Boolean} data.estado Estado del estudiante
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *                   {
 *                       "rude": "1354",
 *                       "observacion": " ",
 *                       "fechanac": "1998-10-04",
 *                       "cipersona": "3211234",
 *                       "estado": "1"
 *                    }
 *               ]
 *    }
 */
 
 /**
 * @api {get} /estudiante/:ci GET ESTUDIANTE CI
 * @apiName Get ESTUDIANTE CI
 * @apiGroup Estudiante
 *
 * @apiParam {Number} id Identificación de la Estudiante.
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla estudiante
 *
 @apiSuccess {Number} data.rude Identificador de estudiante
 * @apiSuccess {String} data.observacion Observacion del estudiante
 * @apiSuccess {Date} data.fechanac Fecha de Nacimiento del estudiante
 * @apiSuccess {Number} data.cipersona Cedula de Identidad del estudiante
 * @apiSuccess {Boolean} data.estado Estado del estudiante
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": {
 *                 		 "rude": "1354",
 *                       "observacion": " ",
 *                       "fechanac": "1998-10-04",
 *                       "cipersona": "3211234",
 *                       "estado": "1"
 *               }    
 *    }
 */
 
 /**
 * @api {post} /estudiante/ POST ESTUDIANTE
 * @apiName PostEstudiante
 * @apiGroup Estudiante
 *
 * @apiParam jsonConsumo {
							"rude": "1354",
 *                       	"observacion": " ",
 *                       	"fechanac": "1998-10-04",
 *                       	"cipersona": "3211234",
 *                       	"estado": "1"
						 }
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
 *       "message": "Estudiante creado correctamente"
 *    }
 */
 
 /**
 * @api {put} /estudiante/:id PUT ESTUDIANTE
 * @apiName PutEstudiante
 * @apiGroup Estudiante
 *
 * @apiParam {Number} id Identificación de la Estudiante.
 *
 * @apiParam jsonConsumo {
							"rude": "1354",
 *                       	"observacion": " ",
 *                       	"fechanac": "1998-10-04",
 *                       	"estado": "1"
						 }
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
 *       "message": "Estudiante modificado correctamente"
 *    }
 */
 
 /**
 * @api {delete} /estudiante/:id DELETE ESTUDIANTE
 * @apiName DeleteEstudiante
 * @apiGroup Estudiante
 *
 * @apiParam {Number} id Identificación de la Estudiante.
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
 *       "message": "Estudiante eliminado correctamente"
 *    }
 */
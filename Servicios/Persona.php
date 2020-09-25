 /**
 * @api {get} /persona GET PERSONA
 * @apiName GetPersona
 * @apiGroup Persona
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblPersona
 *
 * @apiSuccess {String} data.ciPersona Cedula de Identidad de la Persona
 * @apiSuccess {String} data.nombre Nombre de la Persona
 * @apiSuccess {String} data.apellidos Apellidos de la Persona
 * @apiSuccess {String} data.telefono Telefono de la Persona
 * @apiSuccess {String} data.direccion Direccion de la Persona
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *                   {
 *                          "ciPersona": "6545454",
 *           				"nombre": "lucia",
 *           				"apellidos": "vega",
 *							"telefono": "987458",
 *							"direccion": "c/hamacas"
 *                    }
 *               ]
 *    }
 */
 
 /**
 * @api {get} /persona/:ci GET PERSONA CI
 * @apiName GetPersonaCI
 * @apiGroup Persona
 *
 * @apiParam {Number} ci Cedula de Identidad de la Persona.
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblPersona
 *
 * @apiSuccess {String} data.ciPersona Cedula de Identidad del persona
 * @apiSuccess {String} data.nombre Nombre de la Persona
 * @apiSuccess {String} data.apellidos Apellidos de la Persona
 * @apiSuccess {String} data.telefono Telefono de la Persona
 * @apiSuccess {String} data.direccion Direccion de la Persona
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": {
 *                 	"ciPersona": "6545454",
 *           		"nombre": "lucia",
 *           		"apellidos": "vega",
 *					"telefono": "987458",
 *					"direccion": "c/hamacas"
 *               }    
 *    }
 */
 
 /**
 * @api {post} /persona/ POST PERSONA
 * @apiName PostPersona
 * @apiGroup Persona
 *
 * @apiParam jsonConsumo {
 *							"ciPersona": "6545454",
 *           				"nombre": "lucia",
 *           				"apellidos": "vega",
 *							"telefono": "987458",
 *							"direccion": "c/hamacas"
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
 *       "message": "Persona creada correctamente"
 *    }
 */
 
 /**
 * @api {put} /persona/:ci PUT PERSONA
 * @apiName PutPersona
 * @apiGroup Persona
 *
 * @apiParam {Number} ci Identificación de la Persona.
 *
 * @apiParam jsonConsumo {
 "ciPersona": "6545454",
 *           				"nombre": "lucia",
 *           				"apellidos": "vega",
 *							"telefono": "987458",
 *							"direccion": "c/hamacas"
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
 *       "message": "Persona modificada correctamente"
 *    }
 */
 
 /**
 * @api {delete} /persona/:ci DELETE PERSONA
 * @apiName DeletePersona
 * @apiGroup Persona
 *
 * @apiParam {Number} ci Identificación de la Persona.
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
 *       "message": "Persona eliminado correctamente"
 *    }
 */
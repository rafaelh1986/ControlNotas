 /**
 * @api {get} /tutor GET TUTOR
 * @apiName GetTutor
 * @apiGroup Tutor
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblTutor
 *
 * @apiSuccess {Number} data.correo correo electronico del tutor
 * @apiSuccess {String} data.ciPersona Cedula de Identidad del tutor
 * @apiSuccess {Float} data.ciEstudiante Cedula de Identidad del Estudiante
 * @apiSuccess {Boolean} data.estado Estado del Tutor
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *                   {
 *                          "correo": "lorena.sanchez@gmail.com",
          				    "ciPersona": "6545454",
            				"ciEstudiante": "1232345",
            				"estado": "1"

 *                    }
 *               ]
 *    }
 */
 
 /**
 * @api {get} /tutor/:ci GET TUTOR CI
 * @apiName GetTutorCI
 * @apiGroup Tutor
 *
 * @apiParam {Number} ci Cedula de Identidad del Tutor.
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblTutor
 *
 * @apiSuccess {Number} data.correo correo electronico del tutor
 * @apiSuccess {String} data.ciPersona Cedula de Identidad del tutor
 * @apiSuccess {Float} data.ciEstudiante Cedula de Identidad del Estudiante
 * @apiSuccess {Boolean} data.estado Estado del Tutor
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": {
 *                 	"correo": "lorena.sanchez@gmail.com",
          			"ciPersona": "6545454",
            		"ciEstudiante": "1232345",
            		"estado": "1"
 *               }    
 *    }
 */
 
 /**
 * @api {post} /tutor/ POST TUTOR
 * @apiName PostTutor
 * @apiGroup Tutor
 *
 * @apiParam jsonConsumo {
							"correo": "lorena.sanchez@gmail.com",
          				    "ciPersona": "6545454",
            				"ciEstudiante": "1232345",
            				"estado": "1"
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
 *       "message": "Tutor creado correctamente"
 *    }
 */
 
 /**
 * @api {put} /tutor/:ci PUT TUTOR
 * @apiName PutTutor
 * @apiGroup Tutor
 *
 * @apiParam {Number} ci Identificación del Tutor.
 *
 * @apiParam jsonConsumo {
							"correo": "lorena.sanchez@gmail.com",
            				"ciEstudiante": "1232345",
            				"estado": "1"
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
 *       "message": "Tutor modificado correctamente"
 *    }
 */
 
 /**
 * @api {delete} /tutor/:ci DELETE TUTOR
 * @apiName DeleteTutor
 * @apiGroup Tutor
 *
 * @apiParam {Number} ci Identificación de la Tutor.
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
 *       "message": "Tutor eliminado correctamente"
 *    }
 */
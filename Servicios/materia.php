/**
 * @api {get} /materia GET MATERIA
 * @apiName GetMateria
 * @apiGroup materia
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblMateria
 *
 * @apiSuccess {Number} data.id identificador primario de la tabla
 * @apiSuccess {float} data.Descripcion Nombre de la materia
 * @apiSuccess {Boolean} data.estado Estado de la Materia
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *                 		  {
 *                       	"id": "8",
                            "descripcion": "Artes Plasticas",
                            "estado": "1"
 *                  	  }
 *               ]
 *    }
 */
 
 /**
 * @api {get} /materia/:id GET MATERIA ID
 * @apiName GetMateriaID
 * @apiGroup Materia
 *
 * @apiParam {Number} id Identificación de Materia.
 *
 * @apiSuccess {Number} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblMateria
 *
 * @apiSuccess {String} data.id identificador primario de la tabla
 * @apiSuccess {float} data.Descripcion Nombre de la materia
 * @apiSuccess {Boolean} data.estado Estado de la Materia
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": {
 *                  "id": "2",
                    "descripcion": "Fisica",
                    "estado": "1"
 *               }    
 *    }
 */
 
 /**
 * @api {post} /materia POST MATERIA
 * @apiName PostMateria
 * @apiGroup Materia
 *
 * @apiParam jsonConsumo {
					
							"descripcion": "Psicologia 2",
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
 *       "message": "Materia creada correctamente"
 *    }
 */
 
 /**
 * @api {put} /materia/:id PUT MATERIA
 * @apiName PutMateria
 * @apiGroup Materia
 *
 * @apiParam {Number} id Identificación de materia.
 *
 * @apiParam jsonConsumo {
                            "descripcion": "Artes Plasticas",
                            "estado":"1"
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
 *       "message": "Materia modificado correctamente"
 *    }
 */
 
 /**
 * @api {delete} /materia/Id DELETE MATERIA
 * @apiName DeleteMateria
 * @apiGroup Materia
 *
 * @apiParam {Number} id Identificación de la Materia.
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
 *       "message": "Materia eliminada correctamente"
 *    }
 */
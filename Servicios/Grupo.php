 /**
 * @api {get} /grupo GET GRUPO
 * @apiName GetGrupo
 * @apiGroup Grupo
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblGrupo
 *
 * @apiSuccess {Number} data.id Identificador del grupo
 * @apiSuccess {String} data.nivel Nivel del grupo
 * @apiSuccess {String} data.paralelo Identificación del paralelo del grupo
 * @apiSuccess {Boolean} data.estado Estado de la Actividad
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *               	{
 *           			"id": "4",
 *           			"nivel": "Secundaria",
 *           			"descripcion": "5to",
 *           			"paralelo": "A",
 *           			"estado": "1"
 *      			}
 *               ]
 *    }
 */
 
 /**
 * @api {get} /grupo/:id GET GRUPO ID
 * @apiName GetGrupoID
 * @apiGroup Grupo
 *
 * @apiParam {Number} id Identificación del Grupo.
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblGrupo
 *
 * @apiSuccess {Number} data.id Identificador del grupo
 * @apiSuccess {String} data.nivel Nivel del grupo
 * @apiSuccess {String} data.paralelo Identificación del paralelo del grupo
 * @apiSuccess {Boolean} data.estado Estado del Grupo
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    	{
 *   		"status": "success",
 *   		"code": 200,
 *   		"data": {
 *       				"id": "3",
 *       				"nivel": "Secundaria",
 *       				"descripcion": "6to",
 *       				"paralelo": "B",
 *       				"estado": "1"
 *   				}
 *		}
 */
 
 /**
 * @api {post} /grupo/ POST GRUPO
 * @apiName PostGRUPO
 * @apiGroup Grupo
 *
 * @apiParam jsonConsumo {
 *   						"nivel": "Secundaria",
 *   						"descripcion": "5to",
 *   						"paralelo": "A",
 *   						"estado": "1"
 *  					 }
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
 *       "message": "Grupo creado correctamente"
 *    }
 */
 
 /**
 * @api {put} /grupo/:id PUT GRUPO
 * @apiName PutGrupo
 * @apiGroup Grupo
 *
 * @apiParam {Number} id Identificación de la Actividad.
 *
 * @apiParam jsonConsumo {
 *   						"nivel": "Secundaria",
 *   						"descripcion": "6to",
 *   						"paralelo": "B",
 *   						"estado": "1"
 *  					 }
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
 *       "message": "Grupo modificado correctamente"
 *    }
 */
 
 /**
 * @api {delete} /grupo/:id DELETE GRUPO
 * @apiName DeleteGrupo
 * @apiGroup Grupo
 *
 * @apiParam {Number} id Identificación de la Actividad.
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
 *       "message": "Grupo eliminado correctamente"
 *    }
 */
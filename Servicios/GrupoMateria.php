/**
 * @api {get} /grupomateria GET GRUPO MATERIA
 * @apiName GetGrupoMateria
 * @apiGroup GrupoMateria
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblGrupoMateria
 *
 * @apiSuccess {int} data.id identificador primario de la tabla tblGrupoColumna
 * @apiSuccess {string} data.observaciones datos relevantes
 * @apiSuccess {int} data.idGrupo llave foranea de la tabla tblGrupo
 * @apiSuccess {int} data.idMateria llave foranea de la tabla tblmateria
 * @apiSuccess {string} data.ciProfesor llave foranea de la tabla tblProfesor por numero de carnet
 * @apiSuccess {Boolean} data.estado Estado de la tabla tblMateria
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *                 		  {
 *                       	"id": "6",
                            "observaciones": "Ninguna",
                            "idGrupo": "4",
                            "idMateria": "1",
                            "ciProfesor": "5443331",
                            "estado": "1"
 *                  	  }
 *               ]
 *    }
 */
 
 /**
 * @api {get} /grupomateria/:Id GET GRUPO MATERIA
 * @apiName GetGrupoMateriaID
 * @apiGroup GrupoMateria
 *
 * @apiParam {Number} id Identificación de GrupoMateria.
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblGrupoMateria
 *
 * @apiSuccess {int} data.id identificador primario de la tabla tblGrupoMateria
 * @apiSuccess {string} data.observaciones datos relevantes
 * @apiSuccess {int} data.idGrupo llave foranea de la tabla tblGrupo
 * @apiSuccess {int} data.idMateria llave foranea de la tabla tblmateria
 * @apiSuccess {string} data.ciProfesor llave foranea de la tabla tblProfesor por numero de carnet
 * @apiSuccess {Boolean} data.estado Estado de la tabla tblMateria
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": {
 *                  "id": "2",
                    "observaciones": "Ninguna",
                    "idGrupo": "5",
                    "idMateria": "7",
                    "ciProfesor": "2",
                    "estado": "1"
 *               }    
 *    }
 */
 
 /**
 * @api {post} /grupomateria POST GRUPO MATERIA
 * @apiName PostGrupoMateria
 * @apiGroup GrupoMateria
 *
 * @apiParam jsonConsumo {
					{
						"observaciones": "Ninguna",
                        "idGrupo": "5",
                        "idMateria": "8",
                        "ciProfesor": "3",
                        "estado": "1"
					}
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
 *       "message": "GrupoMateria creado correctamente"
 *    }
 */
 
 /**
 * @api {put} /grupomateria/:Id PUT GRUPO MATERIA
 * @apiName PutGrupoMateria
 * @apiGroup GrupoMateria
 *
 * @apiParam {Number} id Identificación de GrupoMateria.
 *
 * @apiParam jsonConsumo {
                            "observaciones": "Ninguna",
                            "idGrupo": "5",
                            "idMateria": "8",
                            "ciProfesor": "3",
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
 *       "message": "GrupoMateria modificado correctamente"
 *    }
 */
 
 /**
 * @api {delete} /grupomateria/Id DELETE GRUPO MATERIA
 * @apiName DeleteGrupoMateria
 * @apiGroup GrupoMateria
 *
 * @apiParam {Number} id Identificación del GrupoMateria.
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
 *       "message": "GrupoMateria eliminada correctamente"
 *    }
 */
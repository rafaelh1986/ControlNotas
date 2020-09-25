 /**
 * @api {get} http://localhost/ControlNotas/ApiControlNotas/profesor.php/profesor
 * @apiName GetProfesor
 * @apiGroup Profesor
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla Profesor
 *
 * @apiSuccess {String} data.Categoria rango del profesor
 * @apiSuccess {float} data.Salario remuneración económica
 * @apiSuccess {String} data.Especialidad Materia que imparte
 * @apiSuccess {String} data.ciPersona Carnet de identidad, llave foranea
 * @apiSuccess {Tinyind} data.estado Estado de la tabla tblProfesor
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *                 		  {
 *                       	"categoria": "Primaria",
            				"salario": "3000",
            				"especialidad": "matematicas",
            				"ciPersona": "1",
            				"estado": "1"
 *                  	  }
 *               ]
 *    }
 */
 
 /**
 * @api {get} http://localhost/ControlNotas/ApiControlNotas/profesor.php/profesor/ID
 * @apiName GetProfesorID
 * @apiGroup Profesor
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla tblProfesor
 *
 * @apiSuccess {String} data.Categoria rango del profesor
 * @apiSuccess {float} data.Salario remuneración económica
 * @apiSuccess {String} data.Especialidad Materia que imparte
 * @apiSuccess {String} data.ciPersona Carnet de identidad, llave foranea
 * @apiSuccess {Tinyind} data.estado Estado de la tabla tblProfesor
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": {
 *                  "status": "success",
    				"code": 200,
    				"data": {
       				"categoria": "Primaria",
        			"salario": "1000",
        			"especialidad": "matefacil",
        			"ciPersona": "3",
        			"estado": "1"
 *               }    
 *    }
 */
 
 /**
 * @api {post} http://localhost/ControlNotas/ApiControlNotas/profesor.php/profesor
 * @apiName PostProfesor
 * @apiGroup Profesor
 *
 * @apiParam jsonConsumo {
					{
						"categoria": "E5",
						"salario": "4000",
						"especialidad": "Matematicas",
						"ciPersona": "4455217",
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
 *       "message": "Profesor creado correctamente"
 *    }
 */
 
 /**
 * @api {put} http://localhost/ControlNotas/ApiControlNotas/profesor.php/profesor/Id
 * @apiName PutProfesor
 * @apiGroup Profesor
 *
 *
 * @apiParam jsonConsumo {
							"categoria": "Primaria",
							"salario": "3000",
							"especialidad": "matematicas",
							"ciPersona": "3",
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
 *       "message": "Profesor modificado correctamente"
 *    }
 */
 
 /**
 * @api {delete} http://localhost/ControlNotas/ApiControlNotas/profesor.php/profesor/Id
 * @apiName DeleteProfesor
 * @apiGroup Profesor
 *
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
 *       "message": "Profesor eliminado correctamente"
 *    }
 */
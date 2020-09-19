/**
 * @api {get} /actividad/ GET Actividad
 * @apiName GetActividad
 * @apiGroup Actividad
 *
 * @apiSuccess {String} Status  Estado de respuesta.
 * @apiSuccess {Number} Codigo de servidor http.
 * @apiSuccess {String}   Datos sacados de la tabla.
 *
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "status": "success",
 *        "code": 200,
 *        "data": [
 *                  {
 *                      "id": "3",
 *                      "nombre": "Papaya",
 *                      "description": "frutas",
 *                      "precio": "40",
 *                      "imagen": "papaya.png"
 *                  },
 *                  {
 *                      "id": "2",
 *                      "nombre": "Peras",
 *                      "description": "frutas",
 *                      "precio": "60",
 *                      "imagen": ""
 *                  },
 *                  {
 *                      "id": "1",
 *                      "nombre": "Manzanas",
 *                      "description": "jodas",
 *                      "precio": "80",
 *                      "imagen": "pina.png"
 *                  }
 *              ]
 *      }
* @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       
 *     }
 */
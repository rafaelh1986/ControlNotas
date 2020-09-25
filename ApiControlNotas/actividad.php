<?php

require_once 'vendor/autoload.php';

/**
 *
 * @author: Grupo E Mod y Opt I - Cumbre Turno Noche
 *
 */

$app = new \Slim\Slim();

$db = new mysqli('remotemysql.com', 'ichSCkKVhV', 'flkdNFpFa4', 'ichSCkKVhV');

// Configuración de cabeceras
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

// LISTAR TODOS LAS ACTIVIDADES

$app->get('/actividad', function() use($db, $app){
    $sql = 'SELECT * FROM tblActividad ORDER BY id DESC;';
    $query = $db->query($sql);

    $actividades = array();
    while ($actividad = $query->fetch_assoc()) {
        $actividades[] = $actividad;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $actividades
    );

    echo json_encode($result);
});

// DEVOLVER UNA SOLA ACTIVIDAD
/**
 * @api {get} /actividad/:id GET ACTIVIDAD ID
 * @apiName GetActividadID
 * @apiGroup Actividad
 *
 * @apiParam {Number} id Identificación de la Actividad.
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
$app->get('/actividad/:id', function($id) use($db, $app){
    $sql = 'SELECT * FROM tblActividad WHERE id = '.$id;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Actividad no disponible'
    );

    if($query->num_rows == 1){
        $actividad = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $actividad
        );
    }

    echo json_encode($result);
});

// GUARDAR ACTIDAD
/**
 * @api {post} /actividad/ POST ACTIVIDAD
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
  * @apiSuccess {String} message Mensaje de exito
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "message": "Actividad creada correctamente"
 *    }
 */
$app->post('/actividad', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'La Actividad NO se ha creado'
    );

    $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        if(!isset($data['descripcion'])){
            $data['descripcion']=null;
        }

        if(!isset($data['puntaje'])){
            $data['puntaje']=null;
        }

        if(!isset($data['fecha'])){
            $data['fecha']=null;
        }
		
		if(!isset($data['idgrupomateria'])){
            $data['idgrupomateria']=null;
        }

        if(!isset($data['estado'])){
            $data['estado']=null;
        }

        $query = "INSERT INTO tblActividad VALUES(NULL,".
            "'{$data['descripcion']}',".
            "'{$data['puntaje']}',".
            "'{$data['fecha']}',".
			"'{$data['idgrupomateria']}',".
            "'{$data['estado']}'".
            ");";

        $insert = $db->query($query);
		
        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Actividad creado correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR UNA ACTIDAD
/**
 * @api {put} /actividad/:id PUT ACTIVIDAD
 * @apiName PutActividad
 * @apiGroup Actividad
 *
 * @apiParam {Number} id Identificación de la Actividad.
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
 * @apiSuccess {String} message Mensaje de exito
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "message": "Actividad modificada correctamente"
 *    }
 */

$app->put('/actividad/:id', function($id) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE tblActividad SET ".
        "descripcion = '{$data["descripcion"]}', ".
        "puntaje = '{$data["puntaje"]}', ".
		"fecha = '{$data["fecha"]}', ".
		"idgrupomateria = '{$data["idgrupomateria"]}', ".
		"estado = '{$data["estado"]}' WHERE id = {$id} ";

    $query = $db->query($sql);
	
    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'La Actividad se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'La Actividad NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN ACTIDAD
/**
 * @api {delete} /actividad/:id DELETE ACTIVIDAD
 * @apiName DeleteActividad
 * @apiGroup Actividad
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
 *       "message": "Actividad eliminada correctamente"
 *    }
 */
$app->delete('/actividad/:id', function($id) use($db, $app){
    $sql = 'DELETE FROM tblActividad WHERE id = '.$id;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'La Actividad se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'La Actividad no se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();

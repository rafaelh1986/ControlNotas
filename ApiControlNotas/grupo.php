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

// LISTAR TODOS LOS GRUPOS
/**
 * @api {get} /grupo GET GRUPO
 * @apiName GetGrupo
 * @apiGroup Grupo
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla grupo
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
$app->get('/grupo', function() use($db, $app){
    $sql = 'SELECT * FROM tblGrupo ORDER BY id DESC;';
    $query = $db->query($sql);

    $grupos = array();
    while ($grupo = $query->fetch_assoc()) {
        $grupos[] = $grupo;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $grupos
    );

    echo json_encode($result);
});

// DEVOLVER UNA SOLO GRUPO
/**
 * @api {get} /grupo/:id GET GRUPO ID
 * @apiName GetGrupoID
 * @apiGroup Grupo
 *
 * @apiParam {Number} id Identificación del Grupo.
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla grupo
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
$app->get('/grupo/:id', function($id) use($db, $app){
    $sql = 'SELECT * FROM tblGrupo WHERE id = '.$id;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Grupo no disponible'
    );

    if($query->num_rows == 1){
        $grupo = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $grupo
        );
    }

    echo json_encode($result);
});

// GUARDAR GRUPO
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
$app->post('/grupo', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'EL Grupo NO se ha creado'
    );

    $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        if(!isset($data['nivel'])){
            $data['nivel']=null;
        }

        if(!isset($data['descripcion'])){
            $data['descripcion']=null;
        }

        if(!isset($data['paralelo'])){
            $data['paralelo']=null;
        }
		
		if(!isset($data['estado'])){
            $data['estado']=null;
        }

        $query = "INSERT INTO tblGrupo VALUES(NULL,".
            "'{$data['nivel']}',".
            "'{$data['descripcion']}',".
            "'{$data['paralelo']}',".
            "'{$data['estado']}'".
            ");";

        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Grupo creado correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR UN GRUPO
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
$app->put('/grupo/:id', function($id) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE tblGrupo SET ".
        "nivel = '{$data["nivel"]}', ".
        "descripcion = '{$data["descripcion"]}', ".
		"paralelo = '{$data["paralelo"]}', ".
		"estado = '{$data["estado"]}' WHERE ID = {$id}";
	

    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El grupo se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El grupo NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN GRUPO

$app->delete('/grupo/:id', function($id) use($db, $app){
    $sql = 'DELETE FROM tblGrupo WHERE id = '.$id;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El Grupo se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El Grupo NO se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();

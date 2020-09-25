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

// LISTAR TODOS LOS ESTUDIANTES ACTIVIDADES
/**
 * @api {get} /estuduanteactividades GET ESTUDIANTE ACTIVIDADES
 * @apiName GetEstudianteGrupo
 * @apiGroup EstudianteGrupo
 *
 * @apiSuccess {String} status Estado de respuesta 
 * @apiSuccess {Number} code  Codigo de servidor http
 * @apiSuccess {String} data Datos sacados de la tabla estuduantegrupo
 *
 * @apiSuccess {String} data.gestion Identificación de la gestión
 * @apiSuccess {String} data.ciEstudiante Cedula de Identidad del Estudiante
 * @apiSuccess {Number} data.idGrupo Identificador del Grupo
 * @apiSuccess {Boolean} data.estado Estado de EstudianteGrupo
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data": [
 *               	{
 *						"gestion": "2020",
 *						"ciEstudiante": "345666",
 *						"idGrupo": "2",
 *						"estado": "1"
 *					}
 *               ]
 *    }
 */
$app->get('/estudianteactividad', function() use($db, $app){
    $sql = 'SELECT * FROM tblEstudianteActividad ORDER BY ciEstudiante DESC;';  
    $query = $db->query($sql);

    $eactividades = array();
    while ($eactividad = $query->fetch_assoc()) {
        $eactividades[] = $eactividad;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $eactividades
    );

    echo json_encode($result);
});

// DEVOLVER UNA SOLO ESTUDIANTE ACTIVIDAD 
/**
 * @api {get} /estudiantegrupo/:ci/:id/:gestion GET ESTUDIANTE GRUPO CI,ID,GESTION
 * @apiName GetEstudianteGrupoID
 * @apiGroup EstudianteGrupo
 *
 * @apiParam {Number} ci Cedula de Identidad del Estudiante.
 * @apiParam {Number} id Identificación de la gestión.
 * @apiParam {Number} gestion Identificador del Grupo.
 *
 * @apiSuccess {String} status Estado de respuesta. 
 * @apiSuccess {Number} code  Codigo de servidor http.
 * @apiSuccess {String} data Datos sacados de la tabla estuduantegrupo.
 *
 * @apiSuccess {String} data.gestion Identificación de la gestión.
 * @apiSuccess {String} data.ciEstudiante Cedula de Identidad del Estudiante.
 * @apiSuccess {Number} data.idGrupo Identificador del Grupo.
 * @apiSuccess {Boolean} data.estado Estado de EstudianteGrupo.
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "code": 200,
 *       "data":{
 *					"gestion": "2020",
 *        			"ciEstudiante": "3444231",
 *        			"idGrupo": "2",
 *        			"estado": "1"
 *				}
 *    }
 */
$app->get('/estudianteactividad/:ci/:id', function($ci,$id) use($db, $app){
    $sql = 'SELECT * FROM tblEstudianteActividad WHERE ciEstudiante = '.$ci.' AND idActividad= '.$id;
    $query = $db->query($sql);
	 
    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Estudiante Actividad no disponible'
    );

    if($query->num_rows == 1){
        $eactividad = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $eactividad
        );
    }

    echo json_encode($result);
});

// GUARDAR ESTUDIANTE ACTIVIDAD
/**
 * @api {post} /estudiantegrupo/ POST ESTUDIANTE ACTIVIDAD
 * @apiName PostEstudianteGrupo
 * @apiGroup EstudianteGrupo
 *
 * @apiParam jsonConsumo {
 *							"gestion": "2020",
 *							"cidestudiante": "345666",
 *							"idgrupo": "2",
 *							"estado": "1"
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
 *       "message": "EstudianteGrupo creado correctamente"
 *    }
 */
$app->post('/estudianteactividad', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'EL Estudiante Actividad  NO se ha creado'
    );

    $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        if(!isset($data['promedio'])){
            $data['promedio']=null;
        }
		
		 if(!isset($data['observaciones'])){
            $data['observaciones']=null;
        }

        if(!isset($data['ciestudiante'])){
            $data['ciestudiante']=null;
        }

        if(!isset($data['idactividad'])){
            $data['idactividad']=null;
        }
		
		if(!isset($data['estado'])){
            $data['estado']=null;
        }

        $query = "INSERT INTO tblEstudianteActividad VALUES(".
            "'{$data['promedio']}',".
			"'{$data['observaciones']}',".
            "'{$data['ciestudiante']}',".
            "'{$data['idactividad']}',".
            "'{$data['estado']}'".
            ");";

        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Estudiante Actividad creado correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR UN ESTUDIANTE ACTIVIDAD
/**
 * @api {put} /estudiantegrupo/:ci/:id/:gestion PUT ESTUDIANTE GRUPO
 * @apiName PutEstudianteGrupo
 * @apiGroup EstudianteGrupo
 *
 * @apiParam {Number} ci Cedula de Identidad del Estudiante.
 * @apiParam {Number} id Identificación de la gestión.
 * @apiParam {Number} gestion Identificador del Grupo.
 *
 * @apiParam jsonConsumo {
 *							"estado": "0"
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
 *       "message": "EstudianteGrupo modificado correctamente"
 *    }
 */

$app->put('/estudianteactividad/:ci/:id', function($ci,$id) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE tblEstudianteActividad SET ".
        "promedio = '{$data["promedio"]}', ".
		"observaciones = '{$data["observaciones"]}', ".
        /*"ciestudiante = '{$data["ciestudiante"]}', ".
		"idactividad = '{$data["idactividad"]}', ".*/
		"estado = '{$data["estado"]}' WHERE ciEstudiante = {$ci} AND idActividad = {$id}";
	

    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'Estudiante Actividad se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'Estudiante Actividad NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN ESTUDIANTE ACTIVIDAD
/**
 * @api {delete} /estudiantegrupo/:ci/:id/:gestion DELETE ESTUDIANTE GRUPO
 * @apiName DeleteEstudianteGrupo
 * @apiGroup EstudianteGrupo
 *
 * @apiParam {Number} ci Cedula de Identidad del Estudiante.
 * @apiParam {Number} id Identificación de la gestión.
 * @apiParam {Number} gestion Identificador del Grupo.
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

$app->delete('/estudianteactividad/:ci/:id', function($ci,$id) use($db, $app){
    $sql = 'DELETE FROM tblEstudianteActividad WHERE ciEstudiante='.$ci.' AND idActividad='.$id;
    $query = $db->query($sql);
	
    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'Estudiante Actividad se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'Estudiante Actividad NO se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();

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

// LISTAR TODOS LOS ESTUDIANTES GRUPOS
/**
 * @api {get} /estuduantegrupo GET ESTUDIANTE GRUPO
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
$app->get('/estudiantegrupo', function() use($db, $app){
    $sql = 'SELECT * FROM tblEstudianteGrupo ORDER BY gestion DESC;';
    $query = $db->query($sql);

    $egrupos = array();
    while ($egrupo = $query->fetch_assoc()) {
        $egrupos[] = $egrupo;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $egrupos
    );

    echo json_encode($result);
});

// DEVOLVER UNA SOLO ESTUDIANTE GRUPO
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
$app->get('/estudiantegrupo/:ci/:id/:gestion', function($ci,$id,$gestion) use($db, $app){
    $sql = 'SELECT * FROM tblEstudianteGrupo WHERE ciEstudiante = '.$ci.' AND idGrupo= '.$id.' AND gestion = '.$gestion;
    $query = $db->query($sql);
	 
    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Persona no disponible'
    );

    if($query->num_rows == 1){
        $egrupo = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $egrupo
        );
    }

    echo json_encode($result);
});

// GUARDAR ESTUDIANTE GRUPO
/**
 * @api {post} /estudiantegrupo/ POST ESTUDIANTE GRUPO
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
$app->post('/estudiantegrupo', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'EL Estudiante Grupo NO se ha creado'
    );

    $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        if(!isset($data['gestion'])){
            $data['gestion']=null;
        }

        if(!isset($data['idestudiante'])){
            $data['idestudiante']=null;
        }

        if(!isset($data['idgrupo'])){
            $data['idgrupo']=null;
        }
		
		if(!isset($data['estado'])){
            $data['estado']=null;
        }

        $query = "INSERT INTO tblEstudianteGrupo VALUES(".
            "'{$data['gestion']}',".
            "'{$data['idestudiante']}',".
            "'{$data['idgrupo']}',".
            "'{$data['estado']}'".
            ");";

        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Estudiante Grupo creado correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR UN GRUPO
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

$app->put('/estudiantegrupo/:ci/:id/:gestion', function($ci,$id,$gestion) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE tblEstudianteGrupo SET ".
        "gestion = '{$data["gestion"]}', ".
        "idestudiante = '{$data["idestudiante"]}', ".
		"idgrupo = '{$data["idgrupo"]}', ".
		"estado = '{$data["estado"]}' WHERE ciEstudiante = {$ci} AND idGrupo = {$id} AND gestion = {$gestion}";
	

    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'Estudiante Grupo se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'Estudiante Grupo NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN ACTIDAD
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

$app->delete('/estudiantegrupo/:ci/:id/:gestion', function($ci,$id,$gestion) use($db, $app){
    $sql = 'DELETE FROM tblEstudianteGrupo WHERE ciEstudiante='.$ci.' AND idGrupo='.$id.' AND gestion='.$gestion;
    $query = $db->query($sql);
	
    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'Estudiante Grupo se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'Estudiante Grupo NO se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();

<?php

require_once 'vendor/autoload.php';

/**
 *
 * @author: Estudiante E Mod y Opt I - Cumbre Turno Noche
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

// LISTAR TODOS LOS ESTUDIANTES
$app->get('/estudiante', function() use($db, $app){
    $sql = 'SELECT * FROM tblEstudiante ORDER BY ciPersona DESC;';
    $query = $db->query($sql);

    $estudiantes = array();
    while ($estudiante = $query->fetch_assoc()) {
        $estudiantes[] = $estudiante;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $estudiantes
    );

    echo json_encode($result);
});

// DEVOLVER UNA SOLO ESTUDIANTE
$app->get('/estudiante/:cipersona', function($ci) use($db, $app){
    $sql = 'SELECT * FROM tblEstudiante WHERE ciPersona = '.$ci;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Estudiante no disponible'
    );

    if($query->num_rows == 1){
        $estudiante = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $estudiante
        );
    }

    echo json_encode($result);
});

// GUARDAR ESTUDIANTE
$app->post('/estudiante', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'EL Estudiante NO se ha creado'
    );

    $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        if(!isset($data['rude'])){
            $data['rude']=null;
        }

        if(!isset($data['observaciones'])){
            $data['observaciones']=null;
        }

        if(!isset($data['fechanac'])){
            $data['fechanac']=null;
        }
		
		if(!isset($data['cipersona'])){
            $data['cipersona']=null;
        }
		
		if(!isset($data['estado'])){
            $data['estado']=null;
        }

        $query = "INSERT INTO tblEstudiante VALUES(".
            "'{$data['rude']}',".
            "'{$data['observaciones']}',".
            "'{$data['fechanac']}',".
			"'{$data['cipersona']}',".
            "'{$data['estado']}'".
            ");";

        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Estudiante creado correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR UN ESTUDIANTE
$app->put('/estudiante/:ci', function($ci) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE tblEstudiante SET ".
        "rude = '{$data["rude"]}', ".
        "observaciones = '{$data["observaciones"]}', ".
		"fechanac = '{$data["fechanac"]}', ".
		"estado = '{$data["estado"]}' WHERE ciPersona = {$ci}";
	

    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El Estudiante se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El Estudiante NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN ESTUDIANTE
$app->delete('/estudiante/:ci', function($ci) use($db, $app){
    $sql = 'DELETE FROM tblEstudiante WHERE ciPersona = '.$ci;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El Estudiante se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El Estudiante NO se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();

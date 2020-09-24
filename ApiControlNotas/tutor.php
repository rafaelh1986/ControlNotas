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

// LISTAR TODOS LOS TUTORES
$app->get('/tutor', function() use($db, $app){
    $sql = 'SELECT * FROM tblTutor ORDER BY ciPersona DESC;';
    $query = $db->query($sql);

    $tutores = array();
    while ($tutor = $query->fetch_assoc()) {
        $tutores[] = $tutor;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $tutores
    );

    echo json_encode($result);
});

// DEVOLVER UN SOLO TUTOR
$app->get('/tutor/:ci', function($ci) use($db, $app){
    $sql = 'SELECT * FROM tblTutor WHERE ciPersona = '.$ci;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Tutor no disponible'
    );

    if($query->num_rows == 1){
        $tutor = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $tutor
        );
    }

    echo json_encode($result);
});

// GUARDAR TUTOR
$app->post('/tutor', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'El Tutor NO se ha creado'
    );

    $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        if(!isset($data['correo'])){
            $data['correo']=null;
        }

        if(!isset($data['cipersona'])){
            $data['cipersona']=null;
        }

        if(!isset($data['ciestudiante'])){
            $data['ciestudiante']=null;
        }

        if(!isset($data['estado'])){
            $data['estado']=null;
        }

        $query = "INSERT INTO tblTutor VALUES(".
            "'{$data['correo']}',".
            "'{$data['cipersona']}',".
            "'{$data['ciestudiante']}',".
		    "'{$data['estado']}'".
            ");";

        $insert = $db->query($query);
		
        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Tutor creado correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR UN TUTOR
$app->put('/tutor/:ci', function($ci) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE tblTutor SET ".
        "correo = '{$data["correo"]}', ".
		"ciestudiante = '{$data["ciestudiante"]}', ".
		"estado = '{$data["estado"]}' WHERE ciPersona = {$ci} ";

    $query = $db->query($sql);
	
    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El Tutor se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El Tutor NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN TUTOR
$app->delete('/tutor/:ci', function($ci) use($db, $app){
    $sql = 'DELETE FROM tblTutor WHERE ciPersona = '.$ci;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El Tutor se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El Tutor no se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();

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

// DEVOLVER UNA SOLA ACTIDAD
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

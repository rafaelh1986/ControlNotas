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

// ELIMINAR UN ACTIDAD
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

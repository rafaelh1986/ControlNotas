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

// LISTAR TODOS LAS PERSONAS
$app->get('/persona', function() use($db, $app){
    $sql = 'SELECT * FROM tblPersona ORDER BY ci DESC;';
    $query = $db->query($sql);

    $personas = array();
    while ($persona = $query->fetch_assoc()) {
        $personas[] = $persona;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $personas
    );

    echo json_encode($result);
});

// DEVOLVER UNA SOLA PERSONA
$app->get('/persona/:id', function($id) use($db, $app){
    $sql = 'SELECT * FROM tblPersona WHERE ci = '.$id;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Persona no disponible'
    );

    if($query->num_rows == 1){
        $persona = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $persona
        );
    }

    echo json_encode($result);
});

// GUARDAR PERSONA
$app->post('/persona', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'La Persona NO se ha creado'
    );

    $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        if(!isset($data['ci'])){
            $data['ci']=null;
        }
		if(!isset($data['nombre'])){
            $data['nombre']=null;
        }

        if(!isset($data['apellidos'])){
            $data['apellidos']=null;
        }

        if(!isset($data['telefono'])){
            $data['telefono']=null;
        }

        if(!isset($data['direccion'])){
            $data['direccion']=null;
        }

        $query = "INSERT INTO tblPersona VALUES(".
		    "'{$data['ci']}',".
            "'{$data['nombre']}',".
            "'{$data['apellidos']}',".
            "'{$data['telefono']}',".
            "'{$data['direccion']}'".
            ");";

        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Persona creado correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR UNA PERSONA
$app->put('/persona/:id', function($id) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE tblPersona SET ".
        "nombre = '{$data["nombre"]}', ".
        "apellidos = '{$data["apellidos"]}', ".
		"telefono = '{$data["telefono"]}', ".
		"direccion = '{$data["direccion"]}' WHERE ci = {$id}";
	

    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'La Persona se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'La Persona NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN PERSONA
$app->delete('/persona/:id', function($id) use($db, $app){
    $sql = 'DELETE FROM tblPersona WHERE ci = '.$id;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'La Persona se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'La Persona no se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();
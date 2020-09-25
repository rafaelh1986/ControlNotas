<?php

require_once 'vendor/autoload.php';

/**
 *
 * @author: Grupo E Mod y Opt I - Cumbre Turno Noche -----------------mx
 *
 */

$app = new \Slim\Slim();

/*$db = new mysqli('localhost', 'root', '123', 'notasbd');*/
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

// LISTAR TODOS LAS MATERIAS
$app->get('/materia', function() use($db, $app){
    $sql = 'SELECT * FROM tblMateria ORDER BY id DESC;';
    $query = $db->query($sql);

    $materia = array();
    while ($materia = $query->fetch_assoc()) {
        $materias[] = $materia;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $materias
    ); 

    echo json_encode($result); 
    //echo json_decode("testing");
});

// DEVOLVER UNA SOLA MATERIA
$app->get('/materia/:id', function($id) use($db, $app){
    $sql = 'SELECT * FROM tblMateria WHERE id = '.$id;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Materia no disponible'
    );

    if($query->num_rows == 1){
        $materia = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $materia
        );
    }

    echo json_encode($result);
});

// GUARDAR MATERIA
$app->post('/materia', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'La materia NO se ha creado'
    );

    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    
		if(!isset($data['descripcion'])){
            $data['descripcion']=null;
        }

		if(!isset($data['estado'])){
            $data['estado']=null;
        }

        $query = "INSERT INTO tblMateria VALUES(NULL,".
            "'{$data['descripcion']}',".
			"'{$data['estado']}'".
            ");";

        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Materia creada correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR MATERIA
$app->put('/materia/:id', function($id) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE tblMateria SET ".
        "descripcion = '{$data["descripcion"]}', ".
        "estado = '{$data["estado"]}' WHERE id = {$id}";

    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'La Materia se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'La Materia NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN PERSONA
$app->delete('/materia/:id', function($id) use($db, $app){
    $sql = 'DELETE FROM tblMateria WHERE id = '.$id;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'La materia se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'La materia no se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();
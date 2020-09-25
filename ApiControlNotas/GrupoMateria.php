<?php

require_once 'vendor/autoload.php';

/**
 *
 * @author: Grupo E Mod y Opt I - Cumbre Turno Noche
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

// LISTAR TODOS LAS GRUPOMATERIA
$app->get('/grupomateria', function() use($db, $app){
    $sql = 'SELECT * FROM tblGrupoMateria ORDER BY id DESC;';
    $query = $db->query($sql);

    $grupomateria = array();
    while ($grupomateria = $query->fetch_assoc()) {
        $grupomaterias[] = $grupomateria;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $grupomaterias
    );

    echo json_encode($result);
});

// DEVOLVER UNA SOLA GRUPOMATERIA
$app->get('/grupomateria/:id', function($id) use($db, $app){
    $sql = 'SELECT * FROM tblGrupoMateria WHERE id = '.$id;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'grupomateria no disponible'
    );

    if($query->num_rows == 1){
        $grupomateria = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $grupomateria
        );
    }

    echo json_encode($result);
});

// GUARDAR GRUPOMATERIA
$app->post('/grupomateria', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'El GrupoMateria NO se ha creado'
    );

    $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        if(!isset($data['observaciones'])){
            $data['observaciones']=null;
        }

        if(!isset($data['idGrupo'])){
            $data['idGrupo']=null;
        }

        if(!isset($data['idMateria'])){
            $data['idMateria']=null;
        }

        if(!isset($data['ciProfesor'])){
            $data['ciProfesor']=null;
        }

        if(!isset($data['estado'])){
            $data['estado']=null;
        }
	
        $query = "INSERT INTO tblGrupoMateria VALUES(NULL,".
            "'{$data['observaciones']}',".
            "'{$data['idGrupo']}',".
            "'{$data['idMateria']}',".
            "'{$data['ciProfesor']}',".
            "'{$data['estado']}'".
            ");";

        $insert  = $db->query($query);
        echo $query;
        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'GrupoMateria creado correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR GRUPOMATERIA
$app->put('/grupomateria/:id', function($id) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    $sql = "UPDATE tblGrupoMateria SET ".
        "observaciones = '{$data["observaciones"]}', ".
		"idGrupo = '{$data["idGrupo"]}', ".
        "idMateria = '{$data["idMateria"]}', ".
        "ciProfesor = '{$data["ciProfesor"]}', ".
		"estado = '{$data["estado"]}' WHERE id = {$id}";
	
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El GrupoMateria se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El grupomateria NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR GRUPOMATERIA
$app->delete('/grupomateria/:id', function($id) use($db, $app){
    $sql = 'DELETE FROM tblGrupoMateria WHERE id = '.$id;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El grupomateria se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El grupomateria no se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();
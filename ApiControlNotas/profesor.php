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

// LISTAR TODOS LOS PROFESORES
$app->get('/profesor', function() use($db, $app){
    $sql = 'SELECT * from tblProfesor;';
    $query = $db->query($sql);

    $profesor = array();
    while ($profesor = $query->fetch_assoc()) {
        $profesores[] = $profesor;
    }

    $result = array(
        'status' => 'success',
        'code'	 => 200,
        'data' => $profesores
    );

    echo json_encode($result);
});

// DEVOLVER UN SOLO PROFESOR
$app->get('/profesor/:ciPersona', function($id) use($db, $app){
    $sql = 'SELECT * from tblProfesor where ciPersona=' .$id;
    $query = $db->query($sql);

    $result = array(
        'status' 	=> 'error',
        'code'		=> 404,
        'message' 	=> 'Profesor no disponible'
    );

    if($query->num_rows == 1){
        $profesor = $query->fetch_assoc();

        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'data' 	=> $profesor
        );
    }

    echo json_encode($result);
});

// GUARDAR PROFESOR
$app->post('/profesor', function() use($app, $db){
    $result = array(
        'status' => 'error',
        'code'	 => 404,
        'message' => 'El profesor NO se ha creado'
    );

    $json = $app->request->getBody('json');
        $data = json_decode($json, true);

        /*if(!isset($data['ci'])){
            $data['ci']=null;
        }
        if(!isset($data['nombre'])){
            $data['nombre']=null;
        }
        if(!isset($data['apellios'])){
            $data['apellidos']=null;
        }
        if(!isset($data['telefono'])){
            $data['telefono']=null;
        }
        if(!isset($data['direccion'])){
            $data['direccion']=null;
        }*/

        if(!isset($data['categoria'])){
            $data['categoria']=null;
        }
		if(!isset($data['salario'])){
            $data['salario']=null;
        }

        if(!isset($data['especialidad'])){
            $data['especialidad']=null;
        }

        if(!isset($data['ciPersona'])){
            $data['ciPersona']=null;
        }

		if(!isset($data['estado'])){
            $data['estado']=null;
        }

       /* $query = "INSERT INTO tblPersona VALUES(NULL,".
		    "'{$data['ci']}',".
            "'{$data['nombre']}',".
            "'{$data['apellidos']}',".
            "'{$data['telefono']}',".
			"'{$data['direccion']}'".
            ");";

        $insert = $db->query($query);*/

        $query = "INSERT INTO tblProfesor VALUES(".
		    "'{$data['categoria']}',".
            "'{$data['salario']}',".
            "'{$data['especialidad']}',".
            "'{$data['ciPersona']}',".
			"'{$data['estado']}'".
            ");";

        $insert = $db->query($query);

        if($insert){
            $result = array(
                'status' => 'success',
                'code'	 => 200,
                'message' => 'Profesor creado correctamente'
            );
        }

    echo json_encode($result);

});

// ACTUALIZAR UNA PROFESOR
$app->put('/profesor/:ciPersona', function($id) use($db, $app){
    $json = $app->request->getBody('json');
    $data = json_decode($json, true);

    /*$sql = "UPDATE tblPersona SET ".
        "ci = '{$data["ci"]}', ".
        "nombre = '{$data["nombre"]}', ".
		"apellidos = '{$data["apellidos"]}', ".
		"telefono = '{$data["telefono"]}', ".
		"direccion = '{$data["direccion"]}' WHERE ci = {$id}";
	
    $query = $db->query($sql);*/
    
    $sql = "UPDATE tblProfesor SET ".
        "categoria = '{$data["categoria"]}', ".
        "salario = '{$data["salario"]}', ".
		"especialidad = '{$data["especialidad"]}', ".
		"ciPersona = '{$data["ciPersona"]}', ".
		"estado = '{$data["estado"]}' WHERE ciPersona = {$id}";
	
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'Profesor se ha actualizado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El Profesor NO se ha actualizado!!'
        );
    }

    echo json_encode($result);

});

// ELIMINAR UN PROFESOR
$app->delete('/profesor/:ciPersona', function($id) use($db, $app){
    $sql = 'DELETE FROM tblProfesor WHERE ciPersona = '.$id;
    $query = $db->query($sql);

    if($query){
        $result = array(
            'status' 	=> 'success',
            'code'		=> 200,
            'message' 	=> 'El Profesor se ha eliminado correctamente!!'
        );
    }else{
        $result = array(
            'status' 	=> 'error',
            'code'		=> 404,
            'message' 	=> 'El Profesor no se ha eliminado!!'
        );
    }

    echo json_encode($result);
});

$app->run();
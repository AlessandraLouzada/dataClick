<?php
    header('Content-Type: application/json');

    include_once("../vendor/autoload.php");
    include_once("../App/Controller/Servico.php");

    $metodo = strtolower($_SERVER['REQUEST_METHOD']);
    $tabela = null;
    if(isset($_GET['tabela'])){
        $tabela=$_GET['tabela'];
    }
    try {
        $funcao = new Servico();
        $response=$funcao->$metodo($tabela);
        http_response_code(200);
        echo json_encode(['dados' => $response]);
        exit;
    } catch (\Exception $e) {
        http_response_code(404);
        echo json_encode(['Erro' => $e->getMessage()]);
        exit;
    }
    
<?php
    use App\Models\Tarefas;

    class Servico{
        function __construct(){ 
        }
        //Quando a requisicao da api e o metodo GET
        public function get($tabela){
            if ($tabela == 'clube') {
                return Tarefas::selecionarClube();
            } else if ($tabela == 'usuario') {
                return Tarefas::selecionarUsuario();
            }
            else {
                return Tarefas::selecionarEspecifico($tabela);
            }
        }
        //Quando a requisicao da api e o metodo POST
        public function post(){
            $dado = json_decode(file_get_contents("php://input"));
            if($dado->tabela =='clube'){
                return Tarefas::inserirClube($dado);
            }
            else if($dado->tabela =='usuario'){
                return Tarefas::inserirUsuario($dado);
            }
            else if($dado->tabela =='associar'){
                return Tarefas::inserirAssociacao($dado);
            }
        }
        //Quando a requisicao da api e o metodo PUT
        public function put(){
            $dado = json_decode(file_get_contents("php://input"));
            if($dado->tabela =='clube'){
                return Tarefas::modificarClube($dado);
            }
            else if($dado->tabela =='usuario'){
                return Tarefas::modificarUsuario($dado);
            }
            else if($dado->tabela =='fatura'){
                return Tarefas::modificarFatura($dado);
            }
        }
        //Quando a requisicao da api e o metodo DELETE
        public function delete(){
            $dado = json_decode(file_get_contents("php://input"));
            if($dado->tabela =='clube'){
                return Tarefas::deletarClube($dado);
            }
            if($dado->tabela =='usuario'){
                return Tarefas::deletarUsuario($dado);
            }
        }
    }
<?php
    namespace App\Models;

    class Tarefas{

        public static function selecionarEspecifico($id) {
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT u.`id` AS "user_id", u.`nome` AS "user_nome", c.`id` AS "clube_id", c.`nome` AS "clube_nome", f.`data_vencimento` AS "vencimento", f.`status` AS "status", f.`id` AS "id_fatura" FROM `associacao` a INNER JOIN `usuario` u ON a.`id_usuario` = u.`id` INNER JOIN faturas f ON f.`id_associacao` = a.`id` INNER JOIN `clube` c ON c.`id` = a.`id_clube` WHERE u.`id` = "'.$id.'"';
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum usuário encontrado!");
            }
        }

        //Retorna todos clubes do BD
        public static function selecionarClube() {
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM `clube`';
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum clube encontrado!");
            }
        }

        //Retorna todos usuarios do BD
        public static function selecionarUsuario() {
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'SELECT * FROM `usuario`';
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            } else {
                throw new \Exception("Nenhum usuário encontrado!");
            }
        }

        //Inseri um novo clube no BD
        public static function inserirClube($data){
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = "INSERT INTO `clube`(`nome`) VALUES ('".$data->name."')";
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return 'Clube inserido com sucesso!';
            } else {
                throw new \Exception("Falha ao inserir clube!");
            }
        }
        //Inseri um novo usuario no BD
        public static function inserirUsuario($data){
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = "INSERT INTO `usuario`(`nome`) VALUES ('".$data->name."')";
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return 'Usuário(a) inserido com sucesso!';
            } else {
                throw new \Exception("Falha ao inserir usuário(a)!");
            }
        }
        //Inseri uma nova associacao no BD
        public static function inserirAssociacao($data){
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = "INSERT INTO `associacao`(`id_usuario`, `id_clube`) VALUES ('".$data->idUsuario."', '".$data->idClube."')";
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                $sql = "SELECT `id` FROM `associacao` WHERE `id_usuario` = '".$data->idUsuario."' AND   `id_clube` = '".$data->idClube."'";
                $stmtId = $conexao->prepare($sql);
                $stmtId->execute();
                $stmtId = $stmtId->fetch(\PDO::FETCH_ASSOC);
                $id = $stmtId['id'];
                for($i=1; $i<=12; $i++){
                    $data =  "+".$i." month"; // adiciona x meses a sua data
                    $dataBoleto = date('Y/m/d', strtotime($data));
                    $sql = "INSERT INTO `faturas`(`id_associacao`, `data_vencimento`, `status`) VALUES ('".$id."', '".$dataBoleto."', 'em_aberto')";
                    $stmt = $conexao->prepare($sql);
                    $stmt->execute();
                }
                return 'Associacao inserida com sucesso!';
            } else {
                throw new \Exception("Falha ao inserir associacao!");
            }
        }
        //Altera os dados de um usuario especifico do BD
        public static function modificarUsuario($data){
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = "UPDATE `usuario` SET `nome`='".$data->name."' WHERE `id` = '".$data->id."'";
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return 'Usuário(a) modificado com sucesso!';
            } else {
                throw new \Exception("Falha ao modificar usuário(a)!");
            }
        }
        //Altera os dados de um usuario especifico do BD
        public static function modificarClube($data){
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = "UPDATE `clube` SET `nome`='".$data->name."' WHERE `id` = '".$data->id."'";
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return 'Clube modificado com sucesso!';
            } else {
                throw new \Exception("Falha ao modificar clube!");
            }
        }
        //Altera o status de uma fatura especifica do BD
        public static function modificarFatura($data){
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = "UPDATE `faturas` SET `status`='pago' WHERE `id` = '".$data->idFatura."'";
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return 'Fatura modificada com sucesso!';
            } else {
                throw new \Exception("Falha ao modificar fatura!");
            }
        }
        //Exclui um usuario especifica no BD
        public static function deletarUsuario($data){
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'DELETE FROM `usuario` WHERE id = '.$data->id;
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return 'Usuário(a) excluído com sucesso!';
            } else {
                throw new \Exception("Falha ao excluir usuário(a)!");
            }
        }
        //Exclui um usuario especifica no BD
        public static function deletarClube($data){
            $conexao = new \PDO(DBDRIVE.': host='.DBHOST.'; dbname='.DBNAME, DBUSER, DBPASS);

            $sql = 'DELETE FROM `clube` WHERE id = '.$data->id;
            $stmt = $conexao->prepare($sql);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                return 'Clube excluído com sucesso!';
            } else {
                throw new \Exception("Falha ao excluir clube!");
            }
        }
    }
<?php
    require_once('config.php');
    
    $conexao = mysqli_connect($host, $user, $pswd);
        
    if(mysqli_connect_errno()){
        echo "<span style='color:red'>Erro na conexão com o banco de dados:.</span>".mysqli_connect_error();
        exit();
    }else {
        echo "<span style='color:blue'>Parabéns!! A conexão ao banco de dados ocorreu normalmente!  </span>";
    }
    $bd = mysqli_select_db($conexao, $bco) or die('Erro ao escolher o banco');
    mysqli_set_charset($conexao, 'UTF-8');

?>
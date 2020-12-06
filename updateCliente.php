<?php
	require_once("conexao.php");

	$login = $_POST['dados'];
	$valor = json_decode($login, true); 

	
	var_dump($valor);
	
	$sql = "update clientes set nome = $valor[nome], email = $valor[email], documento = $valor[documento], 
			nascimento = $valor[nascimento], cidade = $valor[cidade], estado = $valor[estado] 
			where documento = $valor[log]";
	
	echo $sql;
	$resultado = mysqli_query($conexao, $sql);
	
    if($resultado){
       echo '<span style=\'color:blue\'> Dados atualizados com sucesso!</span>';
	}
    else{
		echo '<span style=\'color:red\'> Erro de acesso ao banco de dados</span>';
	}
	
	mysqli_close($conexao);

?>
<?php
	require_once("conexao.php");



	//erro deve estar aqui...
	$login = $_POST['dados'];
	$valor = json_decode($login, true); 

	


	var_dump($valor);
	
	$sql = "select * from clientes where documento = $valor[log]";
	
	echo $sql;
	$resultado = mysqli_query($conexao, $sql);
	
    if($resultado){
        $registros = mysqli_num_rows($resultado);
		if($registros<1){
			echo "<span style='color:red'>Erro: Não há dados disponível para consulta.</span>";

		}else{
			while($dados = mysqli_fetch_array($resultado)){
				$str_array[] = $dados;
			}

			// Tranforma o array $dados em JSON
			echo json_encode($str_array, JSON_PRETTY_PRINT);

		}
	}
    else{
		echo '[{<span style=\'color:red\'>Erro de acesso ao banco de dados</span>"}]';
	}
	
	mysqli_close($conexao);

?>
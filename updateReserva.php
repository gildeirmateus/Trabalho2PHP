<?php
	require_once("conexao.php");

	$login = $_POST['dados'];
	$valor = json_decode($login, true); 

	
	var_dump($valor);
	
	$sql = "update reservas set id_cliente = $valor[id_cliente], dataEntrada = $valor[dataEntrada],
			dataSaida = $valor[dataSaida] where clientes.documento = $valor[log]";
	
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
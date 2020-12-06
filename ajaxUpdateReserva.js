$('#formReservas').submit(function(e){
    e.preventDefault();

    var id_cliente = $("#id_cliente").val();
    var dataEntrada = $("#dataEntrada").val();
    var dataSaida = $("#dataSaida").val();

    var array = {'id_cliente':id_cliente, 'dataEntrada': dataEntrada, 'dataSaida': dataSaida};
    var dados = JSON.stringify(array);
    var itens = "";

    console.log(array);
    console.log(dados);

    $.ajax({
        url: "updateReserva.php",
        type: 'POST',
        cache: false,
        data: {data: dados},
        dataType: "json",

        beforeSend: function(){
            console.log('Pesquisando dados no servidor');
        },

        success: function(retorno){
            console.log(retorno);
            if(retorno[0].erro){
				$("h2").html(retorno[0].erro);
            }else{
                for(var i=1;i<retorno.length;i++){

                    itens += retorno[i].nome;
                    itens += retorno[i].documento;
                    itens += retorno[i].nascimento;
                    itens += retorno[i].cidade;
                    itens += retorno[i].estado;
                   
                }
                $("#content input").html(itens);
                $("h2").html("<span style='color:green'>Pesquisa concluida com sucesso.</span>");
            }
        },

        error: function(){
            console.log('Não foi possível consultar os dados no servidor!');

        }
    });
});

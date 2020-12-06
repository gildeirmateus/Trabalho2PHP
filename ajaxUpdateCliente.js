$('#formCliente').submit(function(e){
    e.preventDefault();

    var nome = $("#nome").val();
    var email = $("#email").val();
    var documento = $("#documento").val();
    var nascimento = $("#nascimento").val();
    var cidade = $("#cidade").val();
    var estado = $("#estado").val();

    var array = {'nome': nome, 'email':email, 'documento': documento, 'nascimento': nascimento,
                 'cidade': cidade, 'estado': estado};
    var dados = JSON.stringify(array);
    var itens = "";

    console.log(array);
    console.log(dados);

    $.ajax({
        url: "updateCliente.php",
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

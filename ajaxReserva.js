$('#formulario').submit(function(e){
    e.preventDefault();
    
    var login = $("#login").val();
    var array = {'log': login};
    var dados = JSON.stringify(array);
    var itens = "";

    //console.log(login);
    //console.log(array);
    //console.log(dados);

    $.ajax({
        url: "reserva.php",
        type: 'POST',
        data: {dados: dados},
        dataType: "json",

        beforeSend: function(){
            //console.log('Pesquisando dados no servidor');
        },

        success: function(retorno){

            //--------->
            //---------> console.log(data);
            //--------->


            if(retorno[0].erro){
				$("h2").html(retorno[0].erro);
            }else{
                for(var i=1;i<retorno.length;i++){

                    itens += retorno[i].nome;
                    itens += retorno[i].id_quarto;
                    itens += retorno[i].dataEntrada;
                    itens += retorno[i].dataSaida;
                    itens += retorno[i].valorReserva;
                   
                }
                $("#formReservas input").html(itens);
                $("h2").html("<span style='color:green'>Pesquisa concluida com sucesso.</span>");
            }
        },

        error: function(){
            //console.log('Não foi possível consultar os dados no servidor!');

        }
    });
});


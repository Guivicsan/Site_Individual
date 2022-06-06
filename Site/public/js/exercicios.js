// const Query = require("mysql2/typings/mysql/lib/protocol/sequences/Query");

var id_usuario = sessionStorage.ID_USUARIO;

function listar_exercios() {
    fetch(`/usuarios/listar_all_exercicios/${id_usuario}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    //   alert('ERRO ULTIMO CAPTURADO!');
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var query = resposta[i];

                        // trazer id da tabela html
                        tabela.innerHTML += `
                  <tr>
                    <td>${query.nomeExerc}</td>
                    <td>${query.dificuldade}</td>
                    <td>${query.horaExerc}</td>
                    </tr>
                  `


                    }
                });
            } else {
                throw "Houve um erro na função ultimo_pokemon_capturado, linha 181!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            //finalizarAguardar();
        });
}

function cadastrar_exercicio() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_exercicio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idUsuarioServer: id_usuarioVar
        }),
    })
        .then(function (resposta) {

            if (resposta.ok) {
                window.alert('Exercicio finalizado com sucesso');
            } else {
                window.alert("Houve um erro ao tentar realizar o cadastro!❌");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

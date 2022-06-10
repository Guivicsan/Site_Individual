
var id_usuario = sessionStorage.ID_USUARIO;

function listar_refeicoes() {
    fetch(`/usuarios/lista_all_refeicoes/${id_usuario}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    //   alert('erro na função listar_refeicoes!');
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var query = resposta[i];

                        // trazer id da tabela html
                        tabela_refeicao.innerHTML += `
                  <tr>
                    <td>${query.nomeRef}</td>
                    <td>${query.tipo}</td>
                    <td>${query.horaRef}</td>
                    </tr>
                  `
                    }
                });
            } else {
                throw "Houve um erro na função listar refeição!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            //finalizarAguardar();
        });
}

function cadastrar_omelete() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_omelete", {
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
                window.alert('Refeicao finalizado com sucesso');
            } else {
                window.alert("Houve um erro ao tentar finalizar a refeicão!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrar_strogonoff() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_strogonoff", {
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
                window.alert('Refeicao finalizado com sucesso');
            } else {
                window.alert("Houve um erro ao tentar finalizar a refeicão!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrar_sanduiche_atum() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_sanduiche_atum", {
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
                window.alert('Refeicao finalizado com sucesso');
            } else {
                window.alert("Houve um erro ao tentar finalizar a refeicão!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrar_peito_frango() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_peito_frango", {
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
                window.alert('Refeicao finalizado com sucesso');
            } else {
                window.alert("Houve um erro ao tentar finalizar a refeicão!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrar_pao_ovos() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_pao_ovos", {
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
                window.alert('Refeicao finalizado com sucesso');
            } else {
                window.alert("Houve um erro ao tentar finalizar a refeicão!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function qtdRefeicoes() {
    fetch(`/usuarios/qtdRef/${id_usuario}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    //   alert('erro na função qtdRefeicoes!');
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var query = resposta[i];

                        // trazer id da tabela html
                        refeicoes_qtd.innerHTML = `
                        <h2>Total</h2>
                        <span style="color: #25d398;">${query.qtdref}</span>
                  `
                    }
                });
            } else {
                throw "Houve um erro na função qtdRefeicao!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            //finalizarAguardar();
        });
}

function diaRefeicoes_semana() {
    fetch(`/usuarios/diaRef_semana/${id_usuario}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    //   alert('erro na função diaRefeicoes_semana!');
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var query = resposta[i];

                        // trazer id da tabela html
                        var dia_da_semana = query.diaSemana;
                        var qtd_Ref_semana = query.qtdRefDia;

                        if (dia_da_semana == 0) {
                            sessionStorage.setItem("domingoRef", qtd_Ref_semana);
                        } else if (dia_da_semana == 1) {
                            sessionStorage.setItem("segundaRef", qtd_Ref_semana);
                        } else if (dia_da_semana == 2) {
                            sessionStorage.setItem("terçaRef", qtd_Ref_semana);
                        } else if (dia_da_semana == 3) {
                            sessionStorage.setItem("quartaRef", qtd_Ref_semana);
                        } else if (dia_da_semana == 4) {
                            sessionStorage.setItem("quintaRef", qtd_Ref_semana);
                        } else if (dia_da_semana == 5) {
                            sessionStorage.setItem("sextaRef", qtd_Ref_semana);
                        } else if (dia_da_semana == 6) {
                            sessionStorage.setItem("sabadoRef", qtd_Ref_semana);
                        }
                    }
                });
            } else {
                throw "Houve um erro na função diaRefeicoes_semana!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            //finalizarAguardar();
        });
}

function qtdRefecao_diario() {
    fetch(`/usuarios/qtdRef_diario/${id_usuario}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    //   alert('erro na função qtdRefecao_diario!');
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var query = resposta[i];

                        // trazer id da tabela html
                        var totaldiario = query.diaSemana;
                        var qtd_Ref_diario = query.qtdRefDia;

                        if (totaldiario == 0) {
                            span_totalDiarioRef.innerHTML = qtd_Ref_diario
                        } else if (totaldiario == 1) {
                            span_totalDiarioRef.innerHTML = qtd_Ref_diario
                        } else if (totaldiario == 2) {
                            span_totalDiarioRef.innerHTML = qtd_Ref_diario
                        } else if (totaldiario == 3) {
                            span_totalDiarioRef.innerHTML = qtd_Ref_diario
                        } else if (totaldiario == 4) {
                            span_totalDiarioRef.innerHTML = qtd_Ref_diario
                        } else if (totaldiario == 5) {
                            span_totalDiarioRef.innerHTML = qtd_Ref_diario
                        } else if (totaldiario == 6) {
                            span_totalDiarioRef.innerHTML = qtd_Ref_diario
                        }
                    }
                });
            } else {
                throw "Houve um erro na função qtdRefecao_diario!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            //finalizarAguardar();
        });
}
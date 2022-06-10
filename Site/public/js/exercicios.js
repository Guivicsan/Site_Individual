
var id_usuario = sessionStorage.ID_USUARIO;

function listar_exercicios() {
    fetch(`/usuarios/listar_all_exercicios/${id_usuario}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    //   alert('erro na função listar_exercícios!');
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var query = resposta[i];

                        // trazer id da tabela html
                        tabela_exerc.innerHTML += `
                  <tr>
                    <td>${query.nomeExerc}</td>
                    <td>${query.dificuldade}</td>
                    <td>${query.horaExerc}</td>
                    </tr>
                  `
                    }
                });
            } else {
                throw "Houve um erro na função listar exercícios!";
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
                window.alert("Houve um erro ao tentar finalizar o exercícios!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrar_peito_inter() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_peito_inter", {
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
                window.alert("Houve um erro ao tentar finalizar o exercício!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrar_braco_ava() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_braco_ava", {
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
                window.alert("Houve um erro ao tentar finalizar o exercícios!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrar_perna_ini() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_perna_ini", {
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
                window.alert("Houve um erro ao tentar finalizar o exercícios!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrar_costas_inter() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_costas_inter", {
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
                window.alert("Houve um erro ao tentar finalizar o exercícios!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function cadastrar_abs_ava() {
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("/usuarios/cadastrar_abs_ava", {
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
                window.alert("Houve um erro ao tentar finalizar o exercícios!");
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}


function qtdExercicio() {
    fetch(`/usuarios/qtdExerc/${id_usuario}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    //   alert('erro na função diaExercicio');
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var query = resposta[i];

                        // trazer id da tabela html
                        exercicios_qtd.innerHTML = `
                        <h2>Total</h2>
                        <span>${query.qtdexerc}</span>
                  `
                    }
                });
            } else {
                throw "Houve um erro na função qtdExercício!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            //finalizarAguardar();
        });
}

function diaExercicio_semana() {
    fetch(`/usuarios/diaExerc_semana/${id_usuario}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    //   alert('erro na função diaExercicio_semana!');
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var query = resposta[i];

                        // trazer id da tabela html
                        var dia_da_semana = query.diaSemana;
                        var qtd_Exerc_semana = query.qtdExercDia;

                        if (dia_da_semana == 0) {
                            sessionStorage.setItem("domingo", qtd_Exerc_semana);
                        } else if (dia_da_semana == 1) {
                            sessionStorage.setItem("segunda", qtd_Exerc_semana);
                        } else if (dia_da_semana == 2) {
                            sessionStorage.setItem("terça", qtd_Exerc_semana);
                        } else if (dia_da_semana == 3) {
                            sessionStorage.setItem("quarta", qtd_Exerc_semana);
                        } else if (dia_da_semana == 4) {
                            sessionStorage.setItem("quinta", qtd_Exerc_semana);
                        } else if (dia_da_semana == 5) {
                            sessionStorage.setItem("sexta", qtd_Exerc_semana);
                        } else if (dia_da_semana == 6) {
                            sessionStorage.setItem("sabado", qtd_Exerc_semana);
                        }
                    }
                });
            } else {
                throw "Houve um erro na função diaExercicio_semana!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            //finalizarAguardar();
        });
}

function qtdExercicio_diario() {
    fetch(`/usuarios/qtdExerc_diario/${id_usuario}`)
        .then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    //   alert('erro na função qtdExercicio_diario!');
                }
                resposta.json().then(function (resposta) {
                    console.log("Dados recebidos: ", JSON.stringify(resposta));

                    for (let i = 0; i < resposta.length; i++) {
                        var query = resposta[i];

                        // trazer id da tabela html
                        var totaldiario = query.diaSemana;
                        var qtd_Exerc_diario = query.qtdExercDia;

                        if (totaldiario == 0) {
                            span_totalDiarioExerc.innerHTML = qtd_Exerc_diario
                        } else if (totaldiario == 1) {
                            span_totalDiarioExerc.innerHTML = qtd_Exerc_diario
                        } else if (totaldiario == 2) {
                            span_totalDiarioExerc.innerHTML = qtd_Exerc_diario
                        } else if (totaldiario == 3) {
                            span_totalDiarioExerc.innerHTML = qtd_Exerc_diario
                        } else if (totaldiario == 4) {
                            span_totalDiarioExerc.innerHTML = qtd_Exerc_diario
                        } else if (totaldiario == 5) {
                            span_totalDiarioExerc.innerHTML = qtd_Exerc_diario
                        } else if (totaldiario == 6) {
                            span_totalDiarioExerc.innerHTML = qtd_Exerc_diario
                        }
                    }
                });
            } else {
                throw "Houve um erro na função qtdExercicio_diario!";
            }
        })
        .catch(function (resposta) {
            console.error(resposta);
            //finalizarAguardar();
        });
}
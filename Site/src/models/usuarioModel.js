var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
    SELECT * FROM usuario WHERE email = '${email}' AND senha = aes_encrypt('${senha}', 'fitness');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', aes_encrypt('${senha}', 'fitness'));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//-------------model exercícios-----------------//

function cadastrar_exercicio(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into exercicios (nomeExerc, dificuldade, horaExerc, fkUsuarioExerc) values
        ('Abdômen', 'Iniciante', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_peito_inter(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into exercicios (nomeExerc, dificuldade, horaExerc, fkUsuarioExerc) values
        ('Peito', 'Intermediário', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_braco_ava(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into exercicios (nomeExerc, dificuldade, horaExerc, fkUsuarioExerc) values
        ('Braço', 'Avançado', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_perna_ini(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into exercicios (nomeExerc, dificuldade, horaExerc, fkUsuarioExerc) values
        ('Perna', 'Iniciante', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_costas_inter(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into exercicios (nomeExerc, dificuldade, horaExerc, fkUsuarioExerc) values
        ('Costas e Ombros', 'Intermediário', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_abs_ava(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into exercicios (nomeExerc, dificuldade, horaExerc, fkUsuarioExerc) values
        ('Abdômen', 'Avançado', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar_all_exercicios(id_usuario) {  
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select nomeExerc, dificuldade, DATE_FORMAT(horaExerc, '%d/%m/%Y %Hh%i') as 'horaExerc' from exercicios where fkUsuarioExerc = ${id_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function qtdExerc(id_usuario) {  
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select count(idExercicio) as 'qtdexerc' from exercicios where fkUsuarioExerc = ${id_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function diaExerc_semana(id_usuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_all_pokemon_user()");
    var instrucao = `
    SELECT COUNT(*) AS 'qtdExercDia' , date_format(horaExerc, '%w') AS 'diaSemana'
        FROM exercicios WHERE WEEK(horaExerc) = week(current_timestamp()) 
			AND fkUsuarioExerc = ${id_usuario}
                group BY day(horaExerc);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function qtdExerc_diario(id_usuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_all_pokemon_user()");
    var instrucao = `
    SELECT COUNT(*) AS 'qtdExercDia' , date_format(horaExerc, '%w') AS 'diaSemana'
    FROM exercicios WHERE WEEK(horaExerc) = week(current_timestamp()) 
        AND fkUsuarioExerc = ${id_usuario} and date_format(horaExerc, '%w')
            group BY day(horaExerc);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//------------model refeições--------------//

function cadastrar_omelete(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into refeicoes (nomeRef, tipo, horaRef, fkUsuarioRef) values
        ('Omelete de Legumes', 'Café da manhã', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_strogonoff(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into refeicoes (nomeRef, tipo, horaRef, fkUsuarioRef) values
        ('Strogonoff saudável', 'Almoço', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_sanduiche_atum(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into refeicoes (nomeRef, tipo, horaRef, fkUsuarioRef) values
        ('Sanduíche de atum', 'Café da tarde', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_peito_frango(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into refeicoes (nomeRef, tipo, horaRef, fkUsuarioRef) values
        ('Peito de frango refogado com molho de tomate natural', 'Janta', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_pao_ovos(idUsuarioLogado){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrado_sucesso():", idUsuarioLogado);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into refeicoes (nomeRef, tipo, horaRef, fkUsuarioRef) values
        ('Pão com ovos mexidos', 'Café da manhã', now(), ${idUsuarioLogado});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function lista_all_refeicoes(id_usuario) {  
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select nomeRef, tipo, DATE_FORMAT(horaRef, '%d/%m/%Y %Hh%i') as 'horaRef' from refeicoes where fkUsuarioRef = ${id_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function qtdRef(id_usuario) {  
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select count(idRefeicao) as 'qtdref' from refeicoes where fkUsuarioRef = ${id_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function diaRef_semana(id_usuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_all_pokemon_user()");
    var instrucao = `
    SELECT COUNT(*) AS 'qtdRefDia', date_format(horaRef, '%w') AS 'diaSemana'
        FROM refeicoes WHERE WEEK(horaRef) = week(current_timestamp()) 
			AND fkUsuarioRef = ${id_usuario}
                group BY day(horaRef);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function qtdRef_diario(id_usuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar_all_pokemon_user()");
    var instrucao = `
    SELECT COUNT(*) AS 'qtdRefDia' , date_format(horaRef, '%w') AS 'diaSemana'
    FROM refeicoes WHERE WEEK(horaRef) = week(current_timestamp()) 
        AND fkUsuarioRef = ${id_usuario} and date_format(horaRef, '%w')
            group BY day(horaRef);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
//-------------exercícios-------------//
    listar_all_exercicios,
    cadastrar_exercicio,
    cadastrar_peito_inter,
    cadastrar_braco_ava,
    qtdExerc,
    diaExerc_semana,
    qtdExerc_diario,
    cadastrar_perna_ini,
    cadastrar_costas_inter,
    cadastrar_abs_ava,
//------------refeições--------------//
    cadastrar_omelete,    
    lista_all_refeicoes,
    qtdRef,
    diaRef_semana,
    qtdRef_diario,
    cadastrar_strogonoff,
    cadastrar_sanduiche_atum,
    cadastrar_peito_frango,
    cadastrar_pao_ovos,
};
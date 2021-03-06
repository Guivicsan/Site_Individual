var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

// ------------rotas dos exercícios get ---------------------//

router.get("/listar_all_exercicios/:id_usuario", function (req, res) {
    usuarioController.listar_all_exercicios(req, res);
});

router.get("/qtdExerc/:id_usuario", function (req, res) {
    usuarioController.qtdExerc(req, res);
});

router.get("/diaExerc_semana/:id_usuario", function (req, res) {
    usuarioController.diaExerc_semana(req, res);
});

router.get("/qtdExerc_diario/:id_usuario", function (req, res) {
    usuarioController.qtdExerc_diario(req, res);
});

// ---------------- rotas das refeicões get ---------------------

router.get("/lista_all_refeicoes/:id_usuario", function (req, res) {
    usuarioController.lista_all_refeicoes(req, res);
})

router.get("/qtdRef/:id_usuario", function (req, res) {
    usuarioController.qtdRef(req, res);
});

router.get("/diaRef_semana/:id_usuario", function (req, res) {
    usuarioController.diaRef_semana(req, res);
});

router.get("/qtdRef_diario/:id_usuario", function (req, res) {
    usuarioController.qtdRef_diario(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

//-------------rota exercícios post-------------//

router.post("/cadastrar_exercicio", function (req, res) {
    usuarioController.cadastrar_exercicio(req, res);
});

router.post("/cadastrar_peito_inter", function (req, res) {
    usuarioController.cadastrar_peito_inter(req, res);
});

router.post("/cadastrar_braco_ava", function (req, res) {
    usuarioController.cadastrar_braco_ava(req, res);
});

router.post("/cadastrar_perna_ini", function (req, res) {
    usuarioController.cadastrar_perna_ini(req, res);
});

router.post("/cadastrar_costas_inter", function (req, res) {
    usuarioController.cadastrar_costas_inter(req, res);
});

router.post("/cadastrar_abs_ava", function (req, res) {
    usuarioController.cadastrar_abs_ava(req, res);
});

//-----------rota refeições post----------------//

router.post("/cadastrar_omelete", function (req, res) {
    usuarioController.cadastrar_omelete(req, res);
});

router.post("/cadastrar_strogonoff", function (req, res) {
    usuarioController.cadastrar_strogonoff(req, res);
});

router.post("/cadastrar_sanduiche_atum", function (req, res) {
    usuarioController.cadastrar_sanduiche_atum(req, res);
});

router.post("/cadastrar_peito_frango", function (req, res) {
    usuarioController.cadastrar_peito_frango(req, res);
});

router.post("/cadastrar_pao_ovos", function (req, res) {
    usuarioController.cadastrar_pao_ovos(req, res);
});

module.exports = router;
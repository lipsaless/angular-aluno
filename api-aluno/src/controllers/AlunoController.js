// importando model Aluno
const Aluno = require('../models/Aluno');

class AlunoController {
    // método que consulta no banco todos os alunos
    getAll(req, res) {
        // acessando o método list() no model Aluno
        Aluno.list()
            .then(result => {
                // retornando resposta do model em json
                res.json(result);
            });
    }
    // método que retorna 1 aluno
    getAluno(req, res) {
        // acessando o método getOne() no model Aluno
        Aluno.getOne(req.params)
            .then(result => {
                // retornando resposta do model em json
                res.json(result);
            });
    }
    // método que cria um novo aluno com os dados informados
    criar(req, res) {
        // acessando o método create() no model Aluno
        Aluno.create(req.body)
            .then(result => {
                // retornando resposta do model em json
                res.json(result);
            });
    }
    // método que altera o aluno no banco, passando os dados do formulário
    alterar(req, res) {
        // acessando o método update() no model Aluno
        Aluno.update(req.body)
            .then(result => {
                // retornando resposta do model em json
                res.json(result);
            });
    }
    // método que excluir o aluno
    delete(req, res) {
        // acessando o método deletar() no model Aluno
        Aluno.deletar(req.params)
            .then(result => {
                // retornando resposta do model em json
                res.json(result);
            });
    }
}

// exportando controller AlunoController
module.exports = new AlunoController();
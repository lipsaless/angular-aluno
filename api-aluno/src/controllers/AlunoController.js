const Aluno = require('../models/Aluno');

class AlunoController {
    async getAll(req, res) {
        Aluno.list()
            .then(result => {
                res.json(result);
            });
    }

    async getAluno(req, res) {
        Aluno.getOne(req.params)
            .then(result => {
                res.json(result);
            });
    }

    async criar(req, res) {
        Aluno.create(req.body)
            .then(result => {
                res.json(result);
            });
    }

    async alterar(req, res) {
        Aluno.update(req.body)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    async delete(req, res) {
        Aluno.deletar(req.params)
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = new AlunoController();
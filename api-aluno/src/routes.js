const express = require('express');
const routes = express.Router();

const AlunoController = require('./controllers/AlunoController');

routes.get('/alunos', AlunoController.getAll);
routes.get('/aluno/:id_aluno', AlunoController.getAluno);
routes.post('/aluno', AlunoController.criar);
routes.post('/aluno/:id_aluno', AlunoController.alterar);
routes.delete('/aluno/:id_aluno', AlunoController.delete);

module.exports = routes;
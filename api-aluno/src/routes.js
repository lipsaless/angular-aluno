const express = require('express'); //importando express
const routes = express.Router(); //importando rotas do express

// guardando o controller AlunoController na variável AlunoController
const AlunoController = require('./controllers/AlunoController');

// rotas definidas que apontam para o controller
routes.get('/alunos', AlunoController.getAll);
routes.get('/aluno/:id_aluno', AlunoController.getAluno);
routes.post('/aluno', AlunoController.criar);
routes.post('/aluno/:id_aluno', AlunoController.alterar);
routes.delete('/aluno/:id_aluno', AlunoController.delete);

// exportando rotas
module.exports = routes;
//importando a conexão com o banco mysql que está na pasta "config"
const conexao = require('../config/Conexao');

class Aluno {
    // método responsável por retornar a lista de alunos
    async list() {
        // a lista é guardada na variável aluno
        const alunos = await conexao.query('SELECT * FROM aluno');
        // caso a lista esteja vazia retornar erro
        if (alunos.length == 0) {
            return { status: 'error', msg: 'nenhum aluno encontrado' };
        }
        // caso tenha lista retornar lista
        return { status: 'success', data: alunos };
    }
    // método responsável por retornar apenas o aluno requerido
    async getOne({ id_aluno }) {
        // os dados do aluno é guardado na variável aluno
        const aluno = await conexao.query('SELECT * FROM aluno WHERE id_aluno = ?', [id_aluno]);
        // caso não tenha nada na requisição retornar erro
        if (aluno.length === 0) {
            return { status: 'error', msg: 'nenhum aluno encontrado' };
        }
        // caso tenha o aluno retornar o mesmo
        return { status: 'success', data: aluno[0] };
    }
    // método responsável por criar o aluno no banco
    async create(dados) {
        // parâmetros do aluno
        let params = {
            nome: dados.nome,
            email: dados.email,
            matricula: Math.ceil(Math.random() * 100000) // gerar número aleatório
        }
        // salvando no banco
        await conexao.query('INSERT INTO aluno set ?', [params]);
        // retorna dados do aluno cadastrado
        return { status: 'success', data: dados };
    }
    // método responsável por alterar os dados do aluno
    async update({ id_aluno, nome, email, matricula }) {
        // parâmetros do aluno
        let params = {
            nome: nome,
            email: email,
            matricula: matricula
        }
        // alterando dados
        await conexao.query('UPDATE aluno set ? WHERE id_aluno = ?', [params, id_aluno]);
        // retorna dados do aluno alterado
        return { status: 'success', data: params }
    }
    // método responsável por excluir aluno
    async deletar({ id_aluno }) {
        // exclui aluno com o id informado
        await conexao.query('DELETE FROM aluno WHERE id_aluno = ?', [id_aluno]);
        // retorna mensagem de exclusão
        return { status: 'success', msg: 'aluno deletado' };
    }
}

// exporta model Aluno
module.exports = new Aluno();
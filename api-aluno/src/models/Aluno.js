const conexao = require('../config/Conexao');

class Aluno {
    async list() {
        const alunos = await conexao.query('SELECT * FROM aluno');

        if (alunos.length == 0) {
            return { status: 'error', msg: 'nenhum aluno encontrado' };
        }

        return { status: 'success', data: alunos };
    }

    async getOne({ id_aluno }) {
        const aluno = await conexao.query('SELECT * FROM aluno WHERE id_aluno = ?', [id_aluno]);
        if (aluno.length === 0) {
            return { status: 'error', msg: 'nenhum aluno encontrado' };
        }
        return { status: 'success', data: aluno[0] };
    }

    async create(dados) {
        const result = await conexao.query('INSERT INTO aluno set ?', [dados]);
        return { status: 'success', data: dados };
    }

    async update({ id_aluno, nome, email, matricula }) {
        let params = {
            nome: nome,
            email: email,
            matricula: matricula
        }

        await conexao.query('UPDATE aluno set ? WHERE id_aluno = ?', [params, id_aluno]);
        
        return { status: 'success', data: params }
    }

    async deletar({ id_aluno }) {
        await conexao.query('DELETE FROM aluno WHERE id_aluno = ?', [id_aluno]);

        return { status: 'success', msg: 'aluno deletado' };
    }
}

module.exports = new Aluno();
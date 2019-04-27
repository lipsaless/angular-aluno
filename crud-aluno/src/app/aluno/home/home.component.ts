import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../servicos/aluno.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private alunoService:AlunoService
    ) { }

    // variável que vai armazenar a lista de alunos após a requisição
    alunos:any = [];

    // método acionado ao iniciar esta página
    ngOnInit() {
        this.retornaAlunos();
    }

    // método assíncrono que retorna todos os alunos
    async retornaAlunos() {
        // requisição de todos os alunos é guardada na variável alunos
        const alunos = await this.alunoService.getAlunos();
        // a responsta é transformada em json e guardada na variável alunos, que está no escopo global
        this.alunos = alunos.json().data;
    }

    // método que exclui aluno passando o ID do mesmo
    deletarAluno(id_aluno){
        // confirmação se realmente quer excluir o registro
        if (confirm('Deseja realmente excluir este registro?') === true) {
            // consulta o serviço, na rota de deletar passando o ID
            this.alunoService
            .deleteAluno(id_aluno).then(res => {
                // o status é uma resposta do método caso dê certo, após isso atualizar grid
                if (res.json().status === 'success') {
                    this.retornaAlunos();
                }
            });
        }
        
    }
}

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

    alunos:any = [];

    ngOnInit() {
        this.retornaAlunos();
    }

    async retornaAlunos() {
        const alunos = await this.alunoService.getAlunos();
        this.alunos = alunos.json().data;
    }

    deletarAluno(id_aluno){
        this.alunoService
            .deleteAluno(id_aluno).then(res => {
                if (res.json().status === 'success') {
                    this.retornaAlunos();
                }
            });
    }
}

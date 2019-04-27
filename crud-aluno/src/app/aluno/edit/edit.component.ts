import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AlunoService } from '../../servicos/aluno.service';
import { Aluno } from '../../model/aluno';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    // váriavel que vai armazenar os dados do aluno após a consulta
    aluno = new Aluno;
    // pega o id do aluno que foi passado para a rota quando clicou no botão
    idAluno = this.route.snapshot.params['id_aluno'];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private alunoService: AlunoService
    ) { }

    ngOnInit() {
        this.dadosAluno();
    }
    
    // retorna os dados do aluno clicado e guarda na váriavel aluno
    async dadosAluno() {
        const dados = await this.alunoService.getAluno(this.idAluno);
        this.aluno = dados.json().data;
    };

    // faz a requisição de update do serviço, passando o id do aluno e seus dados
    alterarAluno() {
        this.alunoService
            .updateAluno(this.idAluno, this.aluno).then(res => {
                // ao término da requisição volta para a home
                this.goBack();
            });
    }

    // retorna para a view principal
    goBack() {
        this.router.navigate(['/home']);
    }
}

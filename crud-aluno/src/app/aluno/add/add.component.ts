import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../servicos/aluno.service';
import { Aluno } from '../../model/aluno';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    aluno = new Aluno();

    constructor(
        private alunoService: AlunoService,
        private router: Router
    ) { }
    
    // método acionado ao iniciar esta página
    ngOnInit() {

    }
    // função que adiciona aluno
    addAluno() {
        // aciono o serviço responsável pelas rotas
        this.alunoService
            .adicionaAluno(this.aluno).then(res => {
                // após finalizar voltar para /home
                this.goBack();
            });
    }
    // retorna para /home
    goBack() {
        this.router.navigate(['/home']);
    }
}

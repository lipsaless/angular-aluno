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

    ngOnInit() {

    }
    
    addAluno() {
        this.alunoService
            .adicionaAluno(this.aluno).then(res => {
                this.goBack();
            });
    }

    goBack() {
        this.router.navigate(['/home']);
    }
}

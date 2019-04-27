import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AlunoService } from '../../servicos/aluno.service';
import { Aluno } from '../../model/aluno';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
    this.getSingleEmployee();
  }
  employee:Aluno;
  getSingleEmployee(){
    var id = this.route.snapshot.params['id'];
    this.alunoService
      .getAluno(id)
      .then(employee =>{
          this.employee = employee[0];
          })
  };

  goBack(){
    this.router.navigate(['/home']);
  }
}

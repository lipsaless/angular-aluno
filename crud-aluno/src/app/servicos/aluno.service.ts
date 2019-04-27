import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlunoService {
    constructor(private _http:Http) {

    }

    // retorna todos os alunos
    getAlunos(){
        return this._http.get('http://localhost:3001/alunos').toPromise();
    }
    // retorna apenas 1 aluno
    getAluno = id_aluno => {
        return this._http.get(`http://localhost:3001/aluno/${id_aluno}`).toPromise();
    }
    // adiciona aluno
    adicionaAluno = params => {
        return this._http.post("http://localhost:3001/aluno", params).toPromise();
    }
    // exclui aluno
    deleteAluno = id_aluno => {
        return this._http.delete(`http://localhost:3001/aluno/${id_aluno}`).toPromise();
    }
    // altera aluno
    updateAluno = (id_aluno, info) => {
        return this._http.post(`http://localhost:3001/aluno/${id_aluno}`, info).toPromise();
    }
}

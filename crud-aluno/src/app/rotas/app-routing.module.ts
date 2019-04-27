import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../aluno/home/home.component';
import { AddComponent } from '../aluno/add/add.component';
import { EditComponent } from '../aluno/edit/edit.component';

// rotas definidas
const routes: Routes = [
    // caso não tenha nenhuma rota digitada, automaticamente redireciona para /home    
    { path:"", redirectTo:"/home", pathMatch:"full" },
    { path: "home", component: HomeComponent },
    { path: "add", component: AddComponent },
    { path: "edit/:id_aluno", component: EditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

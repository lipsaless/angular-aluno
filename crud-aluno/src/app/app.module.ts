import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './rotas/app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './aluno/home/home.component';
import { AddComponent } from './aluno/add/add.component';
import { EditComponent } from './aluno/edit/edit.component';
import { ShowComponent } from './aluno/show/show.component';
import { AlunoService } from './servicos/aluno.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

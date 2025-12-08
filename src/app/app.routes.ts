import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { AlunosCadastradosComponent } from './alunos-cadastrados/alunos-cadastrados.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastro-alunos', component: CadastroAlunosComponent },
    { path: 'alunos-cadastrados', component: AlunosCadastradosComponent },
];

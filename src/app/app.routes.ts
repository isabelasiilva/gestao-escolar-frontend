import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastro-alunos', component: CadastroAlunosComponent },
];

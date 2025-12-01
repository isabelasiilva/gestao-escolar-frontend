import { Routes } from '@angular/router';
import { CadastroAlunosComponent } from './cadastro-alunos/cadastro-alunos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'cadastro-alunos', component: CadastroAlunosComponent },
    { path: '', component: HomeComponent }
];

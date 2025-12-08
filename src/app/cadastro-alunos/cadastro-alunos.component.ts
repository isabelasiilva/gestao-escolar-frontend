import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'; // Importe FormBuilder e Validators
import { ButtonModule } from 'primeng/button';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno.model';

@Component({
  selector: 'app-cadastro-alunos',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule],
  templateUrl: './cadastro-alunos.component.html',
  styleUrl: './cadastro-alunos.component.css'
})
export class CadastroAlunosComponent {
  private fb = inject(FormBuilder);
  private alunoService = inject(AlunoService);

  // Cria a estrutura do formulário que espelha o seu HTML
  cadastroForm = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    rua: ['', Validators.required],
    numero: ['', Validators.required],
    estado: ['', Validators.required],
    cidade: ['', Validators.required]
  });

  onSubmit() {
    if (this.cadastroForm.valid) {
      const novoAluno = this.cadastroForm.value as unknown as Aluno;
      this.alunoService.CadastrarAluno(novoAluno).subscribe({
        next: (res) => {
          console.log('Aluno cadastrado com sucesso', res);
          alert('Aluno cadastrado com sucesso!');
          this.cadastroForm.reset();
        },
        error: (err) => {
          console.error('Erro ao cadastrar aluno', err);
          alert('Erro ao cadastrar aluno');
        }
      });
    }
  }
}


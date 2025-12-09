import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'; // Importe FormBuilder e Validators
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno.model';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-cadastro-alunos',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, DialogModule, NgxMaskDirective],
  templateUrl: './cadastro-alunos.component.html',
  styleUrl: './cadastro-alunos.component.css'
})
export class CadastroAlunosComponent {
  private fb = inject(FormBuilder);
  private alunoService = inject(AlunoService);
  displayDialog: boolean = false;
  dialogHeader: string = '';
  dialogMessage: string = '';

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
          // console.log('Aluno cadastrado com sucesso', res);
          this.dialogHeader = 'Sucesso';
          this.dialogMessage = 'Aluno cadastrado com sucesso!';
          this.displayDialog = true;
          this.cadastroForm.reset();
        },
        error: (err) => {
          console.error('Erro ao cadastrar aluno', err);
          this.dialogHeader = 'Erro';
          this.dialogMessage = 'Erro ao cadastrar aluno';
          this.displayDialog = true;
        }
      });
    } else {
      this.dialogHeader = 'Aviso';
      this.dialogMessage = 'Preencha todos os campos corretamente para cadastrar!';
      this.displayDialog = true;
    }
  }
}


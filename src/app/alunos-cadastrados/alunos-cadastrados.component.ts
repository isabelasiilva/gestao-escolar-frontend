import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno.model';
import { ButtonModule } from 'primeng/button';

import { Dialog } from 'primeng/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-alunos-cadastrados',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, Dialog, ReactiveFormsModule],
  templateUrl: './alunos-cadastrados.component.html',
  styleUrl: './alunos-cadastrados.component.css'
})
export class AlunosCadastradosComponent implements OnInit {
  private alunoService = inject(AlunoService);
  alunos: Aluno[] = [];
  edicaoForm!: FormGroup;
  alunoIdSelecionado: number = 0;
  visibilidadeEdicao: boolean = false;

  cols = [
    { field: 'alunoId', header: 'ID' },
    { field: 'nome', header: 'Nome' },
    { field: 'cpf', header: 'CPF' },
    { field: 'dataNascimento', header: 'Nascimento' },
    { field: 'rua', header: 'Rua' },
    { field: 'numero', header: 'Número' },
    { field: 'estado', header: 'Estado' },
    { field: 'cidade', header: 'Cidade' },
  ];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.listaAlunos();

    this.edicaoForm = this.fb.group({
      nome: [''],
      cpf: [''],
      dataNascimento: null,
      rua: [''],
      numero: null,
      estado: [''],
      cidade: [''],
    });
  }

  listaAlunos() {
    this.alunoService.BuscarAlunos().subscribe({
      next: (data) => {
        this.alunos = data;
        console.log('Alunos carregados:', data);
      },
      error: (err) => {
        console.error('Erro ao carregar alunos', err);
        alert('Erro ao carregar lista de alunos');
      }
    });
  }

  editarAluno(Id: number) {
    this.alunoIdSelecionado = Id;
    this.alunoService.BuscarAlunoPorId(Id).subscribe({
      next: (aluno) => {
        // Ajuste para input date se necessário (YYYY-MM-DD)
        if (aluno.dataNascimento) {
          const data = new Date(aluno.dataNascimento);
          // Formata para YYYY-MM-DD
          const dataFormatada = data.toISOString().split('T')[0];
          // Atualiza o valor no objeto para o patchValue funcionar no input date
          // Use spread ou clone se não quiser mutar o original, aqui é simples
          (aluno as any).dataNascimento = dataFormatada;
        }

        this.edicaoForm.patchValue(aluno);
        this.visibilidadeEdicao = true;
      },
      error: (err) => {
        console.error('Erro ao buscar aluno', err);
        alert('Erro ao carregar dados do aluno');
      }
    });
  }

  salvarEdicao() {
    if (this.edicaoForm.valid && this.alunoIdSelecionado) {
      const alunoEditado: Aluno = {
        ...this.edicaoForm.value,
        alunoId: this.alunoIdSelecionado
      };

      this.alunoService.EditarAluno(alunoEditado).subscribe({
        next: () => {
          alert('Aluno editado com sucesso!');
          this.visibilidadeEdicao = false;
          this.listaAlunos(); // Recarrega a lista
        },
        error: (err) => {
          console.error('Erro ao editar aluno', err);
          alert('Erro ao editar aluno');
        }
      });
    } else {
      alert('Formulário inválido');
    }
  }

  deletarAluno(aluno: Aluno) {
    console.log('Deletar aluno:', aluno);
    // Implementar a lógica de exclusão do aluno
  }

}

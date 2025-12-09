import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Aluno } from '../models/aluno.model';

@Injectable({
    providedIn: 'root'
})
export class AlunoService {
    private apiUrl = 'https://localhost:7060/alunos'; // Ajuste conforme sua API

    constructor(private http: HttpClient) { }

    CadastrarAluno(aluno: Aluno): Observable<Aluno> {
        return this.http.post<Aluno>(this.apiUrl, aluno);
    }

    BuscarAlunos(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(this.apiUrl);
    }

    BuscarAlunoPorId(id: number): Observable<Aluno> {
        return this.http.get<Aluno>(`${this.apiUrl}/${id}`);
    }

    EditarAluno(aluno: Aluno): Observable<Aluno> {
        return this.http.put<Aluno>(`${this.apiUrl}/${aluno.alunoId}`, aluno);
    }

    DeletarAluno(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}

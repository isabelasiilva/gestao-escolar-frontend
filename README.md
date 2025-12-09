# Gestão Escolar Frontend

Sistema de gerenciamento escolar desenvolvido para facilitar o cadastro e controle de alunos. Este projeto compõe o frontend da aplicação, consumindo uma API REST.

<img width="600" alt="home" src="https://github.com/user-attachments/assets/0efedbc4-14a8-44f3-91c8-14d8870ffc34" />


## Tecnologias Utilizadas

*   **[Angular 18](https://angular.dev/)**: Framework principal para construção da interface.
*   **[PrimeNG 18](https://primeng.org/)**: Biblioteca de componentes de UI rica e responsiva.
*   **[PrimeFlex 4](https://primeflex.org/)**: Utilitário CSS para layout e estilização ágil.
*   **RxJS**: Biblioteca para programação reativa.

## Funcionalidades

*   **Cadastro de Alunos**: Formulário com validação para inserir novos alunos.
<img width="700" alt="cadastro-alunos" src="https://github.com/user-attachments/assets/3d0d0ef2-1713-43db-bdcd-719a78fb4ddb" />
<img width="700" alt="cadastro-alunos-sucesso" src="https://github.com/user-attachments/assets/09a6fadc-5b47-47e1-9661-5cff66cb0372" />

*   **Listagem de Alunos**: Visualização em tabela dos alunos cadastrados.


<img width="700" alt="alunos-cadastrados" src="https://github.com/user-attachments/assets/1d86b344-4e85-47db-ac1c-b0006e06f12d" />

*   **Edição**: Atualização dos dados cadastrais.

  <img width="700" alt="alunos-cadastrados-editar" src="https://github.com/user-attachments/assets/1c8b5bea-4119-46e2-a7e0-2cc91e69b871" />
<img width="700" alt="alunos-cadastrados-editar-sucesso" src="https://github.com/user-attachments/assets/9c665cdb-ce9c-43ac-9bb1-21536db10797" />

*   **Exclusão**: Remoção de registros de alunos.
<img width="700" alt="alunos-cadastrados-deletar" src="https://github.com/user-attachments/assets/66ef8e3e-497d-4440-8168-20752aef49e8" />

  
*   **Integração API**: Comunicação completa (CRUD) com o backend.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

*   [Node.js](https://nodejs.org/) (versão LTS recomendada).
*   API Backend rodando localmente na porta `https://localhost:7060`.

## Como Rodar o Projeto

1.  **Instale as dependências**:
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento**:
    ```bash
    ng serve
    ```
    Ou, para abrir automaticamente no navegador:
    ```bash
    ng serve -o
    ```

3.  **Acesse a aplicação**:
    Navegue para `http://localhost:4200/`.

## Estrutura do Projeto

*   `src/app/cadastro-alunos`: Componente responsável pelo formulário de cadastro.
*   `src/app/alunos-cadastrados`: Componente responsável pela listagem e ações de edição/exclusão.
*   `src/app/services`: Serviços para comunicação HTTP com a API.
*   `src/app/models`: Modelos de dados TypeScript (Interfaces/Classes).

---
Desenvolvido como projeto de estudo prático.

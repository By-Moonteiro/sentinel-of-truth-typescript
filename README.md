# Sentinel of Truth (TypeScript)

**Status:** `✅ Completo - Funcional`

**Descrição do Projeto/Problema:** É preciso construir um sistema simples, direto e eficiente para organizar o banco de dados
de notícias que serão analisadas por jornalistas. Precisam de um programa direto ao ponto, que
funcione no terminal, para cadastrar links, classificar o conteúdo e fazer buscas rápidas.
O mais importante: esse sistema precisa ser confiável. Nenhuma informação pode se perder, mesmo
que o programa seja fechado. Ao abrir novamente, tudo tem que estar lá, intacto.

## 📚 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de **Cadastrar links, classificar o conteúdo e fazer buscas rápidas**.

Ele é uma reescrita do projeto original feito com o Python. E tem como objetivo estudar um pouco sobre **TypeScript**, com a lógica básica de Python. Logo, o projeto é uma forma de tentar implementar os conhecimentos/estrutura do python, com a sintaxe do TypeScript, não criar um projeto profissional na linguagem.

## 🧠 Tecnologias e Conceitos

- `readline`
- `Better-sqlite3`
- `Typescript`
- `Ts-node`
- `Nodemon`
- `fs/promises`


## 🏗️ Estrutura do Projeto

```
sentinel-of-truth-typescript/
│
├── .gitignore  
├── .nvmrc                            
├── package-lock.json                    
├── package.json
├── README.md
├── tsconfig.json
│
├── data/                                # Arquivos persistidos (DB, relatórios)
│   ├── news.db
│   └── report.txt
│
├── src/                                 # Código-fonte principal do sistema
│   ├── index.ts                         # Código main
│   │
│   ├── controllers/                     # Orquestra o fluxo do programa
│   │   ├── menuController.ts
│   │   ├── newsController.ts
│   │   └── reportController.ts  
│   │      
│   ├── models/                          # Modelos/Entidades que representam objetos do domínio
│   │   └── news.ts            
│   │
│   ├── repository/                      # Camada de  acesso a dados
│   │   ├── iNewsRepository.ts           # Interface de contrato
│   │   ├── sqliteRepository.ts
│   │   └── types.ts
│   │ 
│   ├── services/                        # Lógica de negócio independente de I/O
│   │   ├── newsService.ts
│   │   └── reportService.ts
│   │ 
│   ├── shared/                        # Operações compartilhadas
│   │   ├── operationResult.ts
│   │   └── status.ts
│   │
│   ├── ui/                              # Interface do usuário (menus, input e exibição)
│   │   ├── display.ts
│   │   ├── userInput.ts   
│   │   └── menu.ts
│   │
│   └── utils/                           # Funções utilitárias e configurações gerais
│       ├── config.ts
│       ├── helpers.ts
│       └── reportFormatter.ts
│
└── tests/                               # Testes 
    └── test.ts

```

## 🚀 Como Executar

```

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js **v24.11.1** (testado)
- npm (incluído com o Node.js)
- nvm (opcional, recomendado)

---

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/sentinel-of-truth-typescript.git
cd sentinel-of-truth-typescript
```
### 2️⃣ Usar a versão correta do Node (com nvm)

Se você utiliza o nvm, execute:
```bash
nvm use
```
### 3️⃣ Instalar as dependências
```bash
npm install
```
### 4️⃣ Executar em modo desenvolvimento
```bash
npm run dev
```

### 🏗️ Build de produção

Para compilar o projeto:
```bash
npm run build
```
### ▶️ Executar a versão compilada
```bash
npm start
```

## 📈 Futuros Passos

- [ ]  Refatorar tudo para versão Assíncrona
- [ ]  ...
- [ ]  ...
- [ ]  ...

## 🧩 O que aprendi (Básico)

- [X] Receber input no TypeScript Node (lib readline)
- [X] Criação de Interfaces
- [X] Statement com Banco de dados
- [X] Async/await
- [X] Promises
- [X] Enum
- [X] Estrutura de projeto mais "avançada"
- [X] Map

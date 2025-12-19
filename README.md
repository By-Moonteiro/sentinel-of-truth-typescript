# Sentinel of Truth (TypeScript)

**Status:** `🚧 Em Andamento`

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


## 🏗️ Estrutura do Projeto

```
sentinel-of-truth-typescript/
│
├── .gitignore                            
├── package-lock.json                    
├── package.json
├── README.md
├── tsconfig.json
│
├── data/                                # Arquivos persistidos (DB, relatórios)
│   ├── report.txt
│   └── news.db
│
├── src/                                 # Código-fonte principal do sistema
│   ├── index.ts                         # Código main
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
│   │   ├── reportGenerator.ts
│   │   └── newsService.ts
│   │
│   ├── ui/                              # Interface do usuário (menus, input e exibição)
│   │   ├── display.ts
│   │   ├── userInput.ts   
│   │   └── menu.ts
│   │
│   └── utils/                           # Funções utilitárias e configurações gerais
│       ├── config.ts
│       └── helpers.ts
│
└── tests/                               # Testes 
    └── test.ts

```

## 🚀 Como Executar

....

## 📈 Futuros Passos

- [ ]  ...
- [ ]  ...
- [ ]  ...
- [ ]  ...

## 🧩 O que aprendi (Básico)

- [X] Receber input no TypeScript Node (lib readline)
- [X] Criação de Interfaces
- [X] Statement com Banco de dados
- [X] Async/await
- [X] Promises
- [X] ...

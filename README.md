# Sentinel of Truth (TypeScript)

> Projeto em formato CLI (Command Line Interface), focado em organização de código, persistência e regras de negócio.
> Não possui interface web ou API HTTP.

## 📚 Sobre o projeto

Sentinel of Truth é um **CLI em TypeScript** para cadastrar links de notícias, classificar conteúdos e realizar buscas rápidas,
com persistência em banco de dados. O sistema foi pensado para ser **simples, confiável e direto**.

**Status:** ✅ Funcional (CLI estável, melhorias planejadas)

> O projeto é uma reescrita do Sentinel of truth feito em python, e refinado em TypeScript.


## 🚀 Como Executar

### Pré-requisitos
- Node.js **v24.11.1** (testado)
- npm (incluído com o Node.js)
- nvm (opcional, recomendado)
- Docker Compose
- Docker
---

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/sentinel-of-truth-typescript.git
cd sentinel-of-truth-typescript
```
### 2️⃣ Crie o arquivo .env a partir do exemplo
```bash
cp .env.example .env
```
### 3️⃣ Usar a versão correta do Node (com nvm)
Se você utiliza o nvm, execute:
```bash
nvm use
```
### 4️⃣ Subindo o ambiente com Docker 
```bash
docker compose up -d 
```
### 5️⃣ Instalar as dependências
```bash
npm install
```
### 6️⃣ Executar o projeto
```bash
npm start
```
### 7️⃣ Executar em modo desenvolvimento
```bash
npm run dev
```


## 🏗️ Estrutura do Projeto

```
sentinel-of-truth-typescript/
│
├── .env.example 
├── .gitignore
├── .nvmrc    
├── docker-compose.yml                           
├── package-lock.json                    
├── package.json
├── README.md
├── tsconfig.json
│
├── data/                                # Relatório
│   └── report.txt
│
├── docker/                              # Arquivo para a inicialização do Banco                        
│   └── postgres
│       └── init.sql
│
├── src/                                 # Código-fonte principal do sistema
│   ├── index.ts                         # Código main
│   │
│   ├── controllers/                     # Fluxo da aplicação     
│   ├── models/                          # Entidades do domínio           
│   ├── repository/                      # Persistência (PostgreSQL)
│   ├── services/                        # Regras de negócio
│   ├── shared/                          # Código compartilhado entre camadas
│   ├── ui/                              # CLI (menus e inputs)
│   └── utils/                           # Helpers e configs
│
└── tests/                               # Testes 
    └── test.ts

```

### 🔄 Reset do ambiente (PostgreSQL)

Isso remove containers **e volumes**, apagando todos os dados persistidos.

```bash
docker compose down -v
docker compose up -d
```


## 🧠 Stack

### Runtime & Linguagem
- Node.js
- TypeScript

### Banco de Dados
- PostgreSQL
- pg (node-postgres)

### Infra
- Docker
- Docker Compose
- Dotenv

### Ferramentas
- Tsx
- Nodemon


## 📈 Futuros Passos

- [ ]  ...
- [ ]  ...
- [ ]  ...
- [ ]  ...

## 🧩 Principais aprendizados

- [X] Receber input no TypeScript Node (lib readline)
- [X] Criação de Interfaces
- [X] Statement com Banco de dados
- [X] Async/await
- [X] Promises
- [X] Enum
- [X] Estrutura de projeto mais "avançada"
- [X] Criação de Pool connection
- [X] Criação de docker-compose simples

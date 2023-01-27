## Documentação de arquitetura do Projeto

* Requisito de desenvolvimento
* Instalação de dependências
* Configurações de ambiente
* Iniciar projeto
* Arquitetura do Projeto
  * Qualidade de código
  * Estrutura do projeto

### Requisito de desenvolvimento
Requisitos obrigatórios para uso do projeto:
- Node 16.14.2 [Node](https://nodejs.org)
- Yarn 1.22.17 [Yarn](https://yarnpkg.com/)

### Instalação de dependências
Pré-requisitos:
- [x] Ter os executaveis para instalação dos [requisitos obrigatórios](#Requisito)
- [x] Abrir o diretório do projeto

Abrir o terminal do seu sistema operacional e executar o comando abaixo:

```shell
yarn install
```

### Configurações de ambiente
Pré-requisitos:
- [x] Ter instalado as dependências do projeto
- [x] Abrir o diretório do projeto

Editar o arquivo chamado ```.env.development```. Este arquivo deve conter as configurações das variáveis de ambiente do projeto.

As variáveis do arquivo ````.env.development```` são:

```dotenv
#url do backend
REACT_APP_URL="" 
```

## Iniciar projeto
Pré-requisitos:
- [x] Ter os executaveis para instalação dos [Configurações de ambiente](#Requisito)
- [x] Abrir o diretório do projeto

Abrir o terminal do seu sistema operacional e executar o comando abaixo:

```shell
yarn start
```

## Arquitetura do Projeto

### Qualidade de Código
Ferramentas utilizadas para realizar padronização do código:

#### ESLint 8.8.0 [ESLint](https://eslint.org/) e Prettier 2.5.1 [Prettier](https://prettier.io/)

Usado para garantir que o código esteja no mesmo padrão entre a equipe de desenvolvimento.

#### Husky 8.0.1 [Husky](https://typicode.github.io/husky),
Lint-staged 13.0.3 [Lint-staged](https://github.com/okonet/lint-staged) e
Commitizen 4.2.4 [Commitizen](https://commitizen-tools.github.io/commitizen/)

Usado para manter um gitflow em todos os commits do projeto garantindo que seja apenas realizados os commits quando passar por um lint para garantir o padrão do código e rodar os testes para conferir se o sistema está rodando perfeitamente.

#### Typescript 4.5.5 [Typescript](https://www.typescriptlang.org/)
Usado para garantir a tipagem do código e melhorar a manutenção do sistema.

#### Testing-library 13.4.0 [Testing-library](https://testing-library.com/)
Usado junto com o jest para realizar teste e garantir as entregas no sistema.

### Estrutura do projeto
O projeto está estruturado em:

- [Public](#Public)
- [Src](#Src)
  - [Core](#Core)
    - [Assets](#Assets)
    - [Components](#Components)
    - [Hooks](#Hooks)
    - [Layouts](#Layouts)
    - [Routes](#Routes)
    - [Services](#Services)
    - [Styles](#Styles)
    - [Utils](#Utils)
  - [Views](#Views)
    - [Modules](#Modules)

#### Public
````Pasta public gerada pelo react.````

#### Src
```Pasta que tem todos os arquivos do sistema. ```

#### Core
```Guarda toda lógica do sistema que são fixas.```

#### Assets
```Guarda todos arquivos estáticos.```

#### Components
```Componentes guardam pequenas estruturas de html, css e typescript do projeto onde poderá ser reaproveitado em várias páginas.```

#### Hooks
```Guarda todos os hooks para ser usado por todas as páginas do sistema.```

#### Layouts
```Guarda todos Layouts base do projeto para serem reaproveitados nos módulos.```

#### Routes
```Guarda todos json das rotas de cada módulo e exporta para o index do projeto. Assim ajudando os desenvolvedores a mexer no json do seu módulo sem ocorrer merge durante os versionamentos.```

#### Services
```Guarda todos serviços do projeto com intuito de centralizar as regras de negócio como todas as chamadas ao local storage, módulo de api para conexão com o backend, sistema de notificação, validação entre outros.```

#### Styles
```Guarda todos styles global do projeto.```

#### Views
```Guarda todos os módulos que contém as páginas do sistema.```

#### Modules
```O Módulos consistem em uma pasta com o nome do mesmo onde contém um arquivo de router.tsx que armazena as rotas do módulo que será importado no core/router, também armazena as páginas e suas regras de negócio.```
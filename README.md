<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h1 align="center">Space-X API</h1>
<h3 align="center">API que obtém e estrutura os dados da API da Space-X sobre lançamentos de foguetes.</h3>

<br/>

<h2>Tecnologias utilizadas</h2>

- Nodejs com Nestjs
- Prisma ORM
- MongoDB
- Express
- NodeCron
- Axios
- Swagger
- Typescript

<h2>Como executar</h2>

> Necessário docker para o mongodb local

<h4>Clone o repositório</h4>

```sh
  git clone https://github.com/pereiraadiel/space-x-api.git
  cd space-x-api
```

<h4>Renomeie o arquivo .env.example</h4>
Renomeie o arquivo .env.example para .env
em seguida preencha as variavéis dentro do arquivo .env

<h4>Suba o container do mongodb com docker</h4>

```sh
  docker compose up -d
```

<h4>Instalar as dependencias</h4>

```sh
  yarn # ou  npm i
```

<h4>Executar o servidor local</h4>

```sh
  yarn start:dev # ou  npm run start:dev
```

O backend estará escutando requisições em [localhost:8080](http://localhost:8080) e a documentação dos endpoints pode ser acessada em [localhost:8080/api](http://localhost:8080/api)

<br/>

> This is a challenge by [Coodesh](https://coodesh.com)

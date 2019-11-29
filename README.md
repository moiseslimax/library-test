# Library test - API REST

Api REST simulando uma biblioteca.

## Tecnologias

---

-   **Express**
-   **Yarn**
-   **MongoDB**
-   **JWT**
-   **Cors**
-   **Bcrypt**

## Como instalar e rodar o projeto

---

-   Baixar o repositorio

*   Rodar dentro da pasta do repositorio o comando:

```
yarn install ou yarn
```

-   Criar e configurar o arquivo .env com dados do .env_default (**Não é o correto para a estrutura mas deixei um .env pré configurado com uma conexao valida para um banco de dados mongoDB hospedado no Atlas para facilitar os testes**)

*   Caso utilizado **POSTMAN para consultar Endpoints**, importar collection que está na pasta ./docs do projeto. Nela tem todas as rotas com payload exemplo

-   Rodar dentro da pasta do repositorio para start com nodemon ou node:

```
yarn start-dev ou yarn start
```

## Endpoints

---

## --Referentes a Usuários--

### GET /user/data?id={id}

Example: http://example.com/user/data?id={id}

### PATCH /user/update

Example: http://example.com/user/update

Request body:

    {
    "id": "5ddee5338817ac363c2440d8",
    "updateParams": {
        "name": "Moises Maldaner de Lima xxx",
        "age": "23",
        "phone": "51995601218",
        "email": "moiseslimax@gmail.com",
        "password": "ksaomdokamsd"
    }

}

### POST /user/favoritebook

Example: http://example.com/user/favoritebook

Request body:

    {
    "bookId": "5ddee5338817ac363c2440d8",
    }

### DELETE /user/remove

Example: http://example.com/user/remove

Request body:

    {
    "id": "5ddee5338817ac363c2440d8",
    }

## --Referentes a Biblioteca--

### POST /library/login

Example: http://example.com/library/login

Request body:

    {
    "email": "moises6@teste.com",
    "password": "123456"
    }

### GET /library/users

Example: http://example.com/library/users

### GET /library/books

Example: http://example.com/library/books

### POST /library/signin

Example: http://example.com/library/signin

Request body:

    {
    "name": "moises teste",
    "email": "moises8@teste.com",
    "phone": "51995601218",
    "age": "100",
    "password": "123456"
    }

## --Referentes a Livros--

### POST /book/addbook

Example: http://example.com/book/addbook

Request body:

    {
    "title": "Update sem Where - Um medo",
    "ISBN": "945",
    "category": "Comedia",
    "year": "2010"
    }

### GET /book/data?id={id}

Example: http://example.com/book/data?id={id}

### DELETE /book/remove

Example: http://example.com/book/remove

Request body:

    {
    "id": "5ddee5338817ac363c2440d8",
    }

### PATCH /book/update

Example: http://example.com/book/update

Request body:

    {
    "id": "5de02f6a4e161655042db6fe",
    "updateParams": {
        "title": "Update sem where- Um respeito",
        "ISBN": "941",
        "category": "Comedia",
        "year": "2010"
    }

---

## Made with love and coffee by Moisés Maldaner de Lima

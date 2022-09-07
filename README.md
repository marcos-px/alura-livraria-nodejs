
# Alura Livraria

Este projeto consiste na criação de endpoints em Node Express, com conexão com MongoDB de uma Livraria no padrão MVC em CRUD (Create, Read, Update and Delete).



## Funcionalidades

- LISTAR TODOS OS LIVROS
- LISTAR LIVROS COM ID ESPECÍFICA
- ATUALIZAR, DELETAR E CRIAR LIVROS
- LISTAR TODOS OS AUTORES, CRIAR, ATUALIZAR E DELETA-LIVROS
- Criação de REFERENCES entre autores e livros.




## Stack utilizada

**Back-end:** Node, Express


## Documentação da API

#### Retorna todos os livros

```http
  GET /livros
```

| Example Request   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `localhost:3000/livros` | `string` |  |

#### Retorna um livro

```http
  GET /livros/id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do livro que você quer |


#### Busca Livros por editora

```http
  GET livros/busca?editora=${editora}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `editora`      | `string` | **Obrigatório**. O nome da editora por queryString |

#### ATUALIZA um livro

```http
  PUT /livros/id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do livro que você quer |

#### CADASTRA um livro

```http
  POST /livros
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. Verificar formato JSON no githubpages |

#### DELETA um livro

```http
  DELETE /livros/id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do livro que você quer |

### O processo todo se repete para a URI autores.
## Referência

 - [ALURA](https://https://www.alura.com.br/)



## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack...

Sou o Marcos, tenho 28 anos e moro em Sete Lagoas-MG, bem pertim de BH.
Estou aprendendo programação WEB na Gama Academy e faço Ciência da Computação na Faculdade Descomplica. Já tenho conhecimento de HTML5, CSS3, JS, NODE, MYSQL, MONGODB, EXPRESS E SEQUELIZE, além de estar me especializando em BACK-END.
Eu trabalho em outra área, estou em transição de carreira. Abaixo segue meus contatos, qualquer coisa é só me chamar, blz?
Ah, fique à vontade pra ver meus projetos. 😁
## Instalação

Instalações Obrigatórias

```bash
  npm install express mongoose
  cd src
```
Instalações Recomendadas

```bash
  npm install nodemon
```

Projeto com link do BD na pasta
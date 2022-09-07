const express = require('express');
const app = express();
const db = require("../config/dbConnect");

db.on("error", console.log.bind(console, "Erro de conexão no MongoDB"));
db.once("open", () => {
    console.log("Conexão feita com sucesso")
})

app.use(express.json());

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Auto da Compadecida"}
  ]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
  });

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro Cadastrado com sucesso!");
});


app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
  });

  app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
  })

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
  }

module.exports = app;
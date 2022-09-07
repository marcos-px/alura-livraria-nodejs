const express = require('express');
const app = express();
const db = require("./config/dbConnect");
const livros = require("./models/Livro");
const routes = require( "./routes/index.js")


db.on("error", console.log.bind(console, "Erro de conexão no MongoDB"));
db.once("open", () => {
    console.log("Conexão feita com sucesso")
})

app.use(express.json());
routes(app);

// const livros = [
//     {id: 1, "titulo": "Senhor dos Aneis"},
//     {id: 2, "titulo": "O Auto da Compadecida"}
//   ]


app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
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
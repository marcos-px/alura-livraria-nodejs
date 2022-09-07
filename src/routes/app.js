const express = require('express');
const app = express();

const livros = [
    {id:1, "título": "Senhor dos Aneis"},
    {is:2, "título": "O Auto da Compadecida"}
];

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

module.exports = app;
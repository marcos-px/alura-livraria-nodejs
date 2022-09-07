const express = require('express');
const app = express();
const db = require("./config/dbConnect");
const routes = require( "./routes/index.js")


db.on("error", console.log.bind(console, "Erro de conexão ao MongoDB"));
db.once("open", () => {
    console.log("Conexão feita com sucesso")
})

app.use(express.json());
routes(app);

module.exports = app;
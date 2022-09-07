const express = require("express");
const livros = require( "./livrosRoutes");
const autores = require("./autoresRoutes")

const routes = (app) =>{
    app.route("/").get((req,res) =>{
        res.status(200).send({titulo:"Curso de Node"})
    })

    app.use(
        express.json(),
        livros,
        autores,
    )
}

module.exports = routes;
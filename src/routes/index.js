const express = require("express");
const livros = require( "./livrosRoutes");

const routes = (app) =>{
    app.route("/").get((req,res) =>{
        res.status(200).send({titulo:"Curso de Node"})
    })

    app.use(
        express.json(),
        livros
    )
}

module.exports = routes;
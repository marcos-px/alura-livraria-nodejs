const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://alura:123@cluster0.f80puaf.mongodb.net/alura-node"); //vai vir sem o nome do db, apagar os dois últimos.

const db = mongoose.connection;

module.exports = db;
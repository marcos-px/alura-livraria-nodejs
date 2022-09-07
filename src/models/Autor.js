const mongoose = require("mongoose");

const autorSchema = new mongoose.Schema({
    id:{ type: String},
    nome:{type:String, required: true},
    nacionalidade:{type:String}
},
    {
        versionKey: false
    }
);

const autores = mongoose.model('autores', autorSchema); //cria sozinho se não existir

module.exports = autores;
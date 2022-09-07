const http = require('http');
const PORT = 3000;


const rotas = {
    '/': "Curso de Node",
    "/livros": "Entrei na pag de livros",
    "/autores": "Listagem de autores",
    "/editora": "Entrei na página de editores",
    "/sobre": "Informação sobre o projeto"
}

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORT,()=>{console.log(`Servidor rodando em  http://localhost:${PORT}`)});

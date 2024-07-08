const express = require('express');

const routes = require('./routes');

// Cria uma aplicação Express
const app = express();

// Middleware que permite que o servidor interprete dados em formato JSON
app.use(express.json());

app.use(routes);

// Define uma rota GET
app.get('/', (req, res) => {
    res.send("Hello World!!");
});

// Faz o servidor escutar na porta 3000 e exibe uma mensagem no console quando ele está pronto
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

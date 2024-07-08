const express = require('express');

const routes = express.Router();

const users = [{
        id: 1,
        name: 'Lucas',
        email: 'lucasvsn2003@gmail.com',
        password: '123456'

}];

// Define uma rota POST para '/login' que processa os dados enviados na requisição
routes.post('/login', (req, res) => {
    // Extrai o email e a senha do corpo da requisição (req.body)
    const { email, password } = req.body;
    
    const user = users.find(user => user.email === email && user.password === password);
    if (user)
    {
        res.status(200).json(user);
    }
        

    res.status(401).json({message: 'Credenciais inválidas' });
});

// Exporta o objeto routes, permitindo que ele seja usado em outros arquivos
module.exports = routes;

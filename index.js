const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorAtual = 0;

app.get('/', (req, res) => {
    res.send(`É a vez de ${jogadores[jogadorAtual]} jogar!`);

    jogadorAtual = (jogadorAtual + 1) % jogadores.length;
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
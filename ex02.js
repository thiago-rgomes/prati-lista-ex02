// 2. Jogo de Adivinhação 
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando 
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let acertou = false;

while (!acertou) {
    const input = prompt('Adivinhe o número (1 a 100): ');
    const numero = Number(input);

    if (isNaN(numero) || !Number.isInteger(numero) || numero < 1 || numero > 100) {
        console.log('Entrada inválida. Por favor, digite um número inteiro entre 1 e 100.');
        continue;
    }

    tentativas++;

    if (numero < numeroAleatorio) {
        console.log('Mais alto!');
    } else if (numero > numeroAleatorio) {
        console.log('Mais baixo!');
    } else {
        console.log(`Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas!`);
        acertou = true;
    }
}
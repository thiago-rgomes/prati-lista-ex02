// 3. Palavras Únicas 
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

const frase = "olá olá mundo mundo mundo de novo";

const palavras = frase.split(" ");

const unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    let contagem = 0;

    for (let j = 0; j < palavras.length; j++) {
        if (palavras[j] === palavra) {
            contagem++;
        }
    }

    if (contagem === 1) {
        unicas.push(palavra);
    }
}

console.log("Palavras únicas:", unicas);

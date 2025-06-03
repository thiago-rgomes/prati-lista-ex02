//9. Conversão Entre Formatos Escreva duas funções: 
// - paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente. 
// - objetoParaPares(obj) faz o inverso, retornando um array de pares.


const pares = [
  ['nome', 'João'],
  ['idade', 40],
  ['cidade', 'São Paulo']
];


function paresParaObjeto(pares) {
  return pares.reduce((acc, [chave, valor]) => {
    acc[chave] = valor;
    return acc;
  }, {});
}


function objetoParaPares(obj) {
  return Object.entries(obj);
}


const objeto = paresParaObjeto(pares);
console.log(objeto);


const paresDeVolta = objetoParaPares(objeto);
console.log(paresDeVolta);



// 7. Mapeamento e Ordenação
//  Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

function ordenarProdutosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(produto => produto.nome);
}

const produtos = [
  { nome: 'Produto A', preco: 30 },
  { nome: 'Produto B', preco: 20 },
  { nome: 'Produto C', preco: 50 },
  { nome: 'Produto D', preco: 10 }
];

const nomesOrdenados = ordenarProdutosPorPreco(produtos);
console.log(nomesOrdenados);

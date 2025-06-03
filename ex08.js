// 8. Agrupamento por Propriedade
//  Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.


const vendas = [
  { cliente: 'A', total: 200 },
  { cliente: 'B', total: 300 },
  { cliente: 'A', total: 500 },
  { cliente: 'C', total: 150 },
  { cliente: 'D', total: 400 },
  { cliente: 'E', total: 100 },
];

const resultado = vendas.reduce((acc, venda) => {

  if (acc[venda.cliente]) {
    acc[venda.cliente] += venda.total;
  } else {
    acc[venda.cliente] = venda.total;
  }
  return acc;
}, {});

console.log(resultado);

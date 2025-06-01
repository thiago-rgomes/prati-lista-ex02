// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.


function memoize(fn) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function add(a, b) {
  console.log("Calculando...");
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(3, 5));
console.log(memoizedAdd(3, 5)); // Usando cache


// Desafio do Dia 5: Filtrando Números Positivos
// Descrição:
// Escreva uma função que receba um array de números inteiros (positivos e negativos) e retorne um novo array contendo apenas os números positivos.

function getArray(arr) {
  return arr.filter((number) => number > 0);
}

console.log(getArray([1, 5, -2, -4, 2]));

// inicialmente, eu iria utilizar um loop for of para resolver esse problema. Porém, eu lembrei de uma aula do freeCodeCamp!, e utilizei o método filter que percorre todos os elementos do array e cria um novo contendo os elementos que passaram no teste lógico, a função de callback que eu forneci dentro do filter foi uma função arrow( => ) que, caso o número(number) que está no array seja maior do que o número 0 ele deve ser incluido no array :)

// Desafio do Dia 1: Soma de Números Pares
// Descrição:
// Escreva uma função que receba um array de números inteiros e retorne a soma de todos os números pares presentes no array.

// Exemplo:

// Entrada: [1, 2, 3, 4, 5, 6]
// Saída: 12 (2 + 4 + 6 = 12)

// Entrada: [7, 8, 10, 13, 15]
// Saída: 18 (8 + 10 = 18)

function sumEven(numbers) {
  let sum = 0;
  for (let number of numbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  if (sum === 0) {
    console.log("Não há números pares para calcular portanto a soma é igual a");
  }
  console.log(sum);
}

sumEven([1, 2, 3, 4, 5, 6]);

sumEven([7, 3, 8, 25, 12]);

sumEven([1, 3, 5, 7, 9]);

// Como encontrei a solução do problema:

// Eu criei uma função chamada sumEven e defini o parâmetro numbers, que representa o array de números inteiros. Em seguida eu criei uma variável chamada sum e defini inicialmente o valor da variável para 0, para que ela acumulasse a soma dos números pares presentes no array. Depois disso Utilizei um loop de for...of para percorrer cada elemento do array e para cada número eu verifiquei se ele era par usando a seguinte condição:

// if (number % 2 === 0) {
//   sum += number;
// }

// A lógica que utilizei foi baseada em uma formula simples para identificar se um número é par: se o resto da divisão do número por 2 for estritamente igual a 0, o número será do tipo par. Quando essa condição é atendida, o valor do número é adicionado à variável sum. Essa abordagem garantiu que apenas os números pares fossem somados, resultando na resposta correta.

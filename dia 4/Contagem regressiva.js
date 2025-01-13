// Desafio do Dia 4: Contagem Regressiva
// Descrição:
// Escreva uma função que receba um número inteiro positivo n e exiba uma contagem regressiva de n até 0 usando um loop while.
// Deve funcionar apenas para números inteiros positivos.
// Se o número for menor que 0, exiba a mensagem: "Número inválido".
// Ao final da contagem, exiba a mensagem: "Fim da contagem!".

// Minha solução

function countdown(n) {
  while (n > 0) {
    n--;
    console.log(n);
  }

  if (n === 0) {
    console.log("Fim da contagem!");
  } else {
    console.log("Número inválido");
  }
}

countdown(10);

// Criei uma função chamada countdown com o parâmetro (n) e dentro da função utilizei um loop while para definir que caso o número definido no parâmetro fosse maior do que zero então o n teria seu valor reduzido a cada vez que o loop fosse executado,após isso o numero seria escrito na tela utilizando console.log(), e também utilizei condicionais if e else, if para caso o número fosse estritamente igual a zero fosse escrito no console que a contagem foi finalizada, e caso não (else) o número colocado seria inválido

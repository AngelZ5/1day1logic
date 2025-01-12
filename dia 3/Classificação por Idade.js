// Desafio do Dia 3: Classificação por Idade
// Descrição:
// Escreva uma função que receba a idade de uma pessoa e retorne uma classificação de acordo com a seguinte tabela:

// 0 a 12 anos: "Criança"
// 13 a 17 anos: "Adolescente"
// 18 a 64 anos: "Adulto"
// 65 anos ou mais: "Idoso"
// Se a idade for negativa, a função deve retornar: "Idade inválida".

//Minha solução

function ageScan() {
  let age = parseInt(prompt("What is your age? "));

  if (age <= 0) {
    return "Criança";
  } else if (age <= 17) {
    return "Adolescente";
  } else if (age <= 64) {
    return "Adulto";
  } else if (age >= 65) {
    return "idoso";
  } else {
    return "Idade inválida";
  }
}

console.log(ageScan());

//Utilizei condicionais if, else if e else para definir qual categorização deveria ser retornada de acordo com a idade digitada. (Não tem muito o que estender, é só isso mesmo :)

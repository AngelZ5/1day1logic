let number = Math.floor(Math.random() * 100) + 1;
let answer = "";

if (answer === number) {
  console.log(`You win!, The number was ${number}`);
} else if (answer > number) {
  console.log("less");
} else if (answer < number) {
  console.log("more");
} else {
  console.log("Not a valid answer");
}

// Tive alguns contratempos, irei atualizar assim que possível integrando com o HTML. Por enquanto, deixarei apenas a lógica.

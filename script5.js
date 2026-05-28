
let num = Number(prompt("Digite um número:"));

if (num % 3 === 0 && num % 5 === 0) {
  alert("Divisível por 3 e 5");
} else if (num % 3 === 0) {
  alert("Divisível por 3");
} else if (num % 5 === 0) {
  alert("Divisível por 5");
} else {
  alert("Não é divisível por 3 nem por 5");
}


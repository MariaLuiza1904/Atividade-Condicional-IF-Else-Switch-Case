
let n1 = Number(prompt("Número 1:"));
let n2 = Number(prompt("Número 2:"));
let op = Number(prompt("1-Soma 2-Subtração 3-Multiplicação 4-Divisão"));

switch(op) {
  case 1:
    alert(n1 + n2);
    break;
  case 2:
    alert(n1 - n2);
    break;
  case 3:
    alert(n1 * n2);
    break;
  case 4:
    alert(n1 / n2);
    break;
  default:
    alert("Opção inválida");
}






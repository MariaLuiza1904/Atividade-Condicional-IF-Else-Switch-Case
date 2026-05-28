
let op = Number(prompt("1-Celsius→Fahrenheit 2-Fahrenheit→Celsius 3-Celsius→Kelvin"));
let temp = Number(prompt("Digite a temperatura:"));
let resultado;

switch(op) {
  case 1:
    resultado = (temp * 9/5) + 32;
    break;
  case 2:
    resultado = (temp - 32) * 5/9;
    break;
  case 3:
    resultado = temp + 273;
    break;
  default:
    alert("Opção inválida");
}

alert("Resultado: " + resultado);







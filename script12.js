

let n1 = Number(prompt("Nota 1:"));
let n2 = Number(prompt("Nota 2:"));

if (n1 <= 10 && n2 <= 10) {
  let media = (n1 + n2) / 2;

  if (media >= 6) {
    alert("Aprovado");
  } else if (media >= 5) {
    alert("Recuperação");
  } else {
    alert("Reprovado");
  }
} else {
  alert("Notas inválidas");
}



// crear una variable llamada mes y que tenga asignado por 
// defecto el valor 10
var mes = 10;

// primavera: valor de mes está entre 3 - 5
if (3 <= mes && mes <= 5) {
  console.log("Es Primavera");
  alert("Es Primavera");
}
// verano: valor de mes se encuentra entre 6 - 8
else if (6 <= mes && mes <= 8) {
  console.log("Es Verano");
  alert("Es Verano");
}
// otono: valor de mes se encuentra entre 9 - 11
else if (9 <= mes && mes <= 11) {
  console.log("Es Otoño");
  alert("Es Otoño");
}
// invierno: valor de mes está entre 1 - 12
else if (1 <= mes && mes <= 12) {
  console.log("Es Invierno");
  alert("Es Invierno");
}
else {
  console.log("El valor de mes tiene que estar entre 1 y 12");
  alert("El valor de mes tiene que estar entre 1 y 12");
}

// Al finalizar debe imprimir en pantalla un mensaje 
// que indique su número de carné y su nombre completo
console.log(
  "Nombre: Victor Alejandro Maldonado Mendez\nCarne: 22000166");
alert(
  "Nombre: Victor Alejandro Maldonado Mendez\nCarne: 22000166");


// document.body.innerHTML = 
//  "<h1>Nombre: Victor Maldonado<br/>Carne: 22000166</h1>";

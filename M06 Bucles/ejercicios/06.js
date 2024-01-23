function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return (num <= 999 && num >= 100) ? true : false;
}

// Consigna:
// function tieneTresDigitos(num) {
//   // Si el número recibido tiene tres dígitos, retorna true.
//   // Caso contrario, retorna false.
//   // Tu código:
  
// }

// Mi solucion
// function tieneTresDigitos(num) {

//   return (num <= 999 && num >= 100) ? true : false;
// }

// ChatGPT 3.5
// function tieneTresDigitos(num) {
//   return num <= 999 && num >= 100;
// }
// PASS  M06 Bucles/tests/M6T6.test.js
// En esta versión, la expresión (num <= 999 && num >= 100) ya produce un valor booleano, por lo que puedes devolver directamente ese valor en lugar de usar el operador ternario.

// Ambas versiones son válidas, y la elección entre ellas depende de tu preferencia de estilo. La versión más corta es igualmente legible y reduce la redundancia al evitar el uso de ? true : false.

// Bard
// function tieneTresDigitos(num) {
//   return Math.floor(num / 100) === 3;
// }
// Tienes razón, la versión que te propuse no funciona. La función Math.floor() devuelve el número entero más pequeño que es mayor o igual que un número dado. En este caso, la función devuelve el número de dígitos del número dado, pero no comprueba si el número tiene tres dígitos.

// Una versión que funciona correctamente sería la siguiente:
// function tieneTresDigitos(num) {
//   return num >= 100 && num <= 999;
// }

module.exports = tieneTresDigitos;


function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  return ((num % 2) === 0)
  // por precedencia, los paréntesis están de más. Ver solución de ChatGPT
}

// Consigna:
// function esPar(num) {
//   // Retorna true si "num" es par.
//   // De lo contrario, retorna false.
//   // Tu código:
  
// }
// Mi solucion:
// function esPar(num) {
  
//   return ((num % 2) === 0)
// }


// Solución ChatGPT 3.5
// function esPar(num) {
//   return num % 2 === 0;
// }
// PASS  M05 Fundamentos Javascript/tests/M5T17.test.js

// Solución Bard 
// Tu solución es correcta y funciona correctamente. La función comprueba si el resto de la división de num por 2 es igual a 0. Si lo es, la función devuelve true. De lo contrario, devuelve false.
// Otra posible solución sería utilizar el método Math.floor() para redondear num hacia abajo al número entero más cercano. Si el número entero más cercano es divisible por 2, entonces el número original también es divisible por 2.
// function esPar(num) {
//   return Math.floor(num) % 2 === 0;
// }
// Esta versión de la función es equivalente a la tuya, pero es un poco más eficiente, ya que evita la necesidad de realizar una comparación de igualdades.
// PASS  M05 Fundamentos Javascript/tests/M5T17.test.js
module.exports = esPar;

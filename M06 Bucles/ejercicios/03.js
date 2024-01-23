function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x < y || x === y)  return y
  else return x;
}

// Consigna:
// function obtenerMayor(x, y) {
//   // "x" e "y" son números enteros.
//   // Retorna el número más grande.
//   // Si son iguales, retornar cualquiera de los dos.
//   // Tu código:
  
// }

// Mi solucion:
// function obtenerMayor(x, y) {
//   if (x < y || x === y)  return y
//   else return x;
// }

// ChatGPT 3.5
// function obtenerMayor(x, y) {
//   return x >= y ? x : y;
// }
// PASS  M06 Bucles/tests/M6T3.test.js
// En esta versión, el operador ternario (condition ? expr1 : expr2) se utiliza para evaluar si x es mayor o igual a y. Si la condición es verdadera, devuelve x, de lo contrario, devuelve y. Esto logra el mismo resultado de manera más compacta.

// Ambas versiones son válidas, y la elección entre ellas dependerá de tu preferencia de estilo. La versión más corta utiliza un operador ternario, lo cual puede ser considerado más elegante y fácil de leer para algunos desarrolladores.

// Bard
// La función podría mejorarse utilizando la función Math.max(). La función Math.max() devuelve el mayor de dos o más números.
// function obtenerMayor(x, y) {
//   return Math.max(x, y);
// }
// PASS  M06 Bucles/tests/M6T3.test.js
module.exports = obtenerMayor;

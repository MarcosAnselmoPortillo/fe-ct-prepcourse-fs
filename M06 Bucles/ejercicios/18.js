function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a === 0 || b === 0) return 0;
  var resultado = 1;
  if (a >= b) {
    var mayor = a;
    var menor = b;
  } else {
    var mayor = b;
    var menor = a;
  }
  while(menor <= mayor){
    resultado = resultado * menor;
    menor++;
    if (menor === 0) return 0;
  }
  return resultado;
}

// Consigna:
// function productoEntreNúmeros(a, b) {
//   // Dados dos argumentos "a" y "b", devuelve el producto de todos
//   // los números entre a y b (inclusive).
//   // Tu código:
// }

// Mi solucion:
// function productoEntreNúmeros(a, b) {
//   if (a === 0 || b === 0) return 0;
//   var resultado = 1;
//   if (a >= b) {
//     var mayor = a;
//     var menor = b;
//   } else {
//     var mayor = b;
//     var menor = a;
//   }
//   while(menor <= mayor){
//     resultado = resultado * menor;
//     menor++;
//     if (menor === 0) return 0;
//   }
//   return resultado;
// }

// ChatGPT 3.5
// function productoEntreNúmeros(a, b) {
//   if (a === 0 || b === 0) return 0;
  
//   var mayor = (a >= b) ? a : b;
//   var menor = (a >= b) ? b : a;

//   var resultado = 1;

//   while (menor <= mayor) {
//     resultado *= menor;
//     menor++;

//     if (menor === 0) return 0;
//   }

//   return resultado;
// }
// PASS  M06 Bucles/tests/M6T18.test.js
// En esta versión, se utilizan operadores ternarios para asignar valores a mayor y menor en una línea, lo que reduce la redundancia en la lógica.

// Esta simplificación no cambia el comportamiento de la función, simplemente hace que el código sea un poco más conciso. 

module.exports = productoEntreNúmeros;
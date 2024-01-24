function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  if (array.length > 0){
    // var maximo = array.length + 1
    var maximo = array.length // con corrección de ChatGPT
    // return array[Math.floor(Math.random(maximo))] //Fuente mal copiada: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return array[Math.floor(Math.random() * maximo)]; // con corrección de ChatGPT
  }
  return undefined;
}

// Consigna
// function obtenerElementoAleatorio(array) {
//   // Devuelve un elemento aleatorio del arreglo array. Devuelve undefined si el arreglo está vacío.
//   // PISTA: Usa el método Math.random().
//   // Tu código:
  
// }

// Mi solucion
// function obtenerElementoAleatorio(array) {
//   if (array.length > 0){
//     var maximo = array.length + 1
//     return array[Math.floor(Math.random(maximo))]
//   }
//   return undefined;
// }

// Tu solución para obtener un elemento aleatorio de un arreglo utilizando Math.random() es correcta, pero hay un pequeño error en la llamada a Math.random(). La función Math.random() no toma argumentos, por lo que no es necesario pasar maximo como argumento. Deberías usar Math.floor(Math.random() * maximo).

// Aquí está tu función corregida:
// function obtenerElementoAleatorio(array) {
//   if (array.length > 0) {
//     var maximo = array.length;
//     return array[Math.floor(Math.random() * maximo)];
//   }
//   return undefined;
// }
// PASS  M07 Arrays/tests/M7T4.test.js
module.exports = obtenerElementoAleatorio;

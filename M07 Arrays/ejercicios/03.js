function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  if (array.length > 0){
    for (let i = 0 ; i < array.length; i++){
      if (elemento === array[i]) return i;
    }
  }
  return -1;
}

// Consigna:
// function encontrarElemento(elemento, array) {
//   // Busca el elemento pasado por argumento dentro del array.
//   // Si no se encuentra, retorna -1.
//   // Tu código:

// }

// Mi solucion
// function encontrarElemento(elemento, array) {
 
//   if (array.length > 0){
//     for (let i = 0 ; i < array.length; i++){
//       if (elemento === array[i]) return i;
//     }
//   }
//   return -1;
// }

// ChatGPT 
// Otra alternativa sería utilizar el método indexOf() que está disponible en los arreglos en JavaScript:
// function encontrarElemento(elemento, array) {
//   return array.indexOf(elemento);
// }
// PASS  M07 Arrays/tests/M7T3.test.js
// Este método también devuelve el índice del elemento si se encuentra, y -1 si no está presente. 
module.exports = encontrarElemento;

function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var contador = 0;
  if (array.length > 0){
    for (let i = 0; i < array.length; i++){
      if (array[i] > 10) {
        contador++;
      } 
    } 
  }
  return contador;
}

// Consigna:
// function contarElementosMayoresA10(array) {
//   // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
//   // Tu código:

// }

// Mi solucion:
// function contarElementosMayoresA10(array) {
  
//   var contador = 0;
//   if (array.length > 0){
//     for (let i = 0; i < array.length; i++){
//       if (array[i] > 10) {
//         contador++;
//       } 
//     } 
//   }
//   return contador;
// }

// ChatGPT
// Alternativamente, podrías utilizar el método filter() para lograr el mismo resultado de manera más concisa:
// function contarElementosMayoresA10(array) {
//   return array.filter(elemento => elemento > 10).length;
// }
// PASS  M07 Arrays/tests/M7T9.test.js
// Esta versión utiliza filter() para crear un nuevo arreglo con solo los elementos mayores a 10 y luego devuelve la longitud de ese arreglo.

// BlackboxAI
// Para mejorar la eficiencia de esta solución, puedes utilizar el método filter en lugar de un bucle for. El método filter crea un nuevo array con todos los elementos que cumplen la condición especificada por una función.
// Esta solución es más eficiente porque el método filter internamente itera sobre los elementos del array y selecciona solo aquellos que cumplen la condición, evitando la necesidad de crear y actualizar un contador manualmente.
// function contarElementosMayoresA10(array) {
//   // Filtra el array y devuelve un nuevo array con los elementos mayores a 10.
//   const elementosMayoresA10 = array.filter(elemento => elemento > 10);
 
//   // Retorna la cantidad de elementos en el nuevo array.
//   return elementosMayoresA10.length;
//  }
//  PASS  M07 Arrays/tests/M7T9.test.js
module.exports = contarElementosMayoresA10;

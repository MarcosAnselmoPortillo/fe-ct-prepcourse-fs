function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var nuevoArray = Array();
  if (array.length > 0){
    for (let i=0; i< array.length; i++){
      if (typeof (array[i]) === "string"){
        nuevoArray.push(array[i].toUpperCase())
      } else nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
}

// Consigna:
// function convertirStringAMayusculas(array) {
//   // Convierte a mayúsculas todos los strings del array.
//   // Retorna el arreglo resultante.
//   // Tu código:
// }

// Mi solucion
// function convertirStringAMayusculas(array) {
//   var nuevoArray = Array();
//   if (array.length > 0){
//     for (let i=0; i< array.length; i++){
//       if (typeof (array[i]) === "string"){
//         nuevoArray.push(array[i].toUpperCase())
//       } else nuevoArray.push(array[i])
//     }
//   }
//   return nuevoArray;
// }
// ChatGPT
// Esta versión utiliza map() para aplicar la conversión a mayúsculas a cada elemento del arreglo.
// function convertirStringAMayusculas(array) {
//   return array.map(elemento => typeof elemento === "string" ? elemento.toUpperCase() : elemento);
// }
// PASS  M07 Arrays/tests/M7T7.test.js

// BlackboxAI
// To improve your solution for converting all strings in an array to uppercase in JavaScript, you can use the map method. The map method creates a new array with the results of calling a provided function on every element in the array.

// Here's the improved solution:
// function convertirStringAMayusculas(array) {
//   return array.map(element => typeof element === 'string' ? element.toUpperCase() : element);
// }
// map is an array method that iterates over each element in the array, applying a function to transform the elements.
// The function takes one argument: an element from the array.
// If the element is a string, it converts it to uppercase using the toUpperCase() method.
// If the element is not a string, it leaves it unchanged.
// This solution is more efficient because it uses a built-in method that handles the iteration for you, and it creates a new array with the transformed elements, without modifying the original array.
module.exports = convertirStringAMayusculas;

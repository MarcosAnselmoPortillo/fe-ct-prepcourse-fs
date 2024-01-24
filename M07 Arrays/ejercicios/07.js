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
module.exports = convertirStringAMayusculas;

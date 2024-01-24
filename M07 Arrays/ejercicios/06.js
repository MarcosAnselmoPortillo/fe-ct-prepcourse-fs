function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var nuevoArray = Array();
  if (array.length > 0){
    for (let i = 0; i < array.length; i++){
      nuevoArray.push(array[i] * 2);
    }
  }
  return nuevoArray;
}

// Consigna:
// function duplicarElementos(array) {
//   // Duplica (multiplica x2) cada elemento del array de números.
//   // Devuelve un array con los duplicados.
//   // Tu código:
// }

// Mi solucion: 
// function duplicarElementos(array) {
//   var nuevoArray = Array();
//   if (array.length > 0){
//     for (let i = 0; i < array.length; i++){
//       nuevoArray.push(array[i] * 2);
//     }
//   }
//   return nuevoArray;
// }

// ChatGPT y Bard
// Alternativamente, podrías utilizar el método map() para lograr el mismo resultado de manera más concisa:
// function duplicarElementos(array) {
//   return array.map(elemento => elemento * 2);
// }
// PASS  M07 Arrays/tests/M7T6.test.js

module.exports = duplicarElementos;

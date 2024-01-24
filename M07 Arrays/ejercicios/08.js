function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  
  //Solucion 1
  // var nuevoArray = Array();
  // if (array.length > 0){
  //   for (let i=0; i< array.length; i++){
  //     if (typeof (array[i]) === "number" && array[i] % 2 === 0){
  //       nuevoArray.push(array[i])
  //     }
  //   }
  // }
  // return nuevoArray;
  
  //Solucion 2
  return array.filter((array) => array % 2 === 0);
}

// Consigna:
// function filtrarNumerosPares(array) {
//   // Devuelve un arreglo solo con los números pares presentes en el array.
//   // Tu código:
// }

// Mi solucion
// function filtrarNumerosPares(array) {
//   return array.filter((array) => array % 2 === 0);
// }

// function filtrarNumerosPares(array) {
//   return array.filter((elemento) => elemento % 2 === 0);
// }
// PASS  M07 Arrays/tests/M7T8.test.js
module.exports = filtrarNumerosPares;

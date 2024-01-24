function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  
  //Solución 1:
  var nuevoArray = [];
  if (array.length > 0){
    for (let i = array.length - 1; i >= 0; i--) {
        nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
  
  //Solución 2
  // return array.reverse();
}


// Consigna
// function invertirArray(array) {
//   // Invierte el arreglo array recibido por argumento.
//   // Tu código:
// }



// Mi solucion:
// function invertirArray(array) {
//   var nuevoArray = [];
//   if (array.length > 0){
//     for (let i = (array.length - 1); i >= 0; i--) {
//         nuevoArray.push(array[i]);
//     }
//   }
//   return nuevoArray;
  
// }
module.exports = invertirArray;

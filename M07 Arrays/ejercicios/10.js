// function encontrarIndiceMayor(array) {
//   // Encuentra el índice del número más grande en el array de números.
//   // Devuelve el valor de este índice.
//   // Tu código:
//   var mayorTemporal = 0;
//   var indiceMayor = -1;
//   // array.forEach(encontrarMayor); 
//   // return indiceMayor;

//   // function encontrarMayor (elemento, indice){
//   //   if (elemento > mayorTemporal){
//   //       mayorTemporal = elemento;
//   //       indiceMayor = indice
//   //   }
//   // }
//   if (array.length > 1){
//     // console.log (array)
//     for (i = 0; i < array.length; i++){
//       // console.log(array[i]);
//       if (array[i] > mayorTemporal){
//         // console.log (mayorTemporal)
//         mayorTemporal = array[i];
//         // console.log (indiceMayor)
//         indiceMayor = i;
//       }
//     }
//   } else if (array.length === 1) return 0;
//   return indiceMayor;
// }

// // var array = [-1,2];
// // console.log(encontrarIndiceMayor (array))

// Consigna
// function encontrarIndiceMayor(array) {
//   // Encuentra el índice del número más grande en el array de números.
//   // Devuelve el valor de este índice.
//   // Tu código:
// }

// Mi solucion
// function encontrarIndiceMayor(array) {
//   // Encuentra el índice del número más grande en el array de números.
//   // Devuelve el valor de este índice.
//   // Tu código:
//   var mayorTemporal = 0;
//   var indiceMayor = -1;
//   // array.forEach(encontrarMayor); 
//   // return indiceMayor;

//   // function encontrarMayor (elemento, indice){
//   //   if (elemento > mayorTemporal){
//   //       mayorTemporal = elemento;
//   //       indiceMayor = indice
//   //   }
//   // }
//   if (array.length > 1){
//     // console.log (array)
//     for (i = 0; i < array.length; i++){
//       // console.log(array[i]);
//       if (array[i] > mayorTemporal){
//         // console.log (mayorTemporal)
//         mayorTemporal = array[i];
//         // console.log (indiceMayor)
//         indiceMayor = i;
//       }
//     }
//   } else if (array.length === 1) return 0;
//   return indiceMayor;
// }

// ChatGPT
function encontrarIndiceMayor(array) {
  var mayorTemporal = -Infinity; // Inicializar con un valor muy pequeño para manejar números negativos
  var indiceMayor = -1;

  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > mayorTemporal) {
        mayorTemporal = array[i];
        indiceMayor = i;
      }
    }
  }

  return indiceMayor;
}

module.exports = encontrarIndiceMayor;

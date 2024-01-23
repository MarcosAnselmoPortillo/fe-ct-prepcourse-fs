function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var contador = 0
  do {
    num += 5;
    contador ++;
  } while (contador < 8);
  return num;
}

// Consigna:
// function doWhile(num) {
//   // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
//   // Retorna el valor final.
//   // PISTA: Utiliza el bucle do-while.
//   // Tu código:
// }

// Mi solucion:
// function doWhile(num) {
//   var contador = 0
//   do {
//     num += 5;
//     contador ++;
//   } while (contador < 8);
//   return num;
// }

// ChatGPT 3.5

// Tu solución para incrementar el valor de "num" en 5 hasta un límite de 8 veces utilizando un bucle do-while es correcta y sigue la pista proporcionada en la consigna. El código es claro y efectivo.
module.exports = doWhile;
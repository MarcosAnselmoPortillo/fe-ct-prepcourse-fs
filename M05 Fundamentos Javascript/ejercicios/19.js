function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num > 0) {
    return ("Es positivo") //Los paréntesis en el return están de más. Ver solución de ChatGPT
  } else if (num < 0) {
      return ("Es negativo") //Los paréntesis en el return están de más. Ver solución de ChatGPT
  } else return false
}

// Consigna:
// function esPositivo(num) {
//   // La función recibe un entero. Devuelve como resultado un string que indica si el número
//   // es positivo o negativo.
//   // Si el número es positivo ---> "Es positivo".
//   // Si el número es negativo ---> "Es negativo".
//   // Si el número es 0, devuelve false.
//   // Tu código:
  
// }

// Mi solucion:
// function esPositivo(num) {
//   // La función recibe un entero. Devuelve como resultado un string que indica si el número
//   // es positivo o negativo.
//   // Si el número es positivo ---> "Es positivo".
//   // Si el número es negativo ---> "Es negativo".
//   // Si el número es 0, devuelve false.
//   // Tu código:
//   if (num > 0) {
//     return ("Es positivo")
//   } else if (num < 0) {
//       return ("Es negativo")
//   } else return false
// }

// ChatGPT 3.5
// function esPositivo(num) {
//   if (num > 0) {
//     return "Es positivo";
//   } else if (num < 0) {
//     return "Es negativo";
//   } else {
//     return false;
//   }
// }
// PASS  M05 Fundamentos Javascript/tests/M5T19.test.js

// Bard
// Una posible mejora:
// La función podría mejorarse utilizando la función Math.sign() para determinar el signo del número. La función Math.sign() devuelve un número entero que indica el signo del número. Un valor de 1 indica que el número es positivo, un valor de -1 indica que el número es negativo y un valor de 0 indica que el número es cero.
// function esPositivo(num) {
//   return (Math.sign(num) === 1 ? "Es positivo" : (Math.sign(num) === -1 ? "Es negativo" : false));
// }
// PASS  M05 Fundamentos Javascript/tests/M5T19.test.js


module.exports = esPositivo;
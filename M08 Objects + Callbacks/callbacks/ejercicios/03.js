function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:
  return cb(num1,num2);
}

// ChatGPT
// function operacionMatematica(num1, num2, cb) {
//   return cb(num1, num2);
// }

// Puedes utilizar esta función para realizar diversas operaciones matemáticas, pasando funciones de callback que realicen esas operaciones. Aquí hay un ejemplo:
// function suma(a, b) {
//   return a + b;
// }

// function resta(a, b) {
//   return a - b;
// }

// function multiplicacion(a, b) {
//   return a * b;
// }

// // Ejemplos de uso:
// console.log(operacionMatematica(5, 3, suma));           // Resultado: 8
// console.log(operacionMatematica(10, 4, resta));          // Resultado: 6
// console.log(operacionMatematica(2, 6, multiplicacion));  // Resultado: 12
// En este ejemplo, operacionMatematica se utiliza para realizar distintas operaciones matemáticas al pasar funciones de callback (suma, resta y multiplicacion). Cada una de estas funciones se ejecuta con los valores de num1 y num2 que se le proporcionan.

// BlackboxAI
// function operacionMatematica(num1, num2, cb) {
//   // Check if the callback is a function
//   if (typeof cb === 'function') {
//     // Apply the callback to the numbers and return the result
//     return cb(num1, num2);
//   } else {
//     console.error('El tercer argumento proporcionado no es una función.');
//   }
// }

// // Example usage:
// const sum = operacionMatematica(5, 7, function(num1, num2) {
//   return num1 + num2;
// });

// console.log(sum); // Output: 12

// const product = operacionMatematica(5, 7, function(num1, num2) {
//   return num1 * num2;
// });

// console.log(product); // Output: 35
// In this example, the operacionMatematica function takes two numbers and a callback as arguments. It first checks if the callback is a function. If it is, it applies the callback to the numbers using the () operator and returns the result. If the callback is not a function, it logs an error message to the console.

// The example usage shows how to use the operacionMatematica function with callbacks that perform addition and multiplication. The function takes the two numbers as arguments and returns the result of the operation. The results are then logged to the console.
module.exports = operacionMatematica;

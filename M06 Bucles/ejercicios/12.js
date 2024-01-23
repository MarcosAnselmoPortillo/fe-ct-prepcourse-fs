function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz"
  else if (num % 3 === 0) return "fizz"
  else if (num % 5 === 0) return "buzz"
  else return false;
}

// Consigna:
// function fizzBuzz(num) {
//   // Si "num" es divisible entre 3, retorna "fizz".
//   // Si "num" es divisible entre 5, retorna "buzz".
//   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
//   // De lo contrario, retorna false.
//   // Tu código:

// }

// Mi solución:
// function fizzBuzz(num) {

//   if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz"
//   else if (num % 3 === 0) return "fizz"
//   else if (num % 5 === 0) return "buzz"
//   else return false;
// }

// Bard
// function fizzBuzz(num) {
//   return (num % 3 === 0 && num % 5 === 0) ? "fizzbuzz"
//        : (num % 3 === 0) ? "fizz"
//        : (num % 5 === 0) ? "buzz"
//        : false;
// }
// PASS  M06 Bucles/tests/M6T12.test.js
// Ternary Operator: While your if statements are clear, the logic could be condensed using a ternary operator for the "fizz" and "buzz" cases.
module.exports = fizzBuzz;

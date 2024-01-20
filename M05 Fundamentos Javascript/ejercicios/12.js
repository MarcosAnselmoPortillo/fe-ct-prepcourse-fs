function devolverString(string) {
  // La función recibe un argumento "string".
  // Debe retornar dicho string.
  // Tu código: 
  if ((typeof string) === "string") 
    return string;
  else 
    return false
}


// function devolverString(string) {
//   // La función recibe un argumento "string".
//   // Debe retornar dicho string.
//   // Tu código:
// }

// solución ChatGPT 3.5
// function devolverString(string) {
//   return string;
// }

// PASS  M05 Fundamentos Javascript/tests/M5T12.test.js
// √ Debe retornar el string provisto (1 ms)

// Solucion Bard
// function devolverString(string) {
//   return string;
// }

// PASS  M05 Fundamentos Javascript/tests/M5T12.test.js
// √ Debe retornar el string provisto (2 ms)
module.exports = devolverString;
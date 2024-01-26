function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // NOTA: no debes retornar nada.
  // Tu código:
  return cb();
}


// ChatGPT
// La función invocarCallback simplemente invoca (ejecuta) el callback que se le pasa como argumento. Como se indica en la consigna, no es necesario retornar nada. Aquí está la implementación:
// function invocarCallback(cb) {
//   cb();
// }
// PASS  M08 Objects + Callbacks/callbacks/tests/M8CT1.test.js

// BlackboxAI
// function invocarCallback(cb) {
//   // Verifica si `cb` es una función antes de invocarla.
//   if (typeof cb === 'function') {
//      // Invoca/ejecuta el callback `cb`.
//      cb();
//   } else {
//      console.error('El argumento proporcionado no es una función.');
//   }
//  }
//  PASS  M08 Objects + Callbacks/callbacks/tests/M8CT1.test.js
//  In this revised version, the function checks if the callback (cb) is a function before invoking it. This is a recommended practice to avoid potential errors when dealing with callbacks.
module.exports = invocarCallback;

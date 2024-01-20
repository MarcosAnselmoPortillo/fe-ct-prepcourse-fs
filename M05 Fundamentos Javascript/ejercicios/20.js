function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  if (letra === "a" || letra === "A" || letra === "e" || letra === "E" || letra === "i" || letra === "I" || letra === "o" || letra === "O" || letra === "u" || letra === "U"){
    return "Es vocal"
  } else {
    return "Dato incorrecto"
  }
}

// Consigna:
// function esVocal(letra) {
//   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//   // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
//   // Si no es vocal, tambien debe retornar "Dato incorrecto".
//   // Tu código:
//   }

//   Mi solucion:
// function esVocal(letra) {
//   if (letra === "a" || letra === "A" || letra === "e" || letra === "E" || letra === "i" || letra === "I" || letra === "o" || letra === "O" || letra === "u" || letra === "U"){
//     return "Es vocal"
//   } else {
//     return "Dato incorrecto"
//   }
// }

// ChatGPT 3.5
// function esVocal(letra) {
//   if (
//     letra === "a" ||
//     letra === "A" ||
//     letra === "e" ||
//     letra === "E" ||
//     letra === "i" ||
//     letra === "I" ||
//     letra === "o" ||
//     letra === "O" ||
//     letra === "u" ||
//     letra === "U"
//   ) {
//     return "Es vocal";
//   } else {
//     return "Dato incorrecto";
//   }
// }
// PASS  M05 Fundamentos Javascript/tests/M5T20.test.js

// Bard
// La función podría mejorarse utilizando una expresión switch. La expresión switch es una estructura de control que permite realizar una selección entre varios casos.
// function esVocal(letra) {
//   switch (letra) {
//     case "a":
//     case "A":
//     case "e":
//     case "E":
//     case "i":
//     case "I":
//     case "o":
//     case "O":
//     case "u":
//     case "U":
//       return "Es vocal";
//     default:
//       return "Dato incorrecto";
//   }
// }
// PASS  M05 Fundamentos Javascript/tests/M5T20.test.js
module.exports = esVocal;

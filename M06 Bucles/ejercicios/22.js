function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  if (mes >= 1 && mes <= 12){
    switch (mes) {
      case 2:
        return 28;
      case (4 || 6 || 9 || 11):
        return 30;
      case (1 || 3 || 5 || 7 || 8 || 10 || 12):
        return 31;
    }
  } else return 0;
}

// Consigna
// function diasEnMes(mes) {
//   // La función recibe un mes(número) por argumento.
//   // Determine cúantos días tiene el mes correspondiente a ese número.
//   // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
//   // Tu código:
  
// }

// Mi solucion:
// function diasEnMes(mes) {

//   if (mes >= 1 || mes <= 12){
//     switch (mes) {
//       case 2:
//         return 28;
//       case (4 || 6 || 9 || 11):
//         return 30;
//       case (1 || 3 || 5 || 7 || 8 || 10 || 12):
//         return 31;
//     }
//   } else return 0;
// }

// ChatGPT 3.5
// Tu solución tiene un pequeño error en la condición del if. Debes usar el operador lógico && en lugar de || para asegurarte de que mes esté en el rango correcto (entre 1 y 12). Además, en los casos del switch, la sintaxis case (4 || 6 || 9 || 11): no tiene el efecto deseado. Puedes manejar esos casos por separado.

// Aquí está una versión corregida de tu función:
// function diasEnMes(mes) {
//   if (mes >= 1 && mes <= 12) {
//     switch (mes) {
//       case 2:
//         return 28;
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         return 30;
//       default:
//         return 31;
//     }
//   } else {
//     return 0;
//   }
// }
// PASS  M06 Bucles/tests/M6T22.test.js
// Cambios realizados:

// Se corrigió la condición del if para usar && en lugar de ||.
// Se ajustaron los casos en el switch para manejar correctamente los meses que tienen 30 días.
module.exports = diasEnMes;

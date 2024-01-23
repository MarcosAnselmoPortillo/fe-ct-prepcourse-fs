function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var potenciaDeDos = 1;
  var exponente = 1;
  while (potenciaDeDos <= numero) {
    potenciaDeDos = (Math.pow(2,exponente));
    if ( potenciaDeDos === numero) {
        return true
    }
    exponente ++;
  }
  return false;
}

// Consigna:
// function esPotenciaDeDos(numero) {
//   // La función recibe un "numero" por argumento.
//   // Determina si es una potencia de 2.
//   // Devuelve true si lo es, sino devuelve false.
//   // PISTA: Utiliza un bucle while.
//   // Tu código:
// }

// Mi solucion:
// function esPotenciaDeDos(numero) {
//   var potenciaDeDos = 1;
//   var exponente = 1;
//   while (potenciaDeDos <= numero) {
//     potenciaDeDos = (Math.pow(2,exponente));
//     if ( potenciaDeDos === numero) {
//         return true
//     }
//     exponente ++;
//   }
//   return false;
// }

// ChatGPT 3.5
// function esPotenciaDeDos(numero) {
//   if (numero <= 0) {
//     return false; // Los números no positivos no son potencias de dos
//   }

//   let potenciaDeDos = 1;
  
//   while (potenciaDeDos < numero) {
//     potenciaDeDos *= 2;
//   }

//   return potenciaDeDos === numero;
// }
// PASS  M06 Bucles/tests/M6T21.test.js
// Cambios realizados:

// Se añadió una verificación inicial para asegurarse de que el número no sea negativo o cero, ya que no existen potencias de dos no positivas.
// Se utilizó un bucle while para calcular la potencia de dos, multiplicando por 2 en cada iteración hasta alcanzar o superar el número proporcionado.
// Se eliminó el uso de Math.pow para hacer el código más simple y eficiente.

// Bard
// function esPotenciaDeDos(numero) {
//   var potenciaDeDos = 1;
//   while (potenciaDeDos <= numero) {
//     potenciaDeDos = potenciaDeDos * 2;
//     if (potenciaDeDos === numero) return true;
//   }
//   return false;
// }
// PASS  M06 Bucles/tests/M6T21.test.js
// La función podría mejorarse utilizando una expresión condicional ?: para simplificar el código.
module.exports = esPotenciaDeDos;

function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  var divisores = 0;
  if ((Number.isInteger(numero)) && (numero >= 2)) {
    i = 1
    do {
      if (numero % i === 0) {
        divisores++
      }
      i++
    } while (i<=numero)
    if (divisores === 2){
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// Consigna:
// function esNumeroPrimo(numero) {
//   // La función recibe un argumento "numero".
//   // Determina si este corresponde a un número primo.
//   // De ser así, retorna true.
//   // De lo contrario, retorna false.
//   // IMPORTANTE: Recuerda que un número primo es aquel que
//   // solo es divisible por sí mismo y por 1.
//   // Tu código:
// }

// Mi solucion:
// function esNumeroPrimo(numero) {
//   var divisores = 0;
//   if ((Number.isInteger(numero)) && (numero >= 2)) {
//     i = 1
//     do {
//       if (numero % i === 0) {
//         divisores++
//       }
//       i++
//     } while (i<=numero)
//     if (divisores === 2){
//       return true
//     } else {
//       return false
//     }
//   } else {
//     return false
//   }
// }

// ChatGPT 3.5
// function esNumeroPrimo(numero) {
//   if (!Number.isInteger(numero) || numero < 2) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(numero); i++) {
//     if (numero % i === 0) {
//       return false;  // Si encuentra un divisor, no es primo
//     }
//   }

//   return true;  // Si no encontró divisores, es primo
// }
// PASS  M05 Fundamentos Javascript/tests/M5T33.test.js
// Cambios realizados:

// Cambio de do-while a for: Se cambió el bucle do-while a un bucle for, ya que es más común y adecuado para este caso.

// Optimización del bucle: En lugar de iterar hasta numero, se puede reducir la iteración hasta la raíz cuadrada de numero. Esto mejora la eficiencia porque si numero no es primo, al menos uno de los factores debe ser menor o igual a su raíz cuadrada.

// Simplificación de las condiciones: Se simplificaron las condiciones de verificación inicial para mejorar la claridad.


// Bard
// function esNumeroPrimo(numero) {
//   var divisores = 0;
//   if ((Number.isInteger(numero)) && (numero >= 2)) {
//     i = 1;
//     while (i <= Math.sqrt(numero)) {
//       if (numero % i === 0) {
//         divisores++;
//       }
//       i++;
//     }
//     if (divisores === 2) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }
// FAIL  M05 Fundamentos Javascript/tests/M5T33.test.js
// × 2 es un número primo (4 ms)
// × 3 es un número primo (1 ms)                                                                                             
// × 4 no es un número primo (1 ms)                                                                                          
// × 5 es un número primo                                                                                                    
// × 6 no es un número primo                                                                                                 
// × 7 es un número primo                                                                                                    
// × 8 no es un número primo                                                                                                 
// × 9 no es un número primo                                                                                                 
// × 10 no es un número primo (1 ms)                                                                                         
// × 11 es un número primo (1 ms)
module.exports = esNumeroPrimo;

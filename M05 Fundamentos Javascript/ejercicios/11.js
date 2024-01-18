function esMayorDeEdad(fechaNacimiento) {
//   // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
//   // de nacimiento de una persona.
//   // Determina si esta persona es mayor de edad (tiene 18 años o más).
//   // Devuelve true si lo es, caso contrario, retorna false.
//   // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
//   // Tu código:
//   // if (typeof fechaNacimiento === typeof new Date() && fechaNacimiento != "Invalid Date")
//   // return console.log("No es una fecha válida")
//   // else  
//   //   var dieciochoAñosEnMilisegundos = 5.676e+11;
//   //   var fechaNacimientoEnMilisegundos = fechaNacimiento.getTime();
//   //   var fechaActual = new Date();
//   //   var fechaActualEnMilisegundos = fechaActual.getTime();
//   //   var diferencia = fechaActualEnMilisegundos - fechaNacimientoEnMilisegundos;
//   //   console.log("1.",diferencia)
//   //   if (diferencia >= dieciochoAñosEnMilisegundos)
//   //     return true
//   //   else
//   //     return false
      // Solución copiada y testeada de Bard
      const fechaActual = new Date();
      const diferenciaEnAños = (Date.now() - fechaNacimiento.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      return diferenciaEnAños >= 18;
}

// function esMayorDeEdad(fechaNacimiento) {
//   // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
//   // de nacimiento de una persona.
//   // Determina si esta persona es mayor de edad (tiene 18 años o más).
//   // Devuelve true si lo es, caso contrario, retorna false.
//   // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
//   // Tu código:
// }

// Solución ChatGPT 3.5
// function esMayorDeEdad(fechaNacimiento) {
//   const fechaActual = new Date();
//   const añoNacimiento = new Date(fechaNacimiento).getFullYear();
//   const edad = fechaActual.getFullYear() - añoNacimiento;

//   return edad >= 18;
// }

// PASS  M05 Fundamentos Javascript/tests/M5T11.test.js
//   √ 18 años cumplidos (2 ms)
//   √ Menor de edad                                                                                                                                                                                                       
//   √ Mayor de edad por un día                                                                                                                                                                                            
//   √ Fecha de nacimiento en el futuro  

// Solucion Bard
// function esMayorDeEdad(fechaNacimiento) {
//   const fechaActual = new Date();
//   const diferenciaEnAños = (Date.now() - fechaNacimiento.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
//   return diferenciaEnAños >= 18;
// }

// Cabe destacar que el valor 365.25 es solo una aproximación del número promedio de días en un año. En realidad, el número de días en un año varía ligeramente debido a los años bisiestos. Sin embargo, para la mayoría de los propósitos, esta aproximación es suficiente.

// PASS  M05 Fundamentos Javascript/tests/M5T11.test.js
// √ 18 años cumplidos (1 ms)
// √ Menor de edad (1 ms)                                                                                                                                                                                                
// √ Mayor de edad por un día                                                                                                                                                                                            
// √ Fecha de nacimiento en el futuro  

module.exports = esMayorDeEdad;
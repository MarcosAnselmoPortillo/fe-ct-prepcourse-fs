function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (typeof fecha === typeof new Date() && fecha != "Invalid Date")
    return true
  else
    return false
}


// La consigna:
// function esFechaValida(fecha) {
  //   // La función recibe un argumento "fecha".
  //   // Comprueba si este corresponde a una fecha válida.
  //   // Si es así, retorna true, sino retorna false.
  //   // Tu código:
  // }
  
  // Mi solución:
  // function esFechaValida(fecha) {
    //   if (typeof fecha === typeof new Date() && fecha != "Invalid Date")
    //     return true
    //   else
    //     return false
    // }
    
    // Solución ChatGPT 3.5
    // function esFechaValida(fecha) {
    //   return fecha instanceof Date && !isNaN(fecha);
    // }
// En esta solución, verificamos dos condiciones:

// fecha instanceof Date: Nos aseguramos de que fecha sea una instancia de Date.
// !isNaN(fecha): Comprobamos que fecha no sea un valor NaN (Not a Number), lo que indica que la fecha es válida.

// PASS  M05 Fundamentos Javascript/tests/M5T10.test.js
// esFechaValida
//   √ should return true for a valid date (2 ms)                                                                                                                                                                               
//   √ should return false for an invalid date                                                                                                                                                                                  
//   √ should return false for an invalid date object (1 ms)  


// Solución Bard 1)
// function esFechaValida(fecha) {
//   return !isNaN(Date.parse(fecha));
// }
// Una posible optimización de tu solución sería utilizar el método Date.parse(). Este método devuelve un número que representa el número de milisegundos desde el 1 de enero de 1970, 00:00:00 UTC. Si el argumento fecha es una fecha válida, el método Date.parse() devolverá un número positivo. Si no lo es, el método Date.parse() devolverá NaN.
// Esta versión de la función es más eficiente que la tuya, ya que evita la necesidad de realizar una comparación de cadenas.
// FAIL  M05 Fundamentos Javascript/tests/M5T10.test.js
// esFechaValida
//   √ should return true for a valid date (3 ms)                                                                                                                                                                               
//   × should return false for an invalid date (2 ms)                                                                                                                                                                           
//   √ should return false for an invalid date object                                                                                                                                                                           
                                                                                                                                                                                                                             
// ● esFechaValida › should return false for an invalid date                                                                                                                                                                    
                                                                                                                                                                                                                             
//   expect(received).toBe(expected) // Object.is equality

//   Expected: false
//   Received: true

//      7 |
//      8 |   test("should return false for an invalid date", () => {
//   >  9 |     expect(esFechaValida("2022-01-01")).toBe(false);
//        |                                         ^
//     10 |   });
//     11 |
//     12 |   test("should return false for an invalid date object", () => {

// Solución Bard 2)
// Otra posible optimización sería utilizar el método Date.isValid(). Este método devuelve true si el argumento es una fecha válida.
// function esFechaValida(fecha) {
//   return Date.isValid(fecha);
// }
// Esta versión de la función es también más eficiente que la tuya, ya que evita la necesidad de realizar una conversión de tipo.
// FAIL  M05 Fundamentos Javascript/tests/M5T10.test.js
// esFechaValida
//   × should return true for a valid date (1 ms)                                                                                                                                                                               
//   × should return false for an invalid date                                                                                                                                                                                  
//   × should return false for an invalid date object                                                                                                                                                                           
                                                                                                                                                                                                                             
// ● esFechaValida › should return true for a valid date                                                                                                                                                                        

//   TypeError: Date.isValid is not a function


module.exports = esFechaValida;
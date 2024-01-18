function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  // console.log("1." , (typeof numero) === "number")
  // console.log("2", (numero - Math.ceil(numero)) == 0)
  if (((typeof numero) === "number" ) && ((numero - Math.ceil(numero)) == 0))
    return true
  else
    return false
}

// var resultado = esNumeroEntero (true);
// console.log("3",resultado);

module.exports = esNumeroEntero;


// Solución ChatGPT 3.5
// function esNumeroEntero(numero) {
//   return typeof numero === "number" && numero % 1 === 0;
// }
// numero % 1 === 0: Verificamos si el residuo de dividir el número entre 1 es igual a cero. Esto es cierto solo para números enteros.
// PASS  M05 Fundamentos Javascript/tests/M5T8.test.js
// esNumeroEntero
//   √ should return true for integer numbers (3 ms)                                                                                                                                                                            
//   √ should return false for non-integer numbers                                                                                                                                                                              
//   √ should return false for non-number values  


// Solución Bard 1)
// function esNumeroEntero(numero) {
//   return Number.isInteger(numero);
// }
// PASS  M05 Fundamentos Javascript/tests/M5T8.test.js
// esNumeroEntero
//   √ should return true for integer numbers (2 ms)                                                                                                                                                                            
//   √ should return false for non-integer numbers (1 ms)                                                                                                                                                                       
//   √ should return false for non-number values (1 ms)  


// Solución Bard 2)
// function esNumeroEntero(numero) {
//   return numero % 1 === 0;
// }
// FAIL  M05 Fundamentos Javascript/tests/M5T8.test.js
// esNumeroEntero
//   √ should return true for integer numbers (2 ms)                                                                                                                                                                            
//   √ should return false for non-integer numbers (1 ms)                                                                                                                                                                       
//   × should return false for non-number values (2 ms)                                                                                                                                                                         
                                                                                                                                                                                                                             
// ● esNumeroEntero › should return false for non-number values    

// Solucion Bard 2.1
// function esNumeroEntero(numero) {
//   if (typeof numero !== "number") {
//     return false;
//   }

//   return numero % 1 === 0;
// }
// PASS  M05 Fundamentos Javascript/tests/M5T8.test.js
// esNumeroEntero
//   √ should return true for integer numbers (2 ms)                                                                                                                                                                            
//   √ should return false for non-integer numbers                                                                                                                                                                              
//   √ should return false for non-number values  

// Solucion Bard 2.2
// function esNumeroEntero(numero) {
//   return !isNaN(numero) && numero % 1 === 0;
// }
// FAIL  M05 Fundamentos Javascript/tests/M5T8.test.js
// esNumeroEntero
//   √ should return true for integer numbers (3 ms)
//   √ should return false for non-integer numbers (1 ms)                                                                                                                                                                       
//   × should return false for non-number values (2 ms)                                                                                                                                                                         
                                                                                                                                                                                                                             
// ● esNumeroEntero › should return false for non-number values                                                                                                                                                                 
                                                                                                                                                                                                                             
//   expect(received).toBe(expected) // Object.is equality

//   Expected: false
//   Received: true

//     19 |
//     20 |   it("should return false for non-number values", () => {
//   > 21 |     expect(esNumeroEntero("42")).toBe(false);
//        |                                  ^
//     22 |     expect(esNumeroEntero(NaN)).toBe(false);
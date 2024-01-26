const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var contador = 0;
  for (const key in objeto) {
    contador ++;
  }
  return contador;
};

// Consigna:
// const contarPropiedades = (objeto) => {
//   // Cuenta y retorna el total de propiedades que tiene el objeto.
//   // PISTA: Puedes iterarlo usando el bucle for-in.
//   // Tu código:
// };

// Mi solucion:
// const contarPropiedades = (objeto) => {
//   var contador = 0;
//   for (const key in objeto) {
//     contador ++;
//   }
//   return contador;
// };

// ChatGPT
// Tu solución para contar las propiedades de un objeto utilizando un bucle for-in es correcta.
// Esta función itera a través de las propiedades del objeto utilizando un bucle for-in y aumenta el contador por cada propiedad encontrada. Finalmente, retorna el total de propiedades.

// Puedes usar esta función de la siguiente manera:
// const miObjeto = {
//   nombre: "Juan",
//   edad: 25,
//   ciudad: "Ejemplo"
// };

// console.log(contarPropiedades(miObjeto)); // Resultado: 3
// En este ejemplo, la función devuelve 3 ya que el objeto tiene tres propiedades: "nombre", "edad" y "ciudad".

// BlackboxAI
// const contarPropiedades = (objeto) => {
//   // Check if the object is valid
//   if (objeto && typeof objeto === 'object') {
//     // Initialize the counter variable
//     let contador = 0;
//     // Iterate over the object properties using the for-in loop
//     for (const key in objeto) {
//       // Increment the counter for each property
//       contador++;
//     }
//     // Return the total number of properties
//     return contador;
//   } else {
//     console.error('El argumento no es un objeto.');
//   }
// }

// // Example usage:
// const myObject = {
//   name: 'John Doe',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown',
//     state: 'CA',
//     zip: '12345'
//   }
// };

// const totalProperties = contarPropiedades(myObject);

// console.log(totalProperties); // Output: 4
// In this example, the contarPropiedades function takes an object as an argument. It first checks if the object is valid. If it is, it initializes a counter variable and iterates over the object properties using the for-in loop. For each property, it increments the counter. Finally, it returns the total number of properties. If the object is not valid, it logs an error message to the console.

// The example usage shows how to use the contarPropiedades function with an object. The function counts the total number of properties in the object and returns the result, which is then logged to the console.

// Your solution is correct, as it uses the for-in loop to iterate over the object properties and counts the total number of properties. The for-in loop is a JavaScript loop that iterates over the properties of an object. It is useful for iterating over all the properties of an object, including inherited properties. In this case, it is used to iterate over the properties of the object and count the total number of properties.

module.exports = contarPropiedades;

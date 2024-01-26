function verificarPropiedad(objeto, propiedad) {
  // Verifica si el objeto posee la propiedad recibida.
  // Retorna true si la tiene, sino retorna false.
  // PISTA: Puedes usar el método hasOwnProperty().
  // Tu código:
  return objeto.hasOwnProperty(propiedad);
}

// Consigna:
// function verificarPropiedad(objeto, propiedad) {
//   // Verifica si el objeto posee la propiedad recibida.
//   // Retorna true si la tiene, sino retorna false.
//   // PISTA: Puedes usar el método hasOwnProperty().
//   // Tu código:
// }

// Mi solucion: 
// function verificarPropiedad(objeto, propiedad) {
//   return objeto.hasOwnProperty(propiedad);
// }

// ChatGPT
// Tu solución para verificar si un objeto posee una propiedad utilizando el método hasOwnProperty() es correcta y eficiente.
// Esta función devuelve true si la propiedad existe en el objeto y false si no existe. El método hasOwnProperty() es una forma segura de verificar si un objeto posee una propiedad específica.

// Puedes utilizar esta función de la siguiente manera:
// const miObjeto = {
//   nombre: "Juan",
//   edad: 25,
//   ciudad: "Ejemplo"
// };

// console.log(verificarPropiedad(miObjeto, "edad"));   // Resultado: true
// console.log(verificarPropiedad(miObjeto, "altura")); // Resultado: false
// En el primer ejemplo, la propiedad "edad" existe en el objeto, por lo que la función devuelve true. En el segundo ejemplo, la propiedad "altura" no existe en el objeto, por lo que la función devuelve false.

// BlackboxAI
// function verificarPropiedad(objeto, propiedad) {
//   // Check if the object and property are valid
//   if (objeto && typeof objeto === 'object' && propiedad && typeof propiedad === 'string') {
//     // Use the hasOwnProperty method to check if the object has the property
//     return objeto.hasOwnProperty(propiedad);
//   } else {
//     console.error('El primer argumento no es un objeto o el segundo argumento no es una cadena.');
//   }
// }

// // Example usage:
// const myObject = {
//   name: 'John Doe',
//   age: 30
// };

// const hasNameProperty = verificarPropiedad(myObject, 'name');
// const hasAddressProperty = verificarPropiedad(myObject, 'address');

// console.log(hasNameProperty); // Output: true
// console.log(hasAddressProperty); // Output: false
// In this example, the verificarPropiedad function takes an object and a property name as arguments. It first checks if the object and property are valid. If they are, it uses the hasOwnProperty method to check if the object has the property. If the object or property are not valid, it logs an error message to the console.

// The example usage shows how to use the verificarPropiedad function with an object and a property name. The function verifies if the object has the property and returns a boolean value, which is then logged to the console.

// Your solution is correct, as it uses the hasOwnProperty method to check if the object has the property. The hasOwnProperty method returns a boolean value indicating whether the object has the property or not.
module.exports = verificarPropiedad;

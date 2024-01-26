function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  objeto[propiedad] = valor;
  return objeto;
}

// var obj = {
//   nombre: "marcos",
//   edad: 39
// };
// console.log(actualizarValorPropiedad(obj,"edad","40"));
// console.log(obj)

// Consigna:
// function actualizarValorPropiedad(objeto, propiedad, valor) {
//   // Actualiza el valor de la propiedad del objeto recibidos en la función.
//   // Retorna el objeto actualizado.
//   // Tu código:
// }

// Mi solucion:
// function actualizarValorPropiedad(objeto, propiedad, valor) {
//   return objeto[propiedad] = valor;
// }

// ChatGPT

// Tu solución para actualizar el valor de una propiedad en un objeto es correcta, pero la función actualmente retorna el nuevo valor asignado, no el objeto completo. La consigna indica que la función debe retornar el objeto actualizado. Aquí tienes la corrección:
// function actualizarValorPropiedad(objeto, propiedad, valor) {
//   objeto[propiedad] = valor;
//   return objeto;
// }
// En esta versión, primero actualizamos el valor de la propiedad del objeto y luego retornamos el objeto completo.

// Puedes utilizar esta función de la siguiente manera:
// const miObjeto = {
//   nombre: "Juan",
//   edad: 25,
//   ciudad: "Ejemplo"
// };

// console.log(actualizarValorPropiedad(miObjeto, "edad", 30)); // Retorna el objeto actualizado con edad: 30

// BlackboxAI
// function actualizarValorPropiedad(objeto, propiedad, valor) {
//   // Check if the object and property are valid
//   if (objeto && typeof objeto === 'object' && propiedad && typeof propiedad === 'string') {
//     // Update the value of the property
//     objeto[propiedad] = valor;
//     // Return the updated object
//     return objeto;
//   } else {
//     console.error('El primer argumento no es un objeto o el segundo argumento no es una cadena.');
//   }
// }

// // Example usage:
// const myObject = {
//   name: 'John Doe',
//   age: 30
// };

// const updatedObject = actualizarValorPropiedad(myObject, 'name', 'Jane Doe');

// console.log(updatedObject); // Output: { name: 'Jane Doe', age: 30 }
// In this example, the actualizarValorPropiedad function takes an object, a property name, and a new value as arguments. It first checks if the object and property are valid. If they are, it updates the value of the property using the dot notation and returns the updated object. If the object or property are not valid, it logs an error message to the console.

// The example usage shows how to use the actualizarValorPropiedad function with an object, a property name, and a new value. The function updates the value of the property in the object and returns the updated object, which is then logged to the console.
module.exports = actualizarValorPropiedad;

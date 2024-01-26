const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  return objeto[propiedad];
};

// var obj = {
//   nombre: "marcos",
//   edad: 39
// };
// console.log(obtenerValorPropiedad(obj,""));

// Consigna:
// const obtenerValorPropiedad = (objeto, propiedad) => {
//   // Recibe un objeto y el nombre de una propiedad.
//   // Devuelve el valor de esta propiedad.
//   // Tu código:
// };

// ChatGPT
// const obtenerValorPropiedad = (objeto, propiedad) => {
//   return objeto[propiedad];
// };
// Esta función utiliza la notación de corchetes ([]) para acceder al valor de la propiedad especificada en el objeto. Puedes usar la función de la siguiente manera:
// const miObjeto = {
//   nombre: "Juan",
//   edad: 25,
//   ciudad: "Ejemplo"
// };

// console.log(obtenerValorPropiedad(miObjeto, "nombre")); // Resultado: "Juan"
// console.log(obtenerValorPropiedad(miObjeto, "edad"));   // Resultado: 25
// console.log(obtenerValorPropiedad(miObjeto, "ciudad")); // Resultado: "Ejemplo"
// En estos ejemplos, la función obtenerValorPropiedad se utiliza para obtener los valores de diferentes propiedades del objeto miObjeto.

// BlackboxAI
// const obtenerValorPropiedad = (objeto, propiedad) => {
//   // Check if the object and property are valid
//   if (objeto && typeof objeto === 'object' && propiedad && typeof propiedad === 'string') {
//     // Return the value of the property
//     return objeto[propiedad];
//   } else {
//     console.error('El primer argumento no es un objeto o el segundo argumento no es una cadena.');
//   }
// }

// // Example usage:
// const myObject = {
//   name: 'John Doe',
//   age: 30
// };

// const nameValue = obtenerValorPropiedad(myObject, 'name');
// const ageValue = obtenerValorPropiedad(myObject, 'age');

// console.log(nameValue); // Output: 'John Doe'
// console.log(ageValue); // Output: 30

// In this example, the obtenerValorPropiedad function takes an object and a property name as arguments. It first checks if the object and property are valid. If they are, it returns the value of the property using the dot notation. If the object or property are not valid, it logs an error message to the console.

// The example usage shows how to use the obtenerValorPropiedad function with an object and a property name. The function returns the value of the property, which is then logged to the console.
module.exports = obtenerValorPropiedad;

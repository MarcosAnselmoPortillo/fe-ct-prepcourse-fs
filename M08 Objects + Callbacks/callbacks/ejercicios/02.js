function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  return callback(string);
}

// var cadena = "string";
// console.log (cambiarCadena(cadena, cb))

// ChatGPT
// La función cambiarCadena recibe un string y una función de callback. La función de callback se aplica al string y devuelve el resultado. Aquí tienes la implementación:
// function cambiarCadena(string, callback) {
//   return callback(string);
// }
// En este caso, la función simplemente llama a la función de callback con el string proporcionado como argumento y devuelve el resultado. Puedes usar esta función para aplicar cualquier cambio o manipulación específica al string utilizando la función de callback.

// Por ejemplo, si tienes una función llamada agregarPrefijo que agrega un prefijo al string, puedes usar cambiarCadena de la siguiente manera:
// function agregarPrefijo(string) {
//   return "Prefijo: " + string;
// }
// En este ejemplo, cambiarCadena utiliza la función agregarPrefijo como callback para agregar el prefijo al string.

// BlackboxAI
// function cambiarCadena(string, callback) {
//   // Check if the callback is a function
//   if (typeof callback === 'function') {
//     // Apply the callback to the string and return the result
//     return callback(string);
//   } else {
//     console.error('El segundo argumento proporcionado no es una función.');
//   }
// }

// // Example usage:
// const uppercaseString = cambiarCadena('hello world', function(string) {
//   return string.toUpperCase();
// });
// In this example, the cambiarCadena function takes a string and a callback as arguments. It first checks if the callback is a function. If it is, it applies the callback to the string using the () operator and returns the result. If the callback is not a function, it logs an error message to the console.

// The example usage shows how to use the cambiarCadena function with a callback that converts the string to uppercase. The function takes the original string as an argument and returns the converted string. The result is then logged to the console.
// console.log(uppercaseString); // Output: 'HELLO WORLD'
// // var resultado = cambiarCadena("Texto a modificar", agregarPrefijo);
// // console.log(resultado);  // Resultado: "Prefijo: Texto a modificar"

module.exports = cambiarCadena;

// Consigna:
function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return objetoUsuario.hasOwnProperty("email") && objetoUsuario.email !== null && objetoUsuario.email !== undefined;
}


// ChatGPT
// La función tieneEmail verifica si el objeto de usuario (objetoUsuario) tiene un valor definido en su propiedad "email". Aquí tienes una implementación posible:
// function tieneEmail(objetoUsuario) {
//   return objetoUsuario.hasOwnProperty("email") && objetoUsuario.email !== null && objetoUsuario.email !== undefined;
// }
// Esta función utiliza la combinación de hasOwnProperty y verifica si el valor de la propiedad "email" no es null ni undefined. Si ambas condiciones son verdaderas, la función retorna true; de lo contrario, retorna false.

// Puedes usar esta función para verificar si un objeto de usuario tiene un email definido de la siguiente manera:
// const usuarioConEmail = {
//   email: "usuario@example.com",
//   // otras propiedades...
// };

// const usuarioSinEmail = {
//   // otras propiedades...
// };

// console.log(tieneEmail(usuarioConEmail)); // Resultado: true
// console.log(tieneEmail(usuarioSinEmail));  // Resultado: false
// En este ejemplo, tieneEmail se utiliza para verificar si el objeto usuarioConEmail tiene un email definido (lo cual es verdadero) y si el objeto usuarioSinEmail tiene un email definido (lo cual es falso).
module.exports = tieneEmail;

function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  return valor === null || typeof valor === "undefined"
}

module.exports = esNuloOIndefinido;

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof 
// Para las palabras clave true y null, el operador typeof devuelve los siguientes resultados:

// JS
// Copy to Clipboard
// typeof true === "boolean";
// typeof null === "object";
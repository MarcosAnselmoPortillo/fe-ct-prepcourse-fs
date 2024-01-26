// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    nombre: "marcos",
    apellido: "portillo",
    domicilio: {
        calle: "lugones",
        altura: 1495,
        localidad: "saladas",
    },
    obtenerDomicilio (){
        return ("Domicilio: "+ this.domicilio.calle + " " + this.domicilio.altura + " " + this.domicilio.localidad)
        // return (`Domicilio: ${this.domicilio.calle} ${this.domicilio.altura} ${this.domicilio.localidad}`)
    }
};

// console.log(objetoAnidado.obtenerDomicilio());
// Consigna:
// // Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

// Mi solucion:
// const objetoAnidado = {
//     nombre: "marcos",
//     apellido: "portillo",
//     domicilio: {
//         calle: "lugones",
//         altura: 1495,
//         localidad: "saladas",
//     },
//     obtenerDomicilio (){
//         return ("Domicilio: "+ this.domicilio.calle + " " + this.domicilio.altura + " " + this.domicilio.localidad)
//     }
// };

// ChatGPT 
// Tu solución para crear un objeto con propiedades anidadas y un método que accede a una de las propiedades anidadas utilizando this es correcta.
// Puedes usar este objeto y su método de la siguiente manera:
// console.log(objetoAnidado.obtenerDomicilio());
// // Resultado: "Domicilio: lugones 1495 saladas"

// BlackboxAI
// const objetoAnidado = {
//     nombre: "marcos",
//     apellido: "portillo",
//     domicilio: {
//       calle: "lugones",
//       altura: 1495,
//       localidad: "saladas",
//     },
//     obtenerDomicilio() {
//       // Use `this` to access the nested properties
//       return `Domicilio: ${this.domicilio.calle} ${this.domicilio.altura} ${this.domicilio.localidad}`;
//     },
//   };
  
//   // Example usage:
//   const myObject = {
//     name: "John Doe",
//     address: {
//       street: "123 Main St",
//       number: 123,
//       city: "Anytown",
//     },
//     getAddress() {
//       // Use `this` to access the nested properties
//       return `Address: ${this.address.street} ${this.address.number} ${this.address.city}`;
//     },
//   };
  
//   const address = myObject.getAddress();
  
//   console.log(address); // Output: Address: 123 Main St 123 Anytown
//   Using this is a common way to access the properties of an object in JavaScript. It allows you to write more reusable and modular code, as you can define methods that can be called on any object that has the same properties. In this case, the obtenerDomicilio method can be called on any object that has the domicilio property with the same nested properties.
module.exports = objetoAnidado;

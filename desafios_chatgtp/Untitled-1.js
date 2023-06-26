// Desafío 1: Crea una función que invierta el orden de las palabras en una frase. Por ejemplo, si se le pasa la frase "Hola mundo", la función debería devolver "mundo Hola".

function voltear(str) {
    let a = str.split(" ").reverse().join(" ");
    return a
}
let a = voltear("hola mundo")
console.log(a)


// Desafío 2: Escribe una función que encuentre el número más grande en un array de números. No puedes usar los métodos Math.max() o sort() para resolverlo. Debes encontrar una solución utilizando bucles y comparaciones.
//mi resolucion
function concat (...cadenas){
    let a = ""
    cadenas.forEach(element => {
        a += element
    });
 return a
}

console.log(concat("fds","fds","fds"))


//otra resolucion

function can(...concat) {
    let conca = concat.reduce((contador, valor)=> contador + valor)
    return conca
}
console.log(can("hola", "mundo", "como", "estas"));
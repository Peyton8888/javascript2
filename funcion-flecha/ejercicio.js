const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

const filtarpares = (numer) => {
    let fill = numer.filter(numeros => numeros % 2 ==0)
return fill}


const numerosPares = filtarpares(numeros);
console.log(numerosPares);




//respuesta 
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

// const filtrarPares = (numeros) => {
//   const numerosPares = numeros.filter(numero => numero % 2 === 0);
//   return numerosPares;
// };

// const numerosPares = filtrarPares(numeros);
// console.log(numerosPares);

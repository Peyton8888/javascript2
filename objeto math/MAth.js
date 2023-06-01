let  a = Math.PI;
console.log(a) 

let numero = 88888.88823
console.log(typeof(numero))

let one = numero.toFixed(2)
console.log(one)

let two = numero.toPrecision(10)
console.log(two)
console.log(numero)

let round = Math.round(numero) //Math.round(x)devuelve el entero más cercano:
console.log(round)
console.log(numero)

let floor = Math.floor(numero) //Math.floor(x)devuelve el valor de x redondeado hacia abajo a su entero más cercano:
console.log(floor)

let cel = Math.ceil(numero) //Math.ceil(x)devuelve el valor de x redondeado al entero más próximo: (al siguiente)
console.log(cel)

let truch = Math.trunc(numero) //Math.trunc(x)devuelve la parte entera de x:
console.log(truch)

//´potencia con math
let po = Math.pow(69,2)
console.log(po)

//Math.sqrt(x)devuelve la raíz cuadrada de x:
let rais = Math.sqrt(8)
console.log(rais)

//Math.abs(x)devuelve el valor absoluto (positivo) de x:
let abs = Math.abs(-9999)
console.log(abs)


let list = [1,32,43,23,231,243,534,43,32,32,2,2,53535435,345,345,34,5]
let math = Math.min(43,43,23,43,3,43,4,3,43,4)
let lis = Math.min(...list)
let lista = Math.max(...list)

console.log(lista)
console.log(lis)
console.log(math)


//MAth ramdom eeteros del 1 al 10
// resordar que asi como las listas las posiciones son una posicion antes

let ram = Math.floor( Math.random()*10 )+1

console.log(ram)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  let cc = getRndInteger(10,12)


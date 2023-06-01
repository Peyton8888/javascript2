//reduce

let array1 = [32,43,5,54,34,64,65,65,45,4,5,45,4,5,4,5,4,];
const sumaa = array1.reduce((total =0,valor) => total +valor )
console.log(sumaa)

//filter
let filtrar = array1.filter(valor => valor > 3)
console.log(filtrar)

//map
// console.log(array1)

let map = array1.map(valor => valor*2)
console.log(map)

//foreach
let a=""; 
let For = array1.forEach(valor => a+= valor )
console.log(a )

//every

let every = array1.every(valor => valor >1);
console.log(every)

//some

let some = array1.some(valor => valor > 64)
console.log(some)

//indexof 

let index = array1.indexOf(5)
console.log(index)

let list =[34,3,5,4,3,764,2,76,33,56,63]

// list.sort((a,b)=> b-a )
console.log(list)

//map

let map2 = list.map(valor => valor * 2)
console.log(map2)

//some
let some2 = list.some(valor => valor> 333)
console.log(some2)

//every
let every2 = list.every(valor => valor>7)
console.log(every2)

//find

let find2 = list.find(valor => valor > 34)
console.log(find2)

// letindex 
let indezfind = list.findIndex(valor => valor > 35)
console.log(indezfind)

let key = list.keys()

console.log(...key)
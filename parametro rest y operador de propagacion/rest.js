//factor de propagacion

let array = [23,23,32,23,23,3,23,];
let array2 = [ 32,23,32,32,34,3,23,32,32,3212]

//concatenacion sin el factor de propagacion
console.log(array + "a"+array2);

console.log([...array ,...array2])

// parametro rest 

function param(num1, num2, ...num3){
    let result=  num1 + num2

    num3.forEach(value => result += value )
    return result
}

console.log(param(3,32,32,23,43,32,1,23,23,23,232,3))
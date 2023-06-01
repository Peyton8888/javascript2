let array = ["sv", "mosing", "mac10", "pp2020"];
document.getElementById("array").innerHTML=array
document.getElementById("array2").innerHTML="los elementos son " +   array.length;

//tostring
document.getElementById("string").innerHTML=array.toString();

//join
document.getElementById("join").innerHTML=array.join("/");

//pop
document.getElementById("pop").innerHTML=array.pop();
document.getElementById("array3").innerHTML=array

//shift
document.getElementById("shift").innerHTML=array.shift();
document.getElementById("array4").innerHTML=array

//push
document.getElementById("push").innerHTML=array.push("aws-s");
document.getElementById("array5").innerHTML=array

//un shift
document.getElementById("unshift").innerHTML=array.unshift("scot");
document.getElementById("array6").innerHTML=array

//concat
const array2 = ["spas-12","ak-47","separador", "puños"]
const array3= array.concat(array2)
document.getElementById("concat").innerHTML=array3;

//flat
const array4 = [[1,2],[3,4],[5,6],[7,8]];
document.getElementById("flat").innerHTML=array4.flat();

//splice
array.splice(2,0,"scar", "bomba")
document.getElementById("splice").innerHTML=array;
// document.getElementById("array9").innerHTML=
// const array5 = ["foo", "bar", "baz"];
// array5.splice(2, 0, "scar", "bomba");
// document.getElementById("splice").innerHTML = array5.join(", ");

// Usando splice() para eliminar elementos
array.splice(0,2)
document.getElementById("spliceD").innerHTML=array;

//slice

let array5 = ["hola","que","tal","como","estas","bien","y","tu"]
document.getElementById("slice").innerHTML= array5.slice(3);
let array6 = ["hola","que","tal","como","estas","bien","y","tu"]

document.getElementById("slice2").innerHTML= array6.slice(0,3).join("/");

let arr=[1,2,3,4,5,6,7,8,9]
document.getElementById("slice22").innerHTML= arr.slice(0,5)
document.getElementById("slice222").innerHTML= arr

let arrae=[1,2,3,4,5,6,7,8,9]
document.getElementById("splice22").innerHTML=arrae.splice(9,0,10,11,12,13)
document.getElementById("splice222").innerHTML=arrae

//sort()
let sort=[154,3,2,57,9,74,23,1,24,36,57,6,6,45,43,4,32,53,45,35,]
document.getElementById("sort").innerHTML=sort.join("-")
document.getElementById("sort2").innerHTML=sort.sort((a,b)=>a-b )

document.getElementById("sort3").innerHTML=sort.sort((a,b)=>b-a)
// document.getElementById("sort3").innerHTML=sort.reverse()


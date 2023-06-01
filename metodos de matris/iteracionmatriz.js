let arr = [1,2,3,4,5,6,7,8]

// let txt="";
// arr.forEach(myFuntion);
// document.getElementById("foreach").innerHTML=txt;

// function myFuntion(value,index,array ){
// txt += value  + "<br>";
// }

let arra = [1,2,3,4,5,6,7,8]
document.getElementById("foreach1").innerHTML=arra;
let txt2 = "hi";
 arra.forEach(valor =>txt2 += valor +  "<br>")
 document.getElementById("foreach1").innerHTML=txt2;


let array =[6,65,56,6,5,6,8,8]
let txt3 ="<br>"
const a = array.map(valor => txt3 += valor *2+ "<br>")
document.getElementById("foreach2").innerHTML=txt3;

const map = [1,2,4,6,6,5,4,3,2,];
const nuevo = map.flatMap(x => x *2);
document.getElementById("map2").innerHTML=nuevo
document.getElementById("map").innerHTML=map


//filter 

const lista = [23,2,4,3,44,32,3,2,3,2,4,3,5,54,5443,56,34,43,5,5,4,,4,43,23,2,3,2,3,34,]
//filter
const lista2 = lista.filter(valor => valor >2)
document.getElementById("filter2").innerHTML= lista2

//reduce

const lista3 = lista.reduce(( total = 0,valor)=> total += valor,100)
document.getElementById("reduce2").innerHTML= lista3

//flatmap
const lista5 =[32,4,5,6,4,2];
const flatmap = lista5.flatMap(valor =>valor * 2 )
document.getElementById("Fatmap").innerHTML = flatmap


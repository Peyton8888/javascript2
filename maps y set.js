// boleanos
let a  = 100;
let b = Boolean(100)
console.log(b)



//funtion

function myFunction(age) {
    let voteable;
    
  
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }
  
    console.log(voteable + " to vote");
  }
  
  // Llamar a la función para probarla
  myFunction(Number("dfs"));


function calcularEdad(age){
    let  comprobar = "";
    if(isNaN(age)){
        comprobar = "esto no es una edad "
    }
    else{
        comprobar= age >18 ?"eres mayor":"eres menor";
    }
    console.log(comprobar)
}

let resultado = calcularEdad(Number("1000"))

const dic = {
    "modelo": "toyota",
    "color": "rojo",
    "llantas": "4"
}
console.log(dic?.arbol)

let dsate =new Date()
console.log(dsate)

if(dsate.getHours() == "15"){
    console.log("si")
}


if(new Date().getHours()== "16"){
    console.log("las 4")
}


function contarvocales(texto){
    let vocales=["a","e","i","o","u"];
    let contador = 0;
    // let tx =texto.toLowercase()

    for(let i = 0 ; i< texto.length; i++){
        const tx = texto[i].toLowerCase()
    
        if(vocales.includes(tx)){
            contador++
        }

    }
return contador
}

console.log( contarvocales("deisoxdfosifjdiofiafeosfidosf"));


function vocales(age){
    let vo = ["a","e","i","o","u"]
    let contador= 0;
    for(let i = 0;i<age.length; i++ ){
        let tx = age[i].toLowerCase()
    if(vo.includes(tx)){
        contador ++
    }
}return contador
}

let vv =vocales("areir")
console.log(vv)



var dd =""
function numeros(edad){

    if(edad == 0){
        console.log("es cero")
    }else if(isNaN(edad)){
        console.log("ingrese un numero")

    }
    else{
    const fil =  edad > 18 ?  console.log("eres grande") : console.log("eres menor raata")
    }
}

let nn  = numeros("jifdskhfds")
console.log(nn)



const obj = {
    "nombre" : "santiago",
    "apellido" : "huayhua",
    "edad" : "18"
}

for (const key in obj) {
    console.log(key)
    console.log(obj[key])
}

let peyton = "hola peyton"

for (const item of peyton) {
    console.log(item)
    
}


//set 


const gg = new Set([1,2,4,5,2,3,2])
console.log(...gg)

let val = ""
gg.forEach(function(valor){
    val +=  valor
    
})
console.log(val)

console.log(gg.values())

let te=""
for (const item of gg.values()) {
    te += item
    console.log (item)
}

//creando mapa--array

const mapa = new Map([
    ["nombre", 500],
    ["costo", 200],
    ["precio", 300]

]) 
console.log(mapa.get("nombre"))
console.log(mapa.size)
console.log(mapa.delete("costo"))
console.log(mapa)
console.log(mapa.has("precio"))



// mapa vacio

const mapa2 = new Map()
mapa2.set("hola", 400)

console.log(mapa2.get("hola"))

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

fruits.forEach((valor, llave)=> {
console.log(llave + " = "+ valor)})
let tx ="";
for (const iterator of fruits.entries()) {
    tx += iterator+ "<br>"; 
    console.log(tx)
}
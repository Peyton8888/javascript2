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
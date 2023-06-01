// javascript
// inerhtml cambia los valores del dom 
document.getElementById("demospan").innerHTML = Date()

//camniamdo de imagenes

function loop(num){
    let gg;
    if (num ==1){
        gg='loot-shirt-outfitTurkey.svg'
    }if (num ==2){
        gg='loot-shirt-outfitRed.svg'
    }
    document.getElementById('img').src = gg;
}
// usando el span 
let hola = "mundo como estan"
document.getElementById("aaa").innerHTML=hola;

// metodos string

var cam = document.getElementById("title");
document.getElementById("title").innerHTML= cam.textContent.toUpperCase(); 

var slice = document.getElementById("slice");
document.getElementById("slice").innerHTML=slice.textContent.slice(8);

var sub = document.getElementById("subString");
document.getElementById("subString").innerHTML=sub.textContent.substring(8);
var replace = document.getElementById("replace");
// uno solo
// document.getElementById("replace").innerHTML=replace.textContent.replace("good","fuck")
document.getElementById("replace").innerHTML=replace.textContent.replace(/good/gi,"fuck")

// trim

let tex="           surviv.io         2023  ";
document.getElementById("trim").innerHTML=tex.trim();

//pad start
let pad = document.getElementById("pads").textContent;
document.getElementById("pads").innerHTML = pad.padEnd(10,"8");

// padEnd
let pade = document.getElementById("pade").textContent;
document.getElementById("pade").innerHTML = pad.padStart(10,"8");

// length
let length= document.getElementById("length");
document.getElementById("length").innerHTML = length.textContent.length;

//split
let split=document.getElementById("split");
document.getElementById("split").innerHTML=split.textContent.split(" ");

//indexOf primero
let indexof = document.getElementById("indexof");
document.getElementById("indexof").innerHTML=indexof.textContent.indexOf("indexof");

//lastindexOf ultimo

let lastindexof = document.getElementById("lastindexof");
document.getElementById("lastindexof").innerHTML=lastindexof.textContent.lastIndexOf("indexof");

// nota de last y indexof
/*ambos pueden tener un segundo parametro que indica el numero de posicion a buscar
-let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);--->21

let text = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate", 15);--->7
*/

//chatAr
let chatar= document.getElementById("char").textContent;
document.getElementById("char").innerHTML = chatar.charAt(1)

//seach

let search = document.getElementById("search").textContent;
document.getElementById("search").innerHTML=search.search("javascript")

/*El search()método no puede aceptar un segundo argumento de posición inicial.
El indexOf()método no puede tomar valores de búsqueda poderosos (expresiones regulares).*/

//match()
let match=document.getElementById("match").textContent;
// todos los elementos a
let ma= match.match(/a/g)
//incluir mayuscula
let ma2= match.match(/a/gi)
document.getElementById("smatch").innerHTML= ma2.length + ma2

//matchAll()

let text = "I love cats. Cats are very easy to love. Cats are very popular."
let matchAll= text.matchAll(/cats/gi);
document.getElementById("matchAll").innerHTML= Array.from(matchAll)

// includes

let includes = document.getElementById("includes").textContent;
document.getElementById("includes").innerHTML= includes.includes("peyton") //tambien puedes ototgarle la posicioon a validar

// startsWith

//comiesa con startsWith
let startsWith = document.getElementById("startsWith").textContent;
document.getElementById("startsWith").innerHTML= startsWith.startsWith("hola")

//endswith 
// devuelve true
// let startsWith = document.getElementById("startsWith").textContent;
// document.getElementById("startsWith").innerHTML= startsWith.endsWith("tal")


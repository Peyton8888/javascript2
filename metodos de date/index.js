let fecha = new Date();
document.getElementById("fecha").innerHTML = fecha
let fecha2 = new Date(22-03-2010);
document.getElementById("fecha2").innerHTML = fecha2



function contarVocales(cadena) {
    let lis=["a","e","i","o","u"];
    cadena = cadena.toLowerCase()
    var contador = 0;
    for (let i= 0 ; i<cadena.length;i++ ){
        if(lis.includes(cadena[i])){
            contador++
        }
    }
}
  // Prueba de la función
  const texto = prompt("Ingrese una cadena de texto:");
  
  const cantidadVocales = contarVocales(texto);
alert("La cantidad de vocales en el texto es:", cantidadVocales);
  
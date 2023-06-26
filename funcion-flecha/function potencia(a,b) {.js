function potencia(a,b) {
    return Math.pow(a,b)
}
function raizCuadrada(numero) {
    // Tu código aquí
    return Math.sqrt(numero)
}
  
  // 3. Factorial: Recibe un número entero positivo y devuelve su factorial.
  function factorial(numero) {
    if (numero == 1){
        return 1;}
     else{   
    for (let i =1 ; i < numero; i++){
        numero[i]*=i
        return i
        }
        
    }    // Tu código aquí
  }
  
  // 4. Logaritmo: Recibe un número y devuelve su logaritmo en base 10.
  function logaritmo(numero) {
    // Tu código aquí
  }
  
  // 5. Sumatoria: Recibe un arreglo de números y devuelve la sumatoria de todos los elementos.
  function sumatoria(...arreglo) {
    // Tu código aquí
    arreglo.forEach(i =>{
        i += i
    return i
    }
    )

  }
  
  // Una vez que hayas completado las funciones, puedes probarlas llamándolas con algunos valores de ejemplo.
  
  // Ejemplo de uso:
  console.log(potencia(2, 3)); // Debería mostrar 8
  console.log(raizCuadrada(16)); // Debería mostrar 4
  console.log(factorial(5)); // Debería mostrar 120
  console.log(logaritmo(100)); // Debería mostrar 2
  console.log(sumatoria([1, 2, 3, 4, 5])); // 
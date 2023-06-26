
//set timeOut

// const temp = setTimeout(() => {
//     console.log("Esto se ejecuta 1 vez");
//   }, 3000);
  
  let interval = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
  }, 3000);
  
// let d= new Date()
// setInterval(()=> {
//     console.log(`${d.getHours()} ${d.getMinutes()} ${d.getSeconds()}`);
// },1000)

//limpieza de set interval y set time out

clearInterval(interval)
console.log("imprimir despues del interval")
// clearTimeout(interval)
function revetir(str){
 let str2 = str.split().reverse().join()
 return str2
}
const arra = revetir("lol")
console.log(arra)


function encontrar(str){
    
    let split = str.split(" ")
    const filtrar = split.filter( filtar => filtar.length > 5);
    return filtrar
}
console.log(encontrar("sdf hskfdsf shfdkjsf dhfhkfdsh dsfh sdffdjsfd"))
// a.length
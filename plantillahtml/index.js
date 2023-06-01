let text ="lista de armas"
let lista = ["sv-98", "aws-s" , "mac-10", "mosing"]


let html = `<h2>${text}</h2><ul>`

for (const iterator of lista) {
    html+=`<li>${iterator}</li> `
}
html +=`</ul>`

document.getElementById("lista").innerHTML=html;
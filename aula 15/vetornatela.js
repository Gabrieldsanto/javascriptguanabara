let valores = [1, 5, 8,7, 9]

valores.sort(7)

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/


/*
for(let pos=0; pos< valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

for(let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}´`)
}
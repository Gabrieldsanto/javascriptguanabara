
/* Para usar a hora atual do servidor use:

var agora= new Date()

var hora = agora.getHours()

*/

var hora = 17

console.log (`Agora são exatamente ${hora} horas.`)

if(hora < 12){
    console.log('Bom dia!!!')
}else if(hora <=17){
    console.log ('Boa tarde!!!')
}else {
    console.log('Boa noite!!!')
}
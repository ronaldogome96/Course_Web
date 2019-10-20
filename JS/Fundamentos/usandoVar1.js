{{{{{ var sera = "Sera???"}}}}}
 // A variavel VAr é global,menos quando esta dentro da função
console.log(sera)

function teste(){
    var local = 123
    console.log(local) // printa normalmente
}
teste()
console.log(local) //ERRO

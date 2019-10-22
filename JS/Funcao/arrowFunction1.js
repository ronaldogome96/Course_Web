//Forma normal de uma função
let dobro = function (a) {
    return 2*a
}


//Forma em arrow
dobro = (a) => {
    return 2*a
}
//Outra forma arrow, com somente uma instrução
dobro = a => 2*a

console.log(dobro(Math.PI))


let pal =  function() {
    return 'OLA'
}
//Forma arrow
pal = () => 'Ola' //Função sem parametro
console.log(pal())


function teste1 (num){
    if (num<7)
        console.log(num) // Apenas essa sentença esta associada ao if
        console.log('Final') // Essa nao esta, logo sempre sera executada quando a função é chamada
}

teste1(6)
teste1(8)


function teste2 (num){
    if (num>7); {
        console.log(num) // sempre vai ser executado pois existe o ; apos o if, encerrando ele ali mesmo
    }
}

teste2(8)
teste2(5)



const funcs = []

for (let i = 0 ; i<10 ; i++){
    funcs.push(function() {
        console.log(i)
    })
    //Let aramzena o valor dentro do bloco
}

funcs[2]()
funcs[8]()

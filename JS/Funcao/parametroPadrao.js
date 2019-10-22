 // estrategia 1 padra gera valor padrao
 function soma1(a,b,c){
     a = a|| 1
     b = b ||1
     c = c||1
     return a+b+c 
 }

 console.log(soma1(0,0,0)) // Printa 3 pois 0 é false

 function soma2(a,b,c) {
    a = a !== undefined ? a : 1 // 1) Ve se 'a' é estritamente diferente de undefined
                                 // 2) Se sim a=a, senao a=1
    b = 1 in arguments ? b : 1 // Se b for declarado ele tem seu valor, senoa é 1
    c = isNaN(c) ? 1 : c // Verifica de é NaN
    return a+b+c
 }

 console.log(soma2(0,0,0)) // Printa 0


 // Valor padrao es2015
 function soma3(a=1,b=1,c=1){
     return a+b+c // Melhor forma , pois ja inicializa as variaveis
 }
console.log(soma3(0,0,0)) // Printa 0
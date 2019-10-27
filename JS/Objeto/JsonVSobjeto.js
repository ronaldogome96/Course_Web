
const obj = { a:1 , b:2, c:3, soma(){ return a+b+c}}
//Converte a função em formato json (Formato textual)
console.log(JSON.stringify(obj))

//Converte de JSON para formato array
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))

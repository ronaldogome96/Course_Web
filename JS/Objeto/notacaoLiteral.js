
const a=1
const b=2 
const c =3

//Ambas fazem a mesma coisa
//Mais usada qundo é desejavel mudar o valor do argumento
const obj1 = {a:a , b:b, c:c}
//Usada quando nao tem que mudar o argumento
const obj2 = {a,b,c}
//Imprimen a mesma coisa
console.log(obj1, obj2)

const nomeAtr = 'Nota'
const valorAtrr= 7.87

//Vao printar a mesma coisa
const obj3 = {}
obj3[nomeAtr] = valorAtrr
console.log(obj3)

const obj4 = { [nomeAtr]: valorAtrr}
console.log(obj4)

//Forma de criar função dentro do objetos
const obj5 = {
    funcao: function(){
        //..
    }, 
    funcao2(){
        //..
    }
}

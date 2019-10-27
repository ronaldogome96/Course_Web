
function Aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

//Simulando o new

function novo(f,...params) {
    const obj = {}
    //Faz o objeto criado apontar para a função passada como parametro
    obj.__proto__ = f.prototype
    //Executa a função
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)

console.log(aula3)

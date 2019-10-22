function pessoa (nome = 'Desconhecido') {
    getnome = nome =>  {
        this.nome=nome
    }
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 =  new pessoa()
p1.falar()

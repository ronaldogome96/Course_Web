
class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

//extends é a forma de herdar atributos, como em java
class Pai extends Avo{
    constructor( sobrenome, profissao = 'Professor'){
        //Pega do avo o atributo sobrenome
        super(sobrenome)
        this.profissao=profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

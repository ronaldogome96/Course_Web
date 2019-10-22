const pessoa= {
    saudacao : 'Bom dia',
    falar () {
        console.log(this.saudacao)
    }
}
pessoa.falar() // Bom dia

const falar = pessoa.falar
falar() //undefined
// gera um conflito entre paradigma funcional e orientado a objeto
// em const falar nao existe um this, pois this esta dentro de pessoa, logo ele saudacao existe naquele local

const falarDePessoa =  pessoa.falar.bind(pessoa) 
falarDePessoa() // Bom dia
// Bind garante que a variavel falarDePessoa aponte para o mesmo this que pessoa
// Garante o mesmo corpo de função na variavel criada
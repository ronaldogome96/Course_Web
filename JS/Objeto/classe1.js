
class lacamento {
    //Cria a classe construtora
    constructor (nome ='Generico', valor = 0){
        this.nome =  nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lacamento=[]
    }
    //Recebe os parametros de lançamento
    addlancamento(...lacamento){
        lacamento.forEach(l => this.lacamento.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lacamento.forEach(l => {
            valorConsolidado+=l.valor
        })
        return valorConsolidado
    }
}

const salario = new lacamento('Salario', 4500)
const Luz = new lacamento('Luz', -220)

const contas = new CicloFinanceiro (6,2018)

contas.addlancamento(salario,Luz)
console.l(contas.sumario())


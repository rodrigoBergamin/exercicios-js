class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor (mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lanc){
        lanc.forEach(l => this.lancamentos.push(l))
        console.log(this.lancamentos) //adicionou  os lançamentos no meu array this.lancamentos de Ciclo Financeiro
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)
const ituran = new Lancamento('Ituran', -150)
const bonificacao = new Lancamento('Bonificação', 500)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, ituran, bonificacao)
console.log(contas.sumario())
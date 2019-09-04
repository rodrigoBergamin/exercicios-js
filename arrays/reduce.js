const alunos = [
    {nome: 'João', bolsista: true, nota: 9.8},
    {nome: 'Maria', bolsista: true, nota: 6.2},
    {nome: 'Victor', bolsista: true, nota: 7.8},
]

/*const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

*/

const bolsistas = alunos.map(function(aluno){
    return aluno.bolsista
})

console.log(bolsistas)


const todosSaoBolsistas = bolsistas.reduce((acumulador, atual) => acumulador && atual)

console.log(todosSaoBolsistas)

const algumBolsista = bolsistas.reduce(function(acumulador, atual){
    return acumulador || atual
})

console.log(algumBolsista)

/*const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log((total2/alunos.length).toFixed(2))*/

let arr = [1,2,3,4,5]

console.log(arr.indexOf(3))
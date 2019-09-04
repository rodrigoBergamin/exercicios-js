/*
for(let i = 1; i<= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6,7,6,2,5,10]

for (i in notas){ //i acessa o índice
    console.log(i, notas[i]) // notas[i] o conteúdo do índice
}
*/

const pessoa = {
    nome: 'Ana', 
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
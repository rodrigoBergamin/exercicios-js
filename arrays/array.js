let aprovados = new Array('Bia', 'Carlos', 'Ana' )// forma não recomendada
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana','Silvana']
console.log(aprovados)
console.log(aprovados[0])
aprovados.push('Charles')
console.log(aprovados)
console.log(aprovados.length) //tamanho do array

console.log(aprovados.sort()) //ordena o array

delete aprovados[1] //deleta um elemento de um array
console.log(aprovados[1])

aprovados.splice(1,4)
console.log(aprovados)
aprovados.splice(1,1, 'Elemento1', 'Elemento2')
console.log(aprovados)
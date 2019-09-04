const pilotos = ['Vettel', 'Senna', 'Raikkonen', 'Hamilton']
pilotos.pop()//Retira o último elemento
pilotos.push('Minha rola no seu cú')//Adiciona um elemento ao final da lista
pilotos.shift()//remove o primeiro elemento 
pilotos.unshift('Versttapen') //adiciona um elemento a primeira posição

//adicionando elementos de forma dinâmica

pilotos.splice(2, 0, 'Bottas', 'Massa') //Adiciona dois elementos a partir da segunda posição do array e não remove nenhum 

console.log(pilotos)

//removendo
pilotos.splice(3,1) //remove um elemento a partir do índice 3

const algunsPilotos1 = pilotos.slice(2) //gera novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(2,4)// gera novo array a partir do índice 2 até o 3

console.log(algunsPilotos2)
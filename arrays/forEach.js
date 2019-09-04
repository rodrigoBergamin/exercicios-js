const aprovados = ['Agatha','Angelina','Carolina','Hellen','Camille']

aprovados.forEach(function(element, index){ //percorrendo um array, sendo o primeiro parâmetro o próprio elemento, o segundo o índice e o terceiro seria o próprio array.
    console.log(`${index + 1}, ${element}`)
})

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados) //função callback forEach chamando a função exibirAprovados
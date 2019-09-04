const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})
console.log(tecnologias.get('angular').framework)

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]) //estrutura de um array que contém outros arrays, onde respectivamente o primeiro elemento é a chave e o segundo é o valor deste objeto
//não aceita repetições de suas chaves
chavesVariadas.forEach((valor, chave) =>{
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
console.log(chavesVariadas)
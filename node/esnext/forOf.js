for (let letra of 'Cod3r'){
    //console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
const assuntosEcma2 = new Map([
    ['Map', {abordagem:true}],
    ['Set', {abordagem:true}],
    ['Promises', {abordagem:false}]
])

for(let i in assuntosEcma){
    console.log(i) //laço for  percorrendo o índice do array
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

for(let [chave, valor] of assuntosEcma2.entries()){
    console.log(chave, valor)
}
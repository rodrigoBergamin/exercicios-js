function getInteiroAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Esta é a opção escolhida ... ${opcao}`)
}while(opcao != -1)

console.log('Fim')
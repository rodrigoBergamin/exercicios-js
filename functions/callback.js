const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice}. ${nome}`)
}

//fabricantes.forEach(imprimir)
//fabricantes.forEach(fabricante => console.log(fabricante))

/*
Função callback na linha 3.
Função callback é uma função que pode ser passada para outra função e que será disparada uma
ou várias vezes a partir de um determinado evento.
*/ 

//função forEach

nomes = ["Alberto", "Alex", "Sandro", "Roberta"];
nomesEmMaiusculo = []
function converterParaMaisculo(element, indice) {
    //nomesEmMaiusculo[indice] = element.toUpperCase();
    nomesEmMaiusculo[indice] = nomes[indice].toUpperCase();
    //element é o argumento obrigatório para função forEach, também pode ser representado por nomes[indice] = element
    //element é a variável responsável por passar os itens do array um de cada vez

}
 
nomes.forEach(converterParaMaisculo);
console.log(nomesEmMaiusculo)
console.log(nomesEmMaiusculo.indexOf("ALEX"))

/* Outro exemplo, transformando um objeto em um array e passando para forEach

const obj = {
    nome: 'Rodrigo',
    idade: 25
}

function lerObjeto(chave, valor){
    console.log(chave, valor)
}
Object.entries(obj).forEach(item => {console.log(item[0], item[1])});

*/
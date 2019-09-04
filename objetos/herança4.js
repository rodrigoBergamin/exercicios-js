function Aula(nome, videoID){ //função construtora
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo',123) //instanciando objetosn a função construtora
const aula2 = new Aula('Eita', 299)

console.log(aula1, aula2)

//simulando o operador new da função construtora

function novo(f,...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)
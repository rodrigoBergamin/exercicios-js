const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //retorna as chaves associadas aos valores do objeto pessoa
console.log(Object.values(pessoa)) //retorna os valores associados as chaves do objeto pessoa
console.log(Object.entries(pessoa)) //função entries retorna todos os atributos de um objeto em arrays de duas posições


function imprimir([chave,valor]){ //função que será retornada para callback forEach, onde percorrerá cada um dos elementos do array gerado
    //e retornará em chave e valor. Utilizamos o operador desctructuring [] para retornar os dois valores respectivos
        console.log(`${chave} : ${valor}`)
}

Object.entries(pessoa).forEach(imprimir) 

Object.defineProperty(pessoa, 'dataNascimento', {enumerable: true, writable: false, value: '01/01/2019'})  //Definindo propriedades de um objeto

pessoa.dataNascimento = '01/02/1970'
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const dest = {a:3}
const o = {b:2}
const c = {c:5, a:8}
const obj = Object.assign(dest, o, c)

console.log(obj)

Object.freeze(obj) //Congela o objeto, não permitindo alterações

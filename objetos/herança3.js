String.prototype.reverse = function (){ //adicionando uma nova funcionalidade ao protótipo de String
    return this.split('').reverse().join('')
}

console.log('Eu sou o Rodrigo'.reverse())

Array.prototype.first = function (){
    return this[0]
}

console.log([0,2,3,5,7,10].first())
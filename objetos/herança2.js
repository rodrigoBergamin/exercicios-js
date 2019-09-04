function MeuObjeto(){
}
//console.log(MeuObjeto.prototype) //Objetos criados a partir desta função, apontam para MeuObjeto.prototype

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//console.log(obj1.__proto__ === obj2.__proto__) //mesmo prototype

MeuObjeto.prototype.nome = 'Anonymous'
MeuObjeto.prototype.falar = function (){
    console.log(`Meu nome é ${this.nome}`)
}
obj1.nome = 'Gracinha'
obj1.falar()
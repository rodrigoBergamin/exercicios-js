class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é... ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)


// Utilizando função factory com arrow, para gerar um objeto pessoa
const criarPessoa = nome => {
    return{
        falar:() => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('James')
p2.falar()

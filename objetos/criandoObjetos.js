// usando a notação literal
const obj = {}
obj.nome = 'Michael'
obj.sobrenome = 'Kolsivks'
console.log(obj)

Object.freeze(obj) //congela o objeto citado, sendo impossível alterá-lo, torna o objeto uma constante
//Objetos em JS ... outra forma

const obj2 = new Object
obj2.nome = 'John'
obj2.sobrenome = 'Mitler'
console.log(obj2)

//Funções construtoras

function Produto(nome, preco, desconto){ //atributo preço e desconto permanecem encapsulados e escondidos dentro da função
    this.nome = nome //this torna o atributo público, visível e alterável para fora da função
    this.getPrecoComDesconto = function(){
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2988.88, 0.25)

//console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7880, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


//Uma função famosa q retorna um objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}') //Transformando um texto em formato JSON para objeto
console.log(fromJSON.info)
Object.prototype.z = 'Z' //não é recomendado
const avo = {a:'A'}
const pai = {__proto__: avo, b:'B'}
const filho = {__proto__: pai, c:'C'}

console.log(filho.z)

const carro = {
    velAtual : 0, 
    velMax : 200,

    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing. Sobrescreve o atributo do objeto pai (carro)
}

const volvo = {
    modelo: 'V40',
    velMax: 420,
    status(){
        return `${this.modelo}: ${super.status()}` //chamando o método status do objeto pai através do método super
        /*criamos um método status com o mesmo nome que o método do objeto pai (são dois métodos diferentes), neste caso, para não dar erro, utilizamos
        o método super para referenciar que queremos acessar o método status() do objeto pai */
    }
}

Object.setPrototypeOf(ferrari, carro) // estabelecendo relação de objeto (ferrari) com seu protótipo (carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(410)
console.log(volvo.status())
ferrari.acelerarMais(350)
console.log(ferrari.status())
console.log(ferrari.velAtual)

/*console.log(ferrari)
console.log(volvo)
*/

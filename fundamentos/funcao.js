//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

let a = 4
let b = 2

imprimirSoma(a, b)

//função com retorno

function soma(a, b = 0){ //variável b assume um valor padrão, caso não seja declarada
    return a + b
}

console.log(soma(a, b))
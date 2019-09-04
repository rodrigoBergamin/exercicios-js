const soma = (a,b) => {
    console.log('eita')
}

const eita = (a,b) => 'eita' + 'dois'

const lexico = console.log(this === exports)
const func1 = () => {
    let func2 = () => {
        return this === exports
    }
    return func2()
}

console.log(func1()) //contexto do this

//operador Rest




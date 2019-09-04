const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(r => {
    const funcionarios = r.data
    const soChinesas = funcionarios.filter(function(f){
        return f.genero === 'F' & f.pais === 'China'
    })
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    const func = soChinesas.reduce(menorSalario)
    console.log(func)
    /*const salarioChinesas = soChinesas.map(function(f){
        return f.salario
    })*/
    //console.log(salarioChinesas)

    /*const menorSalario = salarioChinesas.reduce(function(resultado, salario){
        return Math.min(resultado,salario) retornando o menor salário do array salarioChinesas utilizando reduce com a função Math.min
    })
    /*

    /* retornando menor salário do array salarioChinesas utilizando lodash
    const _ = require('lodash')
    console.log(_.min(salarioChinesas))
    */
    })
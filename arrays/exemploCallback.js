let salarioBruto = 5000;
let salarioLiquido;

getSalario(salarioBruto, valorLiquido => { //arrow functions || (parâmetro) => {//código a ser executado}
let bonus = 1000;    
salarioLiquido = valorLiquido + bonus;
    console.log(`O salário liquido é ${salarioLiquido}`);
});

function getSalario(salarioBruto, callback)
{
    let liquido;    
    const inss = salarioBruto * 0.11;
    const vr = salarioBruto * 0.05;
    const vt = salarioBruto * 0.06;
    const fgts = salarioBruto * 0.15;    
    const descontos = inss + vr + vt + fgts;    
    liquido = salarioBruto - descontos;
    
    return callback(liquido);
}
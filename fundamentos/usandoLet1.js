let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora =', numero) 

/*
Variável let tem escopo global,função, e de bloco como o exemplo acima
let numero dentro do bloco é uma variável e let numero fora do bloco é outra variável, 
elas não se comprometem entre si*/ 
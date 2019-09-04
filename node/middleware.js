// middleware pattern

const passo1 = (ctx, next) => { // criação de funções no padrão middleware, onde dividimos um processo em alguns passos(funções) que irão retornar
    ctx.valor1 = 'mid1'
    next() //partindo para a próxima função
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next() //partindo para próxima
}

const passo3 = (ctx) => {
    ctx.valor3 = 'mid3' //finalizando o modelo de cascata
}

const exec = (ctx, ...middlewares) => { //passando um contexto para função exec e um array de funções
    const execPasso = (indice) =>{ //função exec passos irá realizar verificações, passamos o indice como parâmetro
        middlewares && indice < middlewares.length && //se o array estiver setado e o indice for menor q o comprimento do array, faça:
            middlewares[indice](ctx, () => execPasso(indice +1)) //chamando cada uma das funções do array e passando os parâmetros ctx, e a própria função execPasso como next
    }
    execPasso(0)
}

const ctx = {} //criando um objeto vazio
exec(ctx, passo1, passo2, passo3) // passando para função exec, o nosso objeto ctx e o conjunto de passos
console.log(ctx)


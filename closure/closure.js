// Closure é o escopo criado quando uma função é declarada
// Um closure é uma função interior que tem acesso a variáveis de uma função exterior – cadeia de escopo.
// Esse escopo permite a função acessar e manipular variáveis externas à função
//O escopo externo de uma função é levado junto quando você acessa uma função, ela guarda a memória de onde ela foi definida


const x = 'Global'

function fora(){
    const x = 'Local'
        function dentro(){
        const x = 'eita' //A função sempre irá retornar a variável em seu nível mais profundo, subindo para camadas mais externas
        return x    
        }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
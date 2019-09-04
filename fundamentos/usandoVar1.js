var sera = 1
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

function (a){
    var sera = 'eita' + a

    console.log(sera)
}
console.log(sera)

// sobrescreve variável se tiver dentro de um bloco
// var é de escopo global e de função, não sobrescreve se estiver dentro de uma função
// var sera no escopo global é uma coisa, var sera no escopo da função é outra
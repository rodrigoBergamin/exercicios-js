// IIFE --> Expressão de Função Imediatamente Invocada (função autoinvocada)

(function(){ //qualquer variável criada aqui dentro, estará disponível apenas dentro desta função, fugindo assim do escopo global
        console.log('Será executado na hora')
        console.log('Estou fugindo do escopo global')

})()
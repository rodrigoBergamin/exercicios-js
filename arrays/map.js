//função map percorre cada um dos elementos de um array, transformando os dados e enviando para outro array

const numeros = [1,2,3,4,5]

//O map tem um loop for interno que faz uma transformação dos elementos, gerando outro array resultante

let resultado = numeros.map(function(e){
   return e * 2
})

console.log(resultado)

const elevando = e => Math.pow(e,4)

let elevadoa4 = numeros.map(elevando) //passando elevando como callback
console.log(elevadoa4)
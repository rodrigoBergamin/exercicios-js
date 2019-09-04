const peso1 = 1.0
const peso2 = Number('2.0')


console.log(peso1)
console.log(peso2)
console.log(Number.isInteger(peso2))

const avaliacao1 = 6.465
const avaliacao2 = 9.333

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/(peso1 + peso2)

console.log(media.toFixed(1))
console.log(media.toString())
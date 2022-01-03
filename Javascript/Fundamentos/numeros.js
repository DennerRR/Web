const peso1 = 1.0
const pesoDois = Number('2.1')

console.log(peso1, pesoDois)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(pesoDois))

const avaliacao1 = 9.689
const avaliacao2 = 5.89

const total = avaliacao1*peso1 + avaliacao2*pesoDois
const media = total/(peso1+pesoDois)
console.log(media.toFixed(3))
console.log(media.toString(3))
console.log(typeof media)
console.log(typeof Number)
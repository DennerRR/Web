let valor // não inicia
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 1.99
console.log(produto.preco)

produto.preco = undefined
console.log(!!produto.preco)
//delete produto.preco

console.log(produto)

produto.preco = null 
console.log(!!produto.preco)
console.log(produto)

let isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Trues...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Falses..")
console.log(!!0)
console.log(!!-0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Pra finalizar... ")
console.log(!!('' || null || 0 || ' '))


let name = ''
console.log(name || 'Desconhecido')
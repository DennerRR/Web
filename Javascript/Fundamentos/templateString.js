const nome = "Denner"
const concatecanao = "Olá, "+nome+"!"
const template = `
    Olá
    ${nome}!`

console.log(concatecanao, template)

//expressoes...

console.log(`1+1 = ${1 + 1}`)

const up = s => s.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`)